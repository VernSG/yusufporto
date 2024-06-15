"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Ping from "../elements/Ping";
import Tooltip from "../elements/Tooltip";

export default function ProjectCard({
  url,
  title,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={clsx(
        "border__color",
        "rounded-md",
        "bg-transparent shadow-lg",
        "transition-transform duration-200",
        "dark:bg-neutral-800 dark:shadow-none",
        "lg:hover:scale-[1.03]",
      )}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live production demo`}
        className={clsx("group cursor-pointer", "flex flex-col", "h-full")}
        legacyBehavior>
        <div>
          <Image
            className="h-auto w-auto rounded-t-md"
            width={1920}
            height={1080}
            src={image}
            alt={imageAlt}
            loading="lazy"
            aria-label={`Live ${title} Production Screenshot`}
          />
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <Ping />

            <h1 className="flex items-center gap-1 font-bold md:text-lg">
              {title}
              <span
                className={clsx(
                  "transition-all duration-200",
                  "lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1",
                )}
              >
                <TbArrowUpRight />
              </span>
            </h1>
          </div>

          <p className="secondary my-4 text-sm leading-relaxed md:h-[91px]">
            {description}
          </p>

          <ul className="flex flex-wrap gap-4">
            {techStack.map((tech, index) => (
              <li className="text-2xl" key={index}>
                <Tooltip placement="top" label={tech.label}>
                  {tech.icon}
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.li>
  );
}

interface TechStackItem {
  label: string;
  icon: React.ReactElement;
}

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: Array<TechStackItem>;
  image: string | StaticImageData;
  imageAlt: string;
}
