"use client";
import SocialMediaCard from "@/components/cards/SocialMediaCard";
import BreakLine from "@/components/elements/BreakLine";
import { CONTACT_ITEMS } from "@/constants/contact";
import { motion } from "framer-motion";
import React from "react"; // Pastikan Anda mengimpor React

export default function SocialMediaLinks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="primary text-lg font-semibold md:text-xl">Find me on</h2>

      <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {CONTACT_ITEMS.map((item, index) => (
          <li key={index} className="w-full sm:w-auto">
            <SocialMediaCard
              url={item.url}
              ariaLabel={item.label}
              icon={item.icon}
              label={item.label}
              backgroundColor={item.backgroundColor}
            />
          </li>
        ))}
        <li className="w-full sm:w-auto">
          <BreakLine />
        </li>
      </ul>
    </motion.section>
  );
}
