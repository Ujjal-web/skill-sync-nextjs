import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PROTECTED_PREFIX = "/dashboard";

export default async function proxy(req) {
    const pathname = req.nextUrl.pathname;
    const isProtectedPage = pathname.startsWith(PROTECTED_PREFIX);
    const isAuthPage = pathname === "/login" || pathname === "/register";

    if (
        pathname.startsWith("/_next/") ||
        pathname.startsWith("/api/") ||
        pathname === "/favicon.ico" ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    let token = null;
    try {
        token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    } catch (err) {
        console.error("[Proxy] getToken error:", err.message);
        token = null;
    }

    const isLoggedIn = !!token;

    // 2. Redirect logged-in users away from /login and /register
    if (isLoggedIn && isAuthPage) {
        // Redirect to the home page (or a post-login route)
        const dest = new URL("/", req.url);
        return NextResponse.redirect(dest);
    }

    // 3. Protect all /dashboard routes if the user is not logged in
    if (!isLoggedIn && isProtectedPage) {
        // Redirect the user to /login
        const loginUrl = new URL("/login", req.url);

        loginUrl.searchParams.set("callbackUrl", pathname);

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/register",
    ]
};