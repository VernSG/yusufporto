import clsx from "clsx";
import { motion } from "framer-motion";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function CircularProgressLoading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex animate-pulse flex-col justify-center gap-8 md:flex-row md:gap-16"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={clsx(
              "h-16 w-16",
              "rounded-full",
              "bg-neutral-200 dark:bg-neutral-700",
              "border-4 border-solid",
              "border-primary-light dark:border-primary-dark",
              "border-opacity-10 dark:border-opacity-10",
              "grid place-items-center",
              "primary text-opacity-10 dark:text-opacity-10",
            )}
          >
            <BiDotsHorizontalRounded size={36} />
          </div>

          <div
            className={clsx(
              "mt-2 h-4 w-16",
              "rounded-full",
              "bg-neutral-200 dark:bg-neutral-700",
            )}
          />
        </div>
      ))}
    </motion.div>
  );
}
