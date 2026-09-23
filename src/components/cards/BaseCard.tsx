"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Ping from "../elements/Ping";
import Tooltip from "../elements/Tooltip";
import { TechStackItem } from "@/types";

export interface BaseCardProps {
  url: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  image: string | StaticImageData;
  imageAlt: string;
  variant?: "project" | "certificate";
}

export default function BaseCard({
  url,
  title,
  description,
  techStack,
  image,
  imageAlt,
  variant = "project",
}: BaseCardProps) {
  const isCertificate = variant === "certificate";
  const hasUrl = Boolean(url && url.trim().length > 0);
  const formattedUrl = hasUrl
    ? url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`
    : "#";

  return (
    <motion.li
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={clsx(
        "group flex h-full flex-col overflow-hidden",
        "border__color rounded-xl",
        "bg-white shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md",
        "dark:bg-neutral-800/90 dark:shadow-none dark:hover:border-neutral-700",
      )}
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900/60">
        {hasUrl ? (
          <Link
            href={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title}`}
            className="block h-full w-full cursor-pointer"
          >
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={clsx(
                "transition-transform duration-500 ease-out group-hover:scale-105",
                isCertificate ? "object-cover object-top" : "object-cover",
              )}
              loading="lazy"
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={clsx(
              "transition-transform duration-500 ease-out group-hover:scale-105",
              isCertificate ? "object-cover object-top" : "object-cover",
            )}
            loading="lazy"
          />
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title & Arrow */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 shrink-0">
              <Ping />
            </span>

            {hasUrl ? (
              <Link
                href={formattedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold leading-snug tracking-tight text-neutral-900 transition-colors duration-200 hover:text-sky-500 dark:text-neutral-100 dark:hover:text-sky-400 md:text-lg"
              >
                {title}
              </Link>
            ) : (
              <h2 className="font-bold leading-snug tracking-tight text-neutral-900 dark:text-neutral-100 md:text-lg">
                {title}
              </h2>
            )}
          </div>

          {hasUrl && (
            <Link
              href={formattedUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              className="mt-0.5 shrink-0 text-neutral-400 transition-all duration-200 hover:text-sky-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-neutral-500 dark:hover:text-sky-400"
            >
              <TbArrowUpRight className="text-xl" />
            </Link>
          )}
        </div>

        {/* Description */}
        <p
          title={description}
          className="secondary mt-3 flex-1 text-sm leading-relaxed line-clamp-3"
        >
          {description}
        </p>

        {/* Tech Stack / Bottom section */}
        <div className="mt-auto pt-4">
          {techStack && techStack.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-3">
              {techStack.map((tech, index) => (
                <li
                  className="text-2xl text-neutral-600 transition-transform duration-200 hover:scale-110 dark:text-neutral-300"
                  key={index}
                >
                  <Tooltip placement="top" label={tech.label}>
                    {tech.icon}
                  </Tooltip>
                </li>
              ))}
            </ul>
          ) : (
            <span className="inline-flex items-center rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              {isCertificate ? "Achievement" : "Project"}
            </span>
          )}
        </div>
      </div>
    </motion.li>
  );
}
