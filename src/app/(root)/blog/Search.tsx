// Client-side Search component (with "use client" directive)
"use client";

import { useState, ChangeEvent } from "react";
import BlogCard from "@/components/cards/BlogCard";
import { Post } from "@/types";

interface SearchProps {
  posts: Post[];
}

const Search = ({ posts }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      post.metadata?.title?.toLowerCase().includes(lowercasedSearchTerm) ||
      (post.metadata?.tags &&
        Array.isArray(post.metadata.tags) &&
        post.metadata.tags.some(
          (tag: string) => tag?.toLowerCase().includes(lowercasedSearchTerm),
        ))
    );
  });

  return (
    <div>
      {/* Search input field */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by title or tag..."
          className="w-full rounded-md border border-gray-300 px-4 py-2"
        />
      </div>

      {/* Display filtered blog posts */}
      <div className="-mx-4 flex flex-wrap">
        {filteredPosts
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
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
              tags={post.metadata.tags} // Ensure tags are passed as props
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
