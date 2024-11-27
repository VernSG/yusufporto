import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import DiscussionSection from "./DiscussionSection";

export const metadata: Metadata = {
  title: "Guestbook | Muhammad Yusuf",
  description:
    "Feel free to share your thoughts, expressions of appreciation, and suggestions on the guestbook page. Leave behind any messages or comments you'd like to convey. Your words are valuable, and I look forward to hearing from you.",
  alternates: {
    canonical: "https://yusufs.me/guestbook",
  },
};

export default function Guestbook() {
  return (
    <div className="p-2">
      <PageTitle
        title="Guestbook"
        description="Leave whatever you like to say on the AMA discussion"
      />
      <DiscussionSection />
    </div>
  );
}
