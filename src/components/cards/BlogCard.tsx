import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { incrementViews } from "../../../sanity/action";

interface Props {
  id: string;
  image: string;
  tags: Array<string>;
  title: String;
  readingTime: string;
  views: number;
  releaseDate: string;
  description: string;
  slug: string;
  checkTagged?: (tag: string) => boolean;
}

export default function BlogCard({
  id,
  image,
  tags,
  title,
  readingTime,
  views,
  releaseDate,
  description,
  slug,
  checkTagged,
}: Props) {
  const handleCardClick = async () => {
    try {
      await incrementViews(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <li
      className={clsx(
        "border__color",
        "rounded-md",
        "bg-transparent shadow-lg",
        "transition-transform duration-200",
        "dark:bg-neutral-800 dark:shadow-none",
        "lg:hover:scale-[1.03]",
      )}
      onClick={handleCardClick}
    >
      <Link
        href={`/blog/${slug}`}
        aria-label={`Read more about the ${title} article`}
        className={clsx("group", "flex flex-col", "h-full")}
      >
        <div className="relative">
          <Image
            src={image}
            alt="Photo taken from Unsplash"
            width={1200}
            height={480}
            className="h-auto w-auto rounded-t-md"
            priority={true}
          />

          <div className="absolute bottom-2 right-2 flex gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  checkTagged?.(tag)
                    ? "bg-gradient-linear text-primary-light"
                    : "bg-neutral-200 dark:bg-neutral-800",
                  "rounded-md px-2 py-1 text-xs",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="primary font-bold leading-relaxed md:h-[84px] md:text-lg lg:h-14">
            {title}
          </h2>

          <div className="mt-2 flex gap-2 text-sm font-medium">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-base" />
              <span className="gradient__text">{readingTime}</span>
            </div>

            <div className="flex items-center gap-1">
              <HiOutlineEye className="text-base" />
              <span className="gradient__text">
                {views?.toLocaleString() ?? "0"} views
              </span>
            </div>
          </div>

          <p className="primary mb-2 mt-4 text-sm font-semibold">
            {format(new Date(releaseDate), "MMMM dd, yyyy")}
          </p>

          <p className="secondary text-sm leading-relaxed">{description}</p>
        </div>
      </Link>
    </li>
  );
}
