"use client";
import Tippy from "@tippyjs/react/headless";
import clsx from "clsx";

export default function Tooltip({ children, label, placement }: TooltipProps) {
  return (
    <Tippy
      placement={placement}
      render={() => (
        <div
          className={clsx(
            "primary",
            "px-4 py-3",
            "rounded-md",
            "max-w-xs",
            "text-center text-sm leading-relaxed",
            "bg-neutral-200 dark:bg-neutral-800",
          )}
        >
          {label}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

interface TooltipProps {
  children: React.ReactElement;
  label: string;
  placement: "top" | "bottom";
}
