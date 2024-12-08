"use client";
import React, { useEffect, useState } from "react";
import { Repository } from "@/types";

// repository
const Repos: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/vernsg/repos"); // Username GitHub Anda
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: Repository[] = await res.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="mt-10 text-center text-lg">Loading...</p>;
  if (error)
    return <p className="mt-10 text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        GitHub Repositories
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex h-full flex-col rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
          >
            <h2 className="mb-2 text-xl font-semibold">{repo.name}</h2>
            <p className="flex-grow text-gray-700">
              {repo.description || "No description available."}
            </p>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Language:</strong> {repo.language || "Unknown"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-medium text-blue-500 hover:underline"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repos;
