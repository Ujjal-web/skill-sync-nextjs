import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "The Exchange", href: "/exchange" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 bg-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    {/* Brand + description */}
                    <div className="max-w-sm">
                        <Link
                            href="/"
                            className="text-2xl font-extrabold text-indigo-700"
                        >
                            SkillSync
                        </Link>
                        <p className="mt-3 text-sm text-gray-500">
                            Discover, share, and trade skills with a community of learners and
                            experts. Learn what you love, teach what you know.
                        </p>
                    </div>

                    {/* Links + Social */}
                    <div className="flex flex-col sm:flex-row gap-10">
                        {/* Navigation links */}
                        <nav>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                                Explore
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                {footerLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-indigo-600 transition"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social icons */}

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                                Connect
                            </h3>
                            <div className="mt-3 flex space-x-3">
                                <Link
                                    href="#"
                                    aria-label="Visit SkillSync on Twitter"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-200 transition"
                                >
                                    <Twitter className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="#"
                                    aria-label="Visit SkillSync on GitHub"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-200 transition"
                                >
                                    <Github className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="#"
                                    aria-label="Visit SkillSync on LinkedIn"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-200 transition"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>© {year} SkillSync. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link
                            href="#"
                            className="hover:text-indigo-600 transition"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-indigo-600 transition"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}