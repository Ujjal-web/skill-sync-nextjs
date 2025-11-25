import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export default async function proxy(req) {
    try {
        const pathname = req.nextUrl.pathname;

        // Allow internals and static files
        if (
            pathname.startsWith("/_next/") ||
            pathname.startsWith("/api/") ||
            pathname.startsWith("/static/") ||
            pathname === "/favicon.ico" ||
            pathname.includes(".")
        ) {
            return NextResponse.next();
        }

        let token = null;
        try {
            token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        } catch (err) {
            console.error("[proxy] getToken error:", err && err.message ? err.message : err);
            token = null;
        }

        const isLoggedIn = !!token;

        // If logged in, redirect away from auth pages
        if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
            const dest = new URL("/", req.url);
            return NextResponse.redirect(dest);
        }

        // If not logged in, protect /addskill
        if (!isLoggedIn && pathname === "/addskill") {
            const loginUrl = new URL("/login", req.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }

        // Default: allow
        return NextResponse.next();
    } catch (err) {
        console.error("[proxy] unexpected error:", err && err.stack ? err.stack : err);
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        "/addskill",
        "/login",
        "/register",
        "/dashboard"
    ]
};