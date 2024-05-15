"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="primary text-lg font-semibold md:text-xl">Contact</h2>
      <p className="secondary mt-4 leading-relaxed">
        Feel free to reach out if you require my insights on web development,
        particularly when it comes to frontend tasks. I&apos;m more than willing
        to assist you. You can locate my email in the footer.
      </p>
    </motion.section>
  );
}
