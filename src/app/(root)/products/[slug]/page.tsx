import Image from "next/image";
import { getProductPosts, getPost } from "@/data/product";
import { DATA } from "@/data/data";
import { formatDate } from "@/lib/formatDate";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Comment from "@/components/elements/Comment";
import Link from "next/link";
import ProductBox from "@/components/ProductBox";

export async function generateStaticParams() {
  const posts = await getProductPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/products/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    summary,
    publishedAt,
    tags,
    image,
    source,
    price,
    updatedAt,
    sales,
  } = post.metadata;
  return (
    <section id="Product" className="p-6">
      <div className="mx-auto max-w-screen-lg">
        {/* JSON-LD Metadata */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProductPosting",
              headline: title,
              datePublished: publishedAt,
              dateModified: publishedAt,
              description: summary,
              image: image
                ? `${DATA.url}${image}`
                : `${DATA.url}/og?title=${title}`,
              url: `${DATA.url}/products/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        {/* Gambar Utama */}
        {image && (
          <div className="mb-8 overflow-hidden rounded-lg shadow-md">
            <Image
              src={image}
              alt={title}
              width={800}
              height={450}
              className="w-full rounded-lg"
              priority
            />
          </div>
        )}
        {/* Judul Artikel */}
        <h1 className="mb-6 text-center text-4xl font-bold">{title}</h1>
        {/* Tanggal */}
        {/* <div className="mb-10 text-center text-sm text-gray-500">
          <Suspense fallback={<p>Loading...</p>}>
            {formatDate(publishedAt)}
          </Suspense>
        </div> */}
        {/* Konten Artikel */}
        <article
          className="prose prose-lg mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
        <ProductBox
          price={price}
          publishedAt={publishedAt}
          updatedAt={updatedAt || "N/A"}
          sales={sales || 0}
          tags={tags || []}
        />
        {/* Tags */}
        {/* {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tags.map((tag: any) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )} */}
      </div>
      {/* <DonateBox classname="w-64" /> */}
    </section>
  );
}
