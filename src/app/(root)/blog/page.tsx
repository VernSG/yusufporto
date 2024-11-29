import { getBlogPosts } from "../../../data/blog";
import Link from "next/link";
import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";

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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts
          .sort(
            (a, b) =>
              new Date(a.metadata.publishedAt).getTime() -
              new Date(b.metadata.publishedAt).getTime(),
          )
          .map((post) => (
            <BlogCard
              key={post.slug}
              title={post.metadata.title}
              image={post.metadata.image}
              publishedAt={post.metadata.publishedAt}
              summary={post.metadata.summary}
              slug={post.slug}
            />
          ))}
      </div>
    </section>
  );
}
