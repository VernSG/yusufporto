import clsx from "clsx";
import Link from "next/link";

export default function SocialMediaCard({
  url,
  ariaLabel,
  icon,
  label,
  backgroundColor,
}: SocialMediaCardProps) {
  return (
    <li>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: backgroundColor,
        }}
        className={clsx(
          "cursor-pointer",
          "text-sm font-medium text-primary-dark",
          "flex items-center justify-center gap-2",
          "rounded-md px-4 py-3",
          "md:text-base",
          "lg:hover:scale-[1.08]",
        )}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}

interface SocialMediaCardProps {
  url: string;
  ariaLabel: string;
  icon: React.ReactElement;
  label: string;
  backgroundColor: string;
}
