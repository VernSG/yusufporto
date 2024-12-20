import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { format } from "date-fns";

interface BlogCardProps {
  title: string;
  image?: string;
  publishedAt: string;
  summary: string;
  slug: string;
  tags?: string[];
}

export default function BlogCard({
  title,
  image,
  publishedAt,
  summary,
  slug,
  tags,
}: BlogCardProps) {
  return (
    <div className="w-full p-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
      {" "}
      {/* Pembungkus untuk setiap card */}
      <div
        className={clsx(
          "rounded-lg border border-gray-200 shadow-lg",
          "overflow-hidden bg-white dark:bg-neutral-800",
          "flex h-full flex-col", // memastikan card mengisi tinggi yang tersedia
        )}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        )}
        <div className="flex-grow p-4">
          {" "}
          {/* flex-grow agar konten mengisi sisa ruang */}
          <div className="mb-2 flex flex-wrap gap-2">
            {tags?.map((tag: any) => (
              <span
                key={tag}
                className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/blog/${slug}`}>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h2>
          </Link>
          <p className="mt-1 text-xs text-gray-500">
            {format(new Date(publishedAt), "MMMM dd, yyyy")}{" "}
            {/* Perbaikan format tanggal */}
          </p>
          <p className="mt-2 flex-grow text-sm text-gray-600 dark:text-gray-400">
            {" "}
            {/* flex-grow agar konten mengisi sisa ruang */}
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
