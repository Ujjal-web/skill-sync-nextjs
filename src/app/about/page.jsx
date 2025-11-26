import Link from "next/link";
import { Users, Sparkles, Globe2, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="max-w-4xl">
                        <p className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
                            <Sparkles className="w-3 h-3 mr-1" />
                            About SkillSync
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                            A marketplace built around people, not just products.
                        </h1>

                        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
                            SkillSync is a learning and teaching exchange where designers,
                            developers, writers, founders, and makers trade expertise. Instead
                            of just buying courses, you connect directly with real people who
                            know what you want to learn.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/exchange"
                                className="inline-flex items-center px-5 py-3 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition"
                            >
                                Explore the Exchange
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link
                                href="/register"
                                className="inline-flex items-center px-5 py-3 rounded-xl text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                            >
                                Become a Skill Provider
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & what we solve */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Our mission
                        </h2>
                        <p className="mt-4 text-gray-600 text-base leading-relaxed">
                            Learning shouldn&apos;t be locked behind expensive courses or
                            anonymous video platforms. SkillSync exists to make{" "}
                            <span className="font-semibold text-gray-900">
                                real, two-way learning
                            </span>{" "}
                            accessible – where you can ask questions, get feedback, and grow
                            faster with guidance from someone who&apos;s already walked your
                            path.
                        </p>
                        <p className="mt-4 text-gray-600 text-base leading-relaxed">
                            Whether you&apos;re polishing a portfolio, preparing for
                            interviews, or launching your first product, SkillSync helps you
                            find people who can accelerate that journey – and gives you a home
                            to offer your own expertise in return.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Community-driven
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Learn directly from practitioners, not generic content. Every
                                listing is a real person with real experience.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                <Globe2 className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Global & flexible
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Browse skills from around the world, filter by category, and
                                find the right person for your schedule and budget.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Clear expectations
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Each skill has a clear description, price, category, and
                                outcomes so you know what you&apos;re getting before you book.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Built for growth
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Turn your knowledge into a new income stream, or invest back
                                into your own learning – all in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How SkillSync fits into your journey */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                        Built for modern learners & creators
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-center text-gray-600 text-sm sm:text-base">
                        SkillSync is flexible enough to support different goals – whether
                        you&apos;re just starting out or already an expert.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-semibold text-gray-900">
                                For learners
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Get targeted help on exactly what you&apos;re stuck with – a
                                code review, a portfolio critique, a mock interview, or a
                                strategy session.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-semibold text-gray-900">
                                For experts & mentors
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Package your experience into clear offerings and let people find
                                you. You decide what you teach and how you teach it.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-semibold text-gray-900">
                                For teams & founders
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Bring in specialized help fast – from pitch-deck feedback to
                                product UX reviews – without long-term contracts or agencies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Ready to trade skills instead of just scrolling?
                    </h2>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">
                        Create your first skill listing in a few minutes, or browse the
                        exchange to see what other people are teaching right now.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/register"
                            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/exchange"
                            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                        >
                            Browse Skills
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}