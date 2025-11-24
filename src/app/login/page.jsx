"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingCreds, setLoadingCreds] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // Credentials sign-in (uses NextAuth credentials provider)
    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        setLoadingCreds(true);

        // Request NextAuth to sign in.   redirect: false to handle result in the client.
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        });

        setLoadingCreds(false);

        if (res?.ok) {
            // successful sign-in — navigate to desired page
            router.push("/");
        } else {
            setError("Invalid email or password");
        }
    }

    // Google sign-in
    async function handleGoogleSignIn() {
        setError("");
        setLoadingGoogle(true);
        // This will redirect to Google. CallbackUrl so NextAuth returns here after success.
        await signIn("google", { callbackUrl: "/" });
        // note: execution will usually not reach here because signIn redirects,
        // but if it doesn't, stop the loading spinner.
        setLoadingGoogle(false);
    }

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.title}>Welcome back</h1>

                <p style={styles.subtitle}>Sign in to your account</p>

                {error && <div style={styles.error}>{error}</div>}

                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        style={styles.input}
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        style={styles.input}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button style={{ ...styles.button, opacity: loadingCreds ? 0.7 : 1 }} type="submit" disabled={loadingCreds}>
                        {loadingCreds ? "Signing in..." : "Sign in"}
                    </button>
                </form>

                <div style={styles.divider}>Or continue with</div>

                <div style={styles.socialRow}>
                    <button style={styles.googleBtn} onClick={handleGoogleSignIn} disabled={loadingGoogle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" style={{ height: 18, marginRight: 10 }}>
                            <path fill="#4285F4" d="M533.5 278.4c0-18.9-1.7-37-4.9-54.6H272v103.3h147.1c-6.4 34.7-25.2 64.1-53.6 83.7v69.5h86.6c50.6-46.6 80.4-115.4 80.4-201.9z" />
                            <path fill="#34A853" d="M272 544.3c72.6 0 133.4-24.1 177.9-65.5l-86.6-69.5c-23.9 16-54.4 25.3-91.3 25.3-70 0-129.4-47.2-150.6-110.4H31.1v69.3C75.1 488.5 168.1 544.3 272 544.3z" />
                            <path fill="#FBBC05" d="M121.4 332.1c-6.7-20.3-10.5-41.9-10.5-64 0-22.1 3.8-43.7 10.5-64V134.8H31.1C11.1 179.1 0 227.4 0 278.1s11.1 99 31.1 143.3l90.3-89.3z" />
                            <path fill="#EA4335" d="M272 108.4c39.3 0 74.6 13.4 102.5 39.6l76.8-76.8C405.3 24.1 344.5 0 272 0 168.1 0 75.1 55.8 31.1 134.8l90.3 69.3C142.6 155.6 202 108.4 272 108.4z" />
                        </svg>
                        {loadingGoogle ? "Opening Google..." : "Sign in with Google"}
                    </button>
                </div>

                <p style={styles.footerText}>
                    Don't have an account?{" "}
                    <a href="/register" style={styles.link}>Register</a>
                </p>
            </div>
        </div>
    );
}

/* Simple inline styles */
const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg,#f0f4ff,#fff)",
        padding: 20
    },
    card: {
        width: "100%",
        maxWidth: 460,
        background: "#ffffff",
        borderRadius: 12,
        padding: 28,
        boxShadow: "0 8px 30px rgba(22, 23, 28, 0.08)",
        textAlign: "center"
    },
    title: {
        margin: 0,
        fontSize: 22,
        fontWeight: 700,
        color: "#0f1724"
    },
    subtitle: {
        marginTop: 6,
        marginBottom: 18,
        color: "#6b7280"
    },
    form: {
        display: "grid",
        gap: 10,
        marginTop: 8
    },
    input: {
        padding: "12px 14px",
        fontSize: 15,
        borderRadius: 8,
        border: "1px solid #e6e9ef",
        outline: "none",
        width: "100%",
        boxSizing: "border-box"
    },
    button: {
        marginTop: 6,
        padding: "12px 14px",
        fontSize: 15,
        borderRadius: 8,
        border: "none",
        background: "linear-gradient(90deg,#3b82f6,#6366f1)",
        color: "white",
        cursor: "pointer"
    },
    divider: {
        marginTop: 18,
        marginBottom: 12,
        color: "#9ca3af",
        fontSize: 13
    },
    socialRow: {
        display: "flex",
        justifyContent: "center",
        gap: 10
    },
    googleBtn: {
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 8,
        border: "1px solid #e6e9ef",
        background: "white",
        cursor: "pointer",
        fontSize: 14
    },
    error: {
        background: "#fee2e2",
        color: "#991b1b",
        padding: "8px 12px",
        borderRadius: 8,
        marginBottom: 8,
        fontSize: 14
    },
    footerText: {
        marginTop: 14,
        fontSize: 13,
        color: "#6b7280"
    },
    link: {
        color: "#3742ff",
        textDecoration: "none",
        fontWeight: 600
    }
};
