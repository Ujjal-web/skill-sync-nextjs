import React from 'react';
import Link from 'next/link';
import {
    Aperture,
    Briefcase,
    Code,
    BookOpen,
    Palette,
    MonitorSmartphone,
    LineChart,
    Users,
    BarChart3,
    ServerCog,
    CircleHelp,
} from 'lucide-react';

const backendUrl = "https://skill-sync-server-delta.vercel.app";

async function getSkills() {
    const res = await fetch(`${backendUrl}/skills`);

    if (!res.ok) {
        throw new Error('Failed to fetch skills data');
    }
    return res.json();
}

// Map categories to icons
const iconByCategory = {
    Programming: Code,
    Frontend: MonitorSmartphone,
    Literature: BookOpen,
    "Visual Arts": Aperture,
    Business: Briefcase,
    Design: Palette,
    Marketing: LineChart,
    "Soft Skills": Users,
    "Data Science": BarChart3,
    DevOps: ServerCog,
    Other: CircleHelp,
};

export default async function SkillPreviewSection() {
    const data = await getSkills();
    const skillsFromDb = data.skills || [];
    const skills = skillsFromDb.slice(0, 4);

    return (
        <section className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Hot Skills on the Exchange
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    A sample of the exciting learning opportunities available right now.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill) => {
                    const Icon = iconByCategory[skill.category] || Code; // fallback icon

                    return (
                        <Link
                            key={skill._id}
                            href={`/exchange/${skill._id}`}
                            className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between 
                                transform hover:shadow-2xl hover:-translate-y-1 transition duration-300 group cursor-pointer"
                        >
                            <div>
                                <Icon className="w-8 h-8 text-indigo-500 mb-3" />
                                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                                    {skill.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {skill.shortDescription || 'Not Available'}
                                </p>
                            </div>

                            <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                                <div className="flex items-center text-yellow-500 text-sm font-semibold">
                                    <svg
                                        className="w-4 h-4 mr-1 fill-current"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.575l6.561-.955L10 1l2.952 5.62 6.561.955-4.758 4.66.123 6.545z" />
                                    </svg>
                                    {skill.rating ?? 'New'}
                                </div>

                                {skill.tags?.[0] && (
                                    <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full group-hover:bg-indigo-100 transition">
                                        {skill.tags[0]}
                                    </span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="text-center mt-12">
                <a
                    href="/exchange"
                    className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-xl text-indigo-600 border border-indigo-600 bg-white hover:bg-indigo-50 shadow-md transition duration-300"
                >
                    Browse All Skills
                </a>
            </div>
        </section>
    );
}