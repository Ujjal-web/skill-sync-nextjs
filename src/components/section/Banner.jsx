import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export default function HeroBanner() {
    return (
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gray-900 text-white">
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "rgb(79, 70, 229)", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "rgb(124, 58, 237)", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0 0H1440V450C1100 550 340 550 0 450V0Z" fill="url(#gradient)" />
                    <circle cx="1200" cy="150" r="150" fill="rgba(167, 139, 250, 0.5)" className="animate-pulse" />
                    <rect x="50" y="300" width="100" height="100" rx="20" fill="rgba(255, 255, 255, 0.1)" className="rotate-45" />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-1 mb-6 text-sm font-semibold text-indigo-300 bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-full shadow-lg backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span>New Way to Learn, Zero Cost</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
                    SkillSync: <span className="text-indigo-400">Exchange Skills</span>, Not Money.
                </h1>

                {/* Subtitle */}
                <p className="max-w-3xl mx-auto text-xl text-indigo-200 mb-10 font-light">
                    The peer-to-peer platform connecting you with users ready to teach, mentor, or collaborate on projects. Learn anything, without the price tag.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

                    {/* Primary CTA */}
                    <Link href="/exchange" passHref>
                        <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                            Find Your Next Skill
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </Link>

                    {/* Secondary CTA */}
                    <Link href="/register" passHref>
                        <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-xl text-indigo-200 border border-indigo-500 bg-indigo-800/40 hover:bg-indigo-700/50 shadow-md transition duration-300">
                            <TrendingUp className="w-5 h-5 mr-2" />
                            List Your Skills
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}