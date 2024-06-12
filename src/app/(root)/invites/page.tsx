import PageTitle from "@/components/elements/PageTitle";
import UserProfile from "@/components/cards/UserProfile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invite Bot | Muhammad Yusuf",
  description:
    "Invite my Discord bot to your server and enhance your Discord experience with various features and commands.",
  alternates: {
    canonical: "https://yusufs.me/invite",
  },
};

const CLIENT_ID = "1256409606373113988"; // Ganti dengan Client ID bot Discord Anda
const PERMISSIONS = "8"; // Sesuaikan dengan izin yang diperlukan bot Anda

const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=${PERMISSIONS}&scope=bot`;

export default function Invite() {
  return (
    <div className="p-8">
      <PageTitle
        title="Invite My Discord Bot"
        description="Click the button below to invite my Discord bot to your server and enhance your Discord experience with various features and commands."
      />
      <section className="lg:mb-20">
        <UserProfile />
        <div className="flex justify-center mt-6">
          <a
            href={inviteUrl}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Invite Bot
          </a>
        </div>
      </section>
    </div>
  );
}
