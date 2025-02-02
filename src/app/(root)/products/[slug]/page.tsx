import Image from "next/image";
import { getProductPosts, getPost } from "@/data/product";
import { DATA } from "@/data/data";
import { formatDate } from "@/lib/formatDate";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Comment from "@/components/elements/Comment";
import Link from "next/link";
import { ShoppingCart, ExternalLink } from "lucide-react";
import DonateBox from "@/components/elements/DonateBox";
import BreakLine from "@/components/elements/BreakLine";

export async function generateStaticParams() {
  const posts = await getProductPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

interface ProductBoxProps {
  price: string;
  publishedAt: string;
  updatedAt: string;
  sales: number;
  tags: string[];
}

function ProductBox({
  price,
  publishedAt,
  updatedAt,
  sales,
  tags,
}: ProductBoxProps) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white shadow-lg">
      <div className="text-center">
        <div className="text-2xl font-bold">Rp. {price}</div>
        <div className="mt-4 flex justify-center gap-2">
          <a
            href="https://wa.me/6285250872072"
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-blue-600 shadow-md"
          >
            <ShoppingCart size={18} /> BUY NOW
          </a>
          <button className="flex items-center gap-2 rounded-lg bg-white p-2 text-blue-600 shadow-md">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
      <div className="mt-6 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">Published on</span> {publishedAt}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Updated on</span> {updatedAt}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Sales</span> {sales}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-white px-3 py-1 text-sm text-blue-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
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
