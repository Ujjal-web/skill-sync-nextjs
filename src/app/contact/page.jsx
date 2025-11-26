'use client'
import Link from "next/link";
import {
    Mail,
    MessageCircle,
    Phone,
    MapPin,
    Clock,
    Sparkles,
} from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Contact Us
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                            We&apos;d love to hear from you.
                        </h1>

                        <p className="mt-5 text-lg text-gray-600">
                            Questions about SkillSync, feedback on your experience, or ideas
                            for new features? Reach out and our small team will get back to
                            you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact content */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
                    {/* Left: info cards */}
                    <div className="space-y-5 lg:col-span-1">
                        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <h2 className="text-sm font-semibold text-gray-900">
                                General inquiries
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                For platform questions, partnerships, or press.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-gray-700">
                                <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                                <a
                                    href="mailto:support@skillsync.app"
                                    className="hover:text-indigo-600 transition"
                                >
                                    support@skillsync.app
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <h2 className="text-sm font-semibold text-gray-900">
                                Help with a session
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Having an issue with a booking, payment, or mentor? Let us
                                know and we&apos;ll investigate.
                            </p>
                            <div className="mt-4 space-y-2 text-sm text-gray-700">
                                <div className="flex items-center">
                                    <MessageCircle className="w-4 h-4 mr-2 text-indigo-500" />
                                    <span>Use the form and select &ldquo;Support&rdquo;.</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                                    <span>We usually reply within 24–48 hours.</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <h2 className="text-sm font-semibold text-gray-900">
                                Other ways to reach us
                            </h2>
                            <div className="mt-3 space-y-2 text-sm text-gray-700">
                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                                    <span>+8801749-xxxxxxx</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                                    <span>Remote-first, working across timezones.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: contact form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Send us a message
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Fill out the form below and we&apos;ll get back to you via
                                email. Please share as much context as you can so we can help
                                quickly.
                            </p>

                            <form
                                className="mt-6 space-y-5"
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    alert("This form is a demo.");
                                }}
                            >
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="topic"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Topic
                                        </label>
                                        <select
                                            id="topic"
                                            name="topic"
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            defaultValue="support"
                                        >
                                            <option value="support">Support / Issue</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="partnerships">Partnerships</option>
                                            <option value="teaching">
                                                I want to teach on SkillSync
                                            </option>
                                            <option value="learning">
                                                I want to learn on SkillSync
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            I&apos;m mainly here to
                                        </label>
                                        <select
                                            id="role"
                                            name="role"
                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            defaultValue="learn"
                                        >
                                            <option value="learn">Learn</option>
                                            <option value="teach">Teach</option>
                                            <option value="both">Both</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        placeholder="Tell us how we can help..."
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-gray-500">
                                        By submitting, you agree that we may contact you about your
                                        request.
                                    </p>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </form>

                            <p className="mt-5 text-xs text-gray-400">
                                Prefer email? Reach us directly at{" "}
                                <a
                                    href="mailto:support@skillsync.app"
                                    className="text-indigo-500 hover:text-indigo-600"
                                >
                                    support@skillsync.app
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Small CTA */}
            <section className="py-10 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
                    Looking to get started instead?{" "}
                    <Link
                        href="/exchange"
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        Browse skills
                    </Link>{" "}
                    or{" "}
                    <Link
                        href="/register"
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        create your first listing
                    </Link>
                    .
                </div>
            </section>
        </main>
    );
}