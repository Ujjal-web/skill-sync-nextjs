// app/testimonials/page.jsx
import { Star, Quote, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        name: "Aisha Khan",
        role: "Frontend Developer",
        quote:
            "I booked a single session to review my React portfolio and walked away with a clear roadmap. It was more helpful than weeks of tutorials.",
        highlight: "Landed 2 interviews within a month.",
        category: "Frontend",
    },
    {
        name: "Daniel Lee",
        role: "Product Designer & Mentor",
        quote:
            "SkillSync made it super easy to package my experience into focused sessions. I can mentor designers globally without overcomplicating logistics.",
        highlight: "Mentored 20+ designers across 5 countries.",
        category: "Design",
    },
    {
        name: "Maria Rodriguez",
        role: "Startup Founder",
        quote:
            "Instead of hiring an agency, I booked three targeted sessions: pitch deck review, GTM strategy, and landing page feedback. Fast, focused, and affordable.",
        highlight: "Raised a pre-seed round with a stronger story.",
        category: "Business",
    },
    {
        name: "James Parker",
        role: "Data Analyst",
        quote:
            "I used SkillSync to get feedback on a data project before an interview. The mentor gave me real-world tips I couldn’t find in any course.",
        highlight: "Got my first data role at a SaaS company.",
        category: "Data Science",
    },
    {
        name: "Sofia Martins",
        role: "Marketing Strategist",
        quote:
            "Running live copy critiques through SkillSync has been the easiest way to test new ideas and stay close to real businesses.",
        highlight: "Built a recurring client base from SkillSync sessions.",
        category: "Marketing",
    },
    {
        name: "Liam O’Connor",
        role: "CS Student",
        quote:
            "Mock interviews on SkillSync felt like the real thing. The feedback was direct, specific, and actually prepared me for on-site rounds.",
        highlight: "Cracked a big-tech internship.",
        category: "Programming",
    },
];

export default function TestimonialsPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Testimonials
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                            Real stories from SkillSync learners and mentors.
                        </h1>

                        <p className="mt-5 text-lg text-gray-600">
                            SkillSync isn&apos;t just another platform. It&apos;s a place
                            where people exchange real experience for real results. Here&apos;s
                            what some of them are saying.
                        </p>
                    </div>

                    {/* Quick stats */}
                    <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-3xl">
                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                            <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                                Average Session Rating
                            </p>
                        </div>
                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <p className="text-2xl font-bold text-gray-900">30+ </p>
                            <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                                Skill Categories
                            </p>
                        </div>
                        <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                            <p className="text-2xl font-bold text-gray-900">Global</p>
                            <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                                Learners & Mentors
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials grid */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                What people are saying
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
                                Every testimonial comes from a real session on SkillSync: mock
                                interviews, portfolio reviews, strategy calls, and more.
                            </p>
                        </div>
                        <div className="hidden sm:flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-2 text-indigo-500" />
                            Built around genuine 1:1 connections.
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t, idx) => (
                            <article
                                key={idx}
                                className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col"
                            >
                                {/* Quote icon */}
                                <div className="absolute -top-4 -right-2 opacity-10">
                                    <Quote className="w-16 h-16 text-indigo-500" />
                                </div>

                                <div className="flex items-center gap-2 text-yellow-500 text-xs font-semibold mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3 h-3 ${i < 4 ? "fill-yellow-400" : "fill-yellow-200"
                                                }`}
                                        />
                                    ))}
                                    <span className="ml-1 text-[11px] text-gray-500 uppercase tracking-wide">
                                        Session Rating
                                    </span>
                                </div>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    &ldquo;{t.quote}&rdquo;
                                </p>

                                <p className="mt-3 text-xs font-semibold text-indigo-600">
                                    {t.highlight}
                                </p>

                                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.name}</p>
                                        <p className="text-gray-500">{t.role}</p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-indigo-50 text-indigo-600">
                                        {t.category}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Your story could be next.
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                        Whether you&apos;re here to learn or to teach, SkillSync gives you
                        a focused, human way to grow. Start by exploring the exchange or
                        creating your first skill listing.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/exchange"
                            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition"
                        >
                            Browse Skills
                        </Link>
                        <Link
                            href="/register"
                            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                        >
                            Start Teaching
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}