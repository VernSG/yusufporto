"use client";
import ColorSwatch from "@/components/elements/ColorSwatch";
import { THEME_COLORS } from "@/constants/design";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function ColorPalette() {
  return (
    <section className="flex flex-col">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="primary text-center text-xl font-bold md:text-3xl"
      >
        <div className="gradient__text inline-block">
          yusufsaputra.vercel.app{" "}
        </div>{" "}
        color palette
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={clsx(
          "mt-8 rounded p-4",
          "border__color border-2 border-dashed",
        )}
      >
        <p className="secondary text-sm">Font Family: Inter</p>

        <div className="grid sm:grid-cols-2">
          {THEME_COLORS.map((color) => (
            <ColorSwatch
              key={color.title}
              title={color.title}
              subTitle={color.subTitle}
              colorClassname={color.colorClassName}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
