import Image from "next/image"; // Pastikan import Image dari next/image
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/data";
import { formatDate } from "@/lib/formatDate";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog" className="flex justify-center p-8">
      <div className="max-w-screen-md">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        {post.metadata.image && (
          <div className="mb-8">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              width={1200}
              height={600}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        )}
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="mb-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <Suspense fallback={<p className="h-5" />}>
            {formatDate(post.metadata.publishedAt)}
          </Suspense>
        </div>
        <article
          className="prose dark:prose-invert mx-auto"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </div>
    </section>
  );
}
