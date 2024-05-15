"use client";
import StackCard from "@/components/cards/StackCard";
import MarqueeElement from "@/components/elements/Marquee";
import { STACKS } from "@/constants/stacks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";

export default function Stacks() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS,
  ).sort(() => Math.random() - 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div
        className={clsx(
          "primary",
          "mb-5",
          "flex items-center gap-2",
          "text-lg md:text-xl",
        )}
      >
        <HiOutlineCode />
        <h2 className="font-bold">Stacks</h2>
      </div>

      <div
        className={clsx(
          "flex flex-col",
          "md:max-w-[calc(100vw-156px)]",
          "lg:max-w-[720px]",
        )}
      >
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], index) => (
                <StackCard key={index} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </motion.section>
  );
}
