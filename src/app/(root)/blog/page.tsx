// Server-side component for BlogPage with metadata
import { getBlogPosts } from "../../../data/blog";
import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";
import Search from "./Search"; // Import the Search component

export const metadata: Metadata = {
  title: "Blog | Muhammad Yusuf",
  description:
    "Reflections, cognitive models, and instructional content related to the realm of web development. Adapt your mental framework to bring more predictability to web development.",
  alternates: {
    canonical: "https://yusufs.me/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="p-8">
      <PageTitle
        title="Blog"
        description="Share thoughts and tutorials on web development."
      />
      <div className="container mx-auto">
        {/* Search component to filter posts */}
        <Search posts={posts} />
      </div>
    </section>
  );
}
