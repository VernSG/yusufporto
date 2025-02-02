"use client";
import { SIDEBAR_ITEMS } from "@/constants/sidebar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-4">
        {SIDEBAR_ITEMS.map((item, index) => {
          const isActivePage =
            pathname === item.pathname ||
            (item.pathname === "/blog" && pathname.startsWith("/blog/"));

          return (
            <li key={index}>
              <Link href={item.pathname} legacyBehavior>
                <div
                  className={clsx(
                    isActivePage
                      ? "bg-gradient-linear text-primary-light hover:scale-100"
                      : "primary hover:scale-[1.08]",
                    "rounded-md",
                    "flex items-center gap-4",
                    "w-fit px-4 py-3 ",
                    "font-bold",
                    "hover:bg-neutral-200 dark:hover:bg-neutral-800",
                    "lg:w-full",
                  )}
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
