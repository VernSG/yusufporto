//footer
import { FOOTER_ITEMS, FOOTER_LINKS } from "@/constants/footer";
import clsx from "clsx";
import Link from "next/link";
import SpotifyCard from "../cards/Callsign";
import BreakLine from "../elements/BreakLine";
import Tooltip from "../elements/Tooltip";

export default function Footer() {
  return (
    <footer className="mb-[104px] px-8 md:mb-6">
      <BreakLine />

      <SpotifyCard display="flex lg:hidden" />

      <ul
        className={clsx("mt-8 text-sm", "flex flex-wrap justify-center gap-5")}
      >
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.url}
              className={`group ${
                link.target === "_blank" && "cursor-pointer"
              }`}
              aria-label={`Go to ${link.label} page`}
              target={link.target}
              rel={link.rel}
            >
              <Tooltip placement="top" label={link.toolTip}>
                <div>
                  {link.label}
                  <div
                    className={clsx(
                      "h-0.5 w-0 bg-gradient-linear",
                      "transition-all duration-200",
                      "lg:group-hover:w-full",
                    )}
                  />
                </div>
              </Tooltip>
            </Link>
          </li>
        ))}
      </ul>

      <p
        className={clsx(
          "mb-2 mt-16",
          "text-center text-sm font-medium",
          "md:text-base",
        )}
      >
        Reach me out
      </p>

      <ul className="flex justify-center gap-4">
        {FOOTER_ITEMS.map(({ icon, href, ariaLabel, target, rel }, index) => (
          <li key={index}>
            <Link
              href={href}
              aria-label={ariaLabel}
              target={target}
              rel={rel}
              className={`${target === "_blank" && "cursor-pointer"}`}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-sm">
        copyright &copy; Andre Avindra 2023
      </p>
    </footer>
  );
}
