import { BlogItem } from "@/types";
import fs from "fs";
import RSS from "rss";

export default async function generateRssFeed(allBlogs: BlogItem[]) {
  const SITE_URL =
    process.env.NODE_ENV === "production"
      ? "https://andreavindra.vercel.app/"
      : "http://localhost:3000";

  const FEED_OPTIONS = {
    title: "Andre Avindra Blog",
    description:
      "The Andre Avindra Blog, thoughts, mental models, and tutorials about front-end development.",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    image_url: `${SITE_URL}/metaImage.svg`,
    pubDate: new Date(),
    copyright: `copyright © Andre Avindra ${new Date().getFullYear()}`,
  };

  const feed = new RSS(FEED_OPTIONS);

  allBlogs.map((blog) => {
    feed.item({
      title: blog.title,
      description: blog.description,
      url: `${SITE_URL}/blog/${blog.slug.current}`,
      date: blog.releaseDate,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
