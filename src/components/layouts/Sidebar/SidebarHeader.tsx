import ThemeButton from "@/components/elements/ThemeButton";
import clsx from "clsx";
import Image from "next/image";

export default function SidebarHeader() {
  return (
    <header
      className={clsx(
        "m-auto w-fit",
        "flex items-center justify-between",
        "md:flex-col",
        "lg:mb-12 lg:w-52 lg:flex-row",
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030269/personal-website/profileImage.webp"
          alt="Image Profile"
          className="border__color h-11 w-11 rounded-full"
          width={100}
          height={100}
        />

        <div className="hidden flex-col lg:flex">
          <h2 className="primary text-base font-medium md:text-lg">ndrvndr</h2>
          <p className="secondary text-sm md:text-base">Λ7214</p>
        </div>
      </div>

      <ThemeButton />
    </header>
  );
}
