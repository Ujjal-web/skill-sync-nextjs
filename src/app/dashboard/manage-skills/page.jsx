import ManageSkillsClient from "./ManageSkillsClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const backendUrl = "http://localhost:4000";

async function getMySkillsAndError(accessToken) {
    if (!accessToken) return { skills: [], error: false };

    try {
        const res = await fetch(`${backendUrl}/skills/my`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
        });

        if (!res.ok) {
            return { skills: [], error: true };
        }

        const data = await res.json();
        return { skills: data.skills || [], error: false };
    } catch (e) {
        return { skills: [], error: true };
    }
}

export default async function ManageSkillsPage() {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken || "";

    const { skills, error } = await getMySkillsAndError(accessToken);

    return (
        <ManageSkillsClient
            initialSkills={skills}
            accessToken={accessToken}
            initialError={error}
        />
    );
}