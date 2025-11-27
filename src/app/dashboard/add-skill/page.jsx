"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const API_BASE_URL = 'https://skill-sync-server-delta.vercel.app';
const backendUrl = 'https://skill-sync-server-delta.vercel.app';

// Simple SVG spinner
const Spinner = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const AddSkill = () => {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [category, setCategory] = useState("Programming");
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const categories = ["Programming", "Frontend", "Literature", "Visual Arts", "Business", "Design", "Marketing", "Soft Skills", "Data Science", "DevOps", "Other"];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!session?.accessToken) {
            toast.error("You must be logged in to add a skill");
            return;
        }

        const skillData = {
            title,
            shortDescription,
            fullDescription,
            category,
            price,
            imageUrl
        };

        setLoading(true);

        const res = await fetch(`${backendUrl}/skills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.accessToken}`
            },
            body: JSON.stringify(skillData)
        });

        setLoading(false);

        if (res.ok) {
            toast.success("Skill added successfully!");

            // RESET FIELDS
            setTitle("");
            setShortDescription("");
            setFullDescription("");
            setCategory("Programming");
            setPrice(0);
            setImageUrl("");

        } else {
            toast.error("Failed to add skill");
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50">


            <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Share Your Skill</h1>
                    <p className="mt-2 text-sm text-gray-500 mb-6">
                        Tell us about the skill you want to offer to the community.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-200">
                        {error}
                    </div>
                )}

                {/* — TOASTIFY NOW USED */}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="e.g., Advanced React Hooks Workshop"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={loading}
                        >
                            {categories.map(cat => <option key={cat}>{cat}</option>)}
                        </select>
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Short description (max 15 words)"
                            type="text"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Full Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg min-h-[100px]"
                            placeholder="Full details..."
                            value={fullDescription}
                            onChange={(e) => setFullDescription(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="e.g., 50"
                            type="number"
                            min="0"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Optional Image URL</label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="https://example.com/your-image.jpg"
                            type="url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    <button
                        className="w-full py-2.5 px-4 text-white font-semibold rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center"
                        type="submit"
                        disabled={loading}
                    >
                        {loading && <Spinner />}
                        {loading ? "Submitting Skill..." : "Add Skill"}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-600 text-center">
                    <Link href="/dashboard" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Go back to Dashboard
                    </Link>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default AddSkill;