"use client";
import BlogCard from "@/components/cards/BlogCard";
import { BlogItem } from "@/types";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";
import Search from "../Search";

export default function BlogSection({ blogs }: { blogs: BlogItem[] }) {
  const [search, setSearch] = React.useState<string>("");
  const [sortedBlogs, setSortedBlogs] = React.useState<BlogItem[]>([]);
  const [filteredBlogs, setFilteredBlogs] = React.useState(sortedBlogs);

  const sortBlogsByDate = React.useCallback(() => {
    const sorted = [...blogs];
    sorted.sort((a, b) => {
      const dateA = new Date(a.releaseDate);
      const dateB = new Date(b.releaseDate);
      return dateB.getTime() - dateA.getTime();
    });
    setSortedBlogs(sorted);
  }, [blogs]);

  React.useEffect(() => {
    sortBlogsByDate();
  }, [sortBlogsByDate]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lowercaseInput = event.target.value.toLowerCase();
    setSearch(lowercaseInput);
  };

  React.useEffect(() => {
    setFilteredBlogs(
      sortedBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.description.toLowerCase().includes(search.toLowerCase()) ||
          search
            .toLowerCase()
            .split(" ")
            .every((tag) => blog.tags.includes(tag)),
      ),
    );
  }, [search, sortedBlogs]);

  const toggleTag = (tag: string) => {
    const tagsInSearch = search.split(" ").filter((t) => t.trim() !== "");
    if (tagsInSearch.includes(tag)) {
      setSearch(tagsInSearch.filter((t) => t !== tag).join(" "));
    } else {
      setSearch([...tagsInSearch, tag].join(" "));
    }
  };

  const checkTagged = (tag: string) => {
    return search.split(" ").includes(tag);
  };

  const checkDisabled = (tag: string) => {
    if (search === "") return false;

    const searchTerms = search
      .toLowerCase()
      .split(" ")
      .filter((t) => t.trim() !== "");

    const relatedBlogs = sortedBlogs.filter((blog) =>
      searchTerms.some(
        (term) =>
          blog.title.toLowerCase().includes(term) ||
          blog.description.toLowerCase().includes(term) ||
          blog.tags.includes(term),
      ),
    );

    return (
      !relatedBlogs.some((blog) => blog.tags.includes(tag)) &&
      !searchTerms.includes(tag)
    );
  };

  return (
    <section>
      <Search
        search={search}
        handleSearch={handleSearch}
        toggleTag={toggleTag}
        checkTagged={checkTagged}
        checkDisabled={checkDisabled}
      />

      {filteredBlogs.length > 0 ? (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {filteredBlogs.map((blog: BlogItem) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={blog.image}
              tags={blog.tags}
              title={blog.title}
              readingTime={blog.readingTime}
              views={blog.views}
              releaseDate={blog.releaseDate}
              description={blog.description}
              slug={blog.slug.current}
              checkTagged={checkTagged}
            />
          ))}
        </motion.ul>
      ) : (
        <div
          className={clsx(
            "pb-12 pt-20",
            "lg:flex lg:justify-center",
            "lg:h-80 lg:pb-0 lg:pt-8",
          )}
        >
          <h2
            className={clsx(
              "gradient__text",
              "m-auto w-fit",
              "text-lg  font-bold",
              "md:text-xl",
            )}
          >
            Sorry, not found :(
          </h2>
        </div>
      )}
    </section>
  );
}
