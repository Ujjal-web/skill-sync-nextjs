import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const backendUrl = "http://localhost:4000";

async function getSkillDetails(id) {

    if (!id) {
        throw new Error("Missing skill ID in URL parameters.");
    }

    const res = await fetch(`${backendUrl}/skills/${id}`);

    if (res.status === 404) {
        notFound();
    }

    if (!res.ok) {
        throw new Error(`Failed to fetch skill details for ID: ${id}. Status: ${res.status}`);
    }

    return res.json();
}

export default async function SkillDetailPage(props) {
    const newParams = await props.params;

    const skill = await getSkillDetails(newParams.id);

    return (
        <div className="min-h-screen bg-white p-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{skill.title}</h1>

            {/* {skill.imageUrl && (
                <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={skill.imageUrl}
                        alt={skill.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className="object-cover"
                    />
                </div>
            )} */}

            {skill.imageUrl && (
                <img
                    src={skill.imageUrl}
                    alt={skill.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                />
            )}

            <p className="text-lg text-gray-700 mb-6">
                {skill.fullDescription || 'No detailed description provided.'}
            </p>

            <div className="flex justify-between items-center border-t pt-4">
                <p className="text-2xl font-bold text-indigo-600">
                    Price: ${skill.price}
                </p>
                <p className="text-md text-gray-500">
                    Category: **{skill.category}**
                </p>
            </div>

            <div className="mt-8">
                <Link href="/exchange" className="text-blue-500 hover:text-blue-700 font-medium">
                    &larr; Back to All Skills
                </Link>
            </div>
        </div>
    );
}