import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "../../../data/blog";
import Link from "next/link";
import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Muhammad Yusuf",
  description:
    "Reflections, cognitive models, and instructional content related to the realm of web development. Adapt your mental framework to bring more predictability to web development.",
  alternates: {
    canonical: "https://yusufs.me/blog",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="p-8">
      <PageTitle
        title="Blog"
        description="Share thoughts and tutorials on web development."
      />
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="mb-4 flex flex-col space-y-1"
              href={`/blog/${post.slug}`}
            >
              <div className="flex w-full flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="text-muted-foreground h-6 text-xs">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
