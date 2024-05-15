"use client";
import { motion } from "framer-motion";
import BreakLine from "./BreakLine";

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="primary text-xl font-bold md:text-2xl">{title}</h1>
      <p className="secondary mt-2 leading-relaxed md:mb-14 md:text-lg lg:mb-0">
        {description}
      </p>
      <BreakLine decoration="border-dashed" />
    </motion.div>
  );
}

interface PageTitleProps {
  title: string;
  description: string;
}
