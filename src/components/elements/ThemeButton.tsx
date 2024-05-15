"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";
import * as React from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx(
        "h-10 w-10",
        "rounded-full",
        "grid place-items-center",
        "md:mb-8 md:mt-4 md:h-0",
        "lg:mt-0",
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Theme Button"
    >
      {mounted ? (
        <>
          {theme === "light" ? (
            <span className="text-2xl">🌕</span>
          ) : (
            <span className="text-2xl">🌤️</span>
          )}
        </>
      ) : (
        <span className="text-2xl">🌤️</span>
      )}
    </button>
  );
}
