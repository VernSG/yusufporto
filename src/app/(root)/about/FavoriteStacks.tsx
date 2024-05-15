"use client";
import BreakLine from "@/components/elements/BreakLine";
import Tooltip from "@/components/elements/Tooltip";
import { FAVORITE_STACKS } from "@/constants/about";
import { motion } from "framer-motion";

export default function FavoriteStacks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="primary text-lg font-semibold md:text-xl">
        Current Favorite Tech Stacks
      </h2>

      <ul className="mt-4 flex flex-wrap gap-4">
        {FAVORITE_STACKS.map((stack) => (
          <li key={stack.name}>
            <Tooltip placement="top" label={stack.name}>
              <span className="text-[32px] md:text-[40px]">{stack.icon}</span>
            </Tooltip>
          </li>
        ))}
      </ul>

      <BreakLine />
    </motion.section>
  );
}
