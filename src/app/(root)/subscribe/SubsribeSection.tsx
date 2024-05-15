"use client";
import SubscribeCard from "@/components/cards/SubscribeCard";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="primary text-xl font-bold md:text-3xl">
        Subscribe to{" "}
        <span className="gradient__text ">yusufsaputra.vercel.app</span>
      </h2>

      <SubscribeCard />
    </motion.section>
  );
}
