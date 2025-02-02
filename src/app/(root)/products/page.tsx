import { getProductPosts } from "../../../data/product";
import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Search from "./Search";

export const metadata: Metadata = {
  title: "Product | Muhammad Yusuf",
  description:
    "Reflections, cognitive models, and instructional content related to the realm of web development. Adapt your mental framework to bring more predictability to web development.",
  alternates: {
    canonical: "https://yusufs.me/product",
  },
};

export default async function ProductPage() {
  const posts = await getProductPosts();

  return (
    <section className="p-8">
      <PageTitle title="Product" description="Share my products" />
      <div className="container mx-auto">
        {/* Search component to filter posts */}
        <Search posts={posts} />
      </div>
    </section>
  );
}
