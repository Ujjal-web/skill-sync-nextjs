import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const backendUrl =
    process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
            async authorize(credentials) {
                if (!credentials) return null;
                const res = await fetch(`${backendUrl}/auth/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
                });
                if (!res.ok) return null;
                const data = await res.json();
                return { ...data.user, accessToken: data.accessToken };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: { strategy: "jwt" },

    pages: { signIn: "/login" },

    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    console.log("signIn callback -> calling backend /auth/oauth at", backendUrl);
                    const res = await fetch(`${backendUrl}/auth/oauth`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            provider: "google",
                            providerId: account.providerAccountId,
                            email: user.email,
                            name: user.name,
                            picture: user.image
                        })
                    });

                    console.log("/auth/oauth status:", res.status);
                    const text = await res.text();
                    console.log("/auth/oauth body:", text);

                    if (!res.ok) return false;

                    let data;
                    try { data = JSON.parse(text); } catch (e) { data = null; }
                    if (!data || !data.accessToken) {
                        console.error("No accessToken returned from backend /auth/oauth");
                        return false;
                    }

                    user.accessToken = data.accessToken;
                    user.id = data.user?.id;
                    return true;
                } catch (err) {
                    console.error("signIn callback error:", err);
                    return false;
                }
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                if (user.accessToken) token.accessToken = user.accessToken;
                if (user.id) token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            session.user = session.user || {};
            session.user.id = token.id;
            session.accessToken = token.accessToken;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };