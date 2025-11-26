import Link from 'next/link';
import Image from 'next/image';

const backendUrl = "http://localhost:4000";


async function getSkills() {
    const res = await fetch(`${backendUrl}/skills`, {
    });

    if (!res.ok) {
        throw new Error('Failed to fetch skills data');
    }
    return res.json();
}

export default async function AllSkills() {
    const data = await getSkills();
    const skills = data.skills || [];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                All Skills
            </h1>

            {/* Empty State */}
            {skills.length === 0 && (
                <p className="text-center text-gray-600 text-lg">
                    No skills added yet.
                </p>
            )}

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill._id}
                        className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100"
                    >
                        {/* {skill.imageUrl && (
                            <Image
                                src={skill.imageUrl}
                                alt={skill.title}
                                width={500} // Example width/height for optimization
                                height={160} // Matches the h-40 object-cover look
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                        )} */}

                        {skill.imageUrl && (
                            <img
                                src={skill.imageUrl}
                                alt={skill.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                        )}

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

                        {/* VIEW DETAILS BUTTON */}
                        <div className="mt-4">
                            <Link
                                href={`/exchange/${skill._id}`}
                                className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}