import { getBlogPosts } from "../../../data/blog";
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
      <div className="container mx-auto">
        {" "}
        {/* Container untuk membatasi lebar */}
        <div className="-mx-4 flex flex-wrap">
          {" "}
          {/* Flex container untuk card */}
          {posts
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() - // Urutan terbaru
                new Date(a.metadata.publishedAt).getTime(),
            )
            .map((post) => (
              <BlogCard
                key={post.slug}
                title={post.metadata.title}
                image={post.metadata.image}
                publishedAt={post.metadata.publishedAt}
                summary={post.metadata.summary}
                slug={post.slug}
                tags={post.metadata.tags} // Pastikan tags juga di-pass
              />
            ))}
        </div>
      </div>
    </section>
  );
}
