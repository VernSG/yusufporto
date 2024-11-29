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
}

export default function BlogCard({
  title,
  image,
  publishedAt,
  summary,
  slug,
}: BlogCardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-200 shadow-lg",
        "transition-transform duration-200 hover:scale-[1.03]",
        "overflow-hidden bg-white dark:bg-neutral-800",
      )}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h2>
        </Link>
        <p className="mt-1 text-xs text-gray-500">
          {format(new Date(publishedAt), "MMMM dd, yyyy")}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {summary}
        </p>
      </div>
    </div>
  );
}
