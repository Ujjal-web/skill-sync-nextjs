"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const backendUrl = "http://localhost:4000";

export default function SkillDetails() {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        fetch(`${backendUrl}/skills/${id}`)
            .then((res) => res.json())
            .then((data) => setSkill(data))
            .catch(() => console.error("Failed to load skill"));
    }, [id]);

    if (!skill) return <p className="text-center mt-12">Loading...</p>;

    return (
        <div className="min-h-screen p-6 bg-gray-50 flex justify-center">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full border">

                <img
                    src={skill.imageUrl}
                    alt={skill.title}
                    className="w-full rounded-xl mb-5"
                />

                <h1 className="text-3xl font-bold">{skill.title}</h1>
                <p className="text-gray-600 mt-2">{skill.shortDescription}</p>

                <p className="mt-4 text-indigo-600 font-semibold">
                    Category: {skill.category}
                </p>

                <p className="mt-1 text-gray-800 font-bold">Price: ${skill.price}</p>

                <h2 className="text-xl mt-6 font-semibold">Full Description</h2>
                <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
                    {skill.fullDescription}
                </p>
            </div>
        </div>
    );
}