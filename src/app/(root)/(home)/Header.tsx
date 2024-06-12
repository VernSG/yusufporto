"use client";
import { PROFILE_PICTURE_URL } from "/favicon.ico";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8 flex items-center gap-4 md:hidden"
    >
      <Image
        src={PROFILE_PICTURE_URL}
        alt="Image Profile"
        className="border__color h-11 w-11 rounded-full"
        width={100}
        height={100}
      />

      <div className="flex flex-col gap-1">
        <h2 className="primary font-medium md:text-lg">Yusuf</h2>
        <p className="secondary text-sm md:text-base">Saputra</p>
      </div>
    </motion.header>
  );
}
