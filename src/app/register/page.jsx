"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

// NOTE: You must set the NEXT_PUBLIC_BACKEND_URL environment variable
// in your Next.js environment (e.g., .env.local) if your backend is not running at localhost:4000.
// Example: NEXT_PUBLIC_BACKEND_URL=https://api.skillsync.com
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://skill-sync-server-delta.vercel.app';

// Simple SVG for loading spinner (reused from the login page)
const Spinner = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loadingCreds, setLoadingCreds] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleRegister(e) {
        e.preventDefault();
        setError("");
        setLoadingCreds(true);

        if (password !== confirmPassword) {
            setLoadingCreds(false);
            return setError("Passwords do not match.");
        }

        try {
            // 1. Call the backend registration API
            const registerRes = await fetch(`${BACKEND_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            if (!registerRes.ok) {
                // Registration failed (e.g., email already exists, invalid data)
                const errorData = await registerRes.json();
                const errorMessage = errorData.message || "Registration failed. Please try again.";
                setError(errorMessage);
                return;
            }

            // 2. Registration successful, attempt automatic login using next-auth credentials provider
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password
            });

            if (res?.ok) {
                router.push("/");
            } else {
                // If auto-sign-in fails, send them to the login page
                setError("Registration succeeded, but automatic login failed. Please sign in manually.");
                router.push("/login");
            }
        } catch (e) {
            console.error("Network or unexpected error during registration:", e);
            setError("A network error occurred. Please check your backend is running and try again.");
        } finally {
            setLoadingCreds(false);
        }
    }

    // Google sign-up (reused from login)
    async function handleGoogleSignIn() {
        setError("");
        setLoadingGoogle(true);
        // This will redirect to Google. CallbackUrl so NextAuth returns here after success.
        await signIn("google", { callbackUrl: "/" });
        setLoadingGoogle(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl transition duration-300 hover:shadow-3xl border border-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Join SkillSync Today
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 mb-6">
                        Create your account to start sharing and learning
                    </p>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-200" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                        placeholder="Full Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={loadingCreds || loadingGoogle}
                    />
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loadingCreds || loadingGoogle}
                    />

                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                        placeholder="Password (minimum 6 characters)"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={6}
                        required
                        disabled={loadingCreds || loadingGoogle}
                    />

                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={loadingCreds || loadingGoogle}
                    />

                    <button
                        className="w-full py-2.5 px-4 text-white font-semibold rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        type="submit"
                        disabled={loadingCreds || loadingGoogle}
                    >
                        {loadingCreds && <Spinner />}
                        {loadingCreds ? "Registering..." : "Create Account"}
                    </button>
                </form>

                {/* Divider for separating credentials and social login */}
                <div className="flex items-center my-6">
                    <div className="grow border-t border-gray-200"></div>
                    <span className="shrink mx-4 text-sm font-medium text-gray-400">
                        Or sign up with
                    </span>
                    <div className="grow border-t border-gray-200"></div>
                </div>

                {/* Google Sign-up Button */}
                <button
                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                    onClick={handleGoogleSignIn}
                    disabled={loadingGoogle || loadingCreds}
                >
                    {/* Google Icon */}
                    <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
                        <path fill="#4285F4" d="M533.5 278.4c0-18.9-1.7-37-4.9-54.6H272v103.3h147.1c-6.4 34.7-25.2 64.1-53.6 83.7v69.5h86.6c50.6-46.6 80.4-115.4 80.4-201.9z" />
                        <path fill="#34A853" d="M272 544.3c72.6 0 133.4-24.1 177.9-65.5l-86.6-69.5c-23.9 16-54.4 25.3-91.3 25.3-70 0-129.4-47.2-150.6-110.4H31.1v69.3C75.1 488.5 168.1 544.3 272 544.3z" />
                        <path fill="#FBBC05" d="M121.4 332.1c-6.7-20.3-10.5-41.9-10.5-64 0-22.1 3.8-43.7 10.5-64V134.8H31.1C11.1 179.1 0 227.4 0 278.1s11.1 99 31.1 143.3l90.3-89.3z" />
                        <path fill="#EA4335" d="M272 108.4c39.3 0 74.6 13.4 102.5 39.6l76.8-76.8C405.3 24.1 344.5 0 272 0 168.1 0 75.1 55.8 31.1 134.8l90.3 69.3C142.6 155.6 202 108.4 272 108.4z" />
                    </svg>
                    {loadingGoogle ? "Opening Google..." : "Sign up with Google"}
                </button>

                <p className="mt-6 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 transition duration-150">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}