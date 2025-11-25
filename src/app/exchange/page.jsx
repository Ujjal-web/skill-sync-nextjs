"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const backendUrl = "http://localhost:4000";

const AllSkills = () => {
    const { data: session } = useSession();
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Skills
    const fetchSkills = async () => {
        if (!session?.accessToken) return;

        try {
            const res = await fetch(`${backendUrl}/skills`, {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            });

            const data = await res.json();
            setSkills(data.skills || []);
            setLoading(false);

        } catch (error) {
            console.error(error);
            toast.error("Failed to load skills");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, [session]);


    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <ToastContainer />

            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                All Skills
            </h1>

            {/* Loading State */}
            {loading && (
                <p className="text-center text-gray-500 text-lg">Loading skills...</p>
            )}

            {/* Empty State */}
            {!loading && skills.length === 0 && (
                <p className="text-center text-gray-600 text-lg">
                    No skills added yet.
                    <Link href="/add-skill" className="text-indigo-600 font-semibold">
                        Add a Skill
                    </Link>
                </p>
            )}

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill._id}
                        className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100"
                    >
                        {/* Image */}
                        {skill.imageUrl && (
                            <img
                                src={skill.imageUrl}
                                alt={skill.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900">
                            {skill.title}
                        </h2>

                        <p className="text-sm text-gray-600 mt-1">
                            {skill.shortDescription}
                        </p>

                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Category:</strong> {skill.category}
                        </p>

                        <p className="text-sm font-semibold text-indigo-600 mt-1">
                            ${skill.price}
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="mt-4 flex gap-2">
                            <Link
                                href={`/dashboard/manage-skills/${skill._id}`}
                                className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
                            >
                                View
                            </Link>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllSkills;