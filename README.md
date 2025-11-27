# SkillSync – Skill Exchange Platform

SkillSync is a Next.js application for discovering, offering, and managing one‑to‑one skill sessions. Learners can browse skills across categories (Programming, Design, Business, etc.), and experts can list and manage the skills they offer. Authentication is handled with NextAuth, and skill data is fetched from a separate backend API.

# Live Link
https://skill-sync-next.vercel.app

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Auth:** NextAuth.js
- **Icons:** lucide-react
- **Notifications:** react-toastify
- **Backend API:** External server
- **Server Side Repository (created with Express.JS):** https://github.com/Ujjal-web/skill-sync-server

---

## Setup & Installation

### Prerequisites

- Node.js
- npm, Yarn, or pnpm
- Running backend API, exposing at least:
  - `GET /skills`
  - `GET /skills/my` (authenticated)
  - `GET /skills/:id`
  - `DELETE /skills/:id` (authenticated)
  - Auth endpoints compatible with NextAuth (or a custom JWT-based setup that provides `session.accessToken`)

  

---

### Clone the repository and install

```bash
git clone https://github.com/Ujjal-web/skill-sync-nextjs.git
cd skill-sync-nextjs

#Install dependencies
npm install

#Configure environment variables
#Create a .env.local file in the project root:
touch .env.local

#Run the development server
npm run dev