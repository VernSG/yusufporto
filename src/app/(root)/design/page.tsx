import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import ColorPalette from "./ColorPalette";

export const metadata: Metadata = {
  title: "Design | Muhammad Yusuf",
  description:
    "Explore my design page to dive into the world of colors that define my website. Discover the rich and diverse color palette that fuels my web aesthetics. Learn how I use color to create a visually captivating online experience.",
  alternates: {
    canonical: "https://yusufsaputra.vercel.app/design",
  },
};

export default function Design() {
  return (
    <div className="p-8">
      <PageTitle
        title="Website's Design"
        description="yusufsaputra.vercel.app color palette."
      />
      <ColorPalette />
    </div>
  );
}
