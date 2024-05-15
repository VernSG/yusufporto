"use client";
import BreakLine from "@/components/elements/BreakLine";
import { CV_URL } from "@/constants";
import { CAREERS_LIST } from "@/constants/home";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDownvote } from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";

export default function Career() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="mb-2 flex items-center gap-2 text-lg md:text-xl">
        <MdOutlineWorkHistory size={20} />
        <h2 className="primary font-bold">Career</h2>
      </div>

      <Link
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "secondary cursor-pointer",
          "mb-8 pl-0.5",
          "flex items-center gap-3",
          "text-sm font-bold md:text-lg",
          "transition-all duration-300",
        )}
      >
        <div
          className={clsx(
            "overflow-hidden",
            "border-b-2 border-solid",
            "border-secondary-light dark:border-secondary-dark",
          )}
        >
          <BiSolidDownvote className="animate-rain-arrow" />
        </div>
        Download CV
      </Link>

      <div className="grid gap-4 md:grid-cols-2">
        {CAREERS_LIST.map((career, index) => (
          <div
            key={index}
            className={clsx(
              "w-full px-6 py-4",
              "grid grid-cols-3 place-items-center gap-4",
              "border border-solid border-neutral-500",
              "rounded-md shadow-md",
            )}
          >
            <div className="col-span-1 h-14 w-14 rounded-full">
              <Image
                src={career.imageUrl}
                alt="Sinar Digital Nusantara Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="col-span-2 flex grid-cols-2 flex-col gap-2">
              <p className="primary font-medium lg:text-lg">{career.role}</p>
              <h3 className="secondary text-sm lg:text-base">
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline underline-offset-2"
                  aria-activedescendant={career.ariaLabel}
                >
                  {career.companyName}
                </Link>{" "}
                • {career.location}
              </h3>
              <p className="secondary text-sm lg:text-base">{`${career.startWork} - Present`}</p>
            </div>
          </div>
        ))}
      </div>

      <BreakLine />
    </motion.section>
  );
}
