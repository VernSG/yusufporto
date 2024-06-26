import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export const metadata: Metadata = {
  title: "Muhammad Yusuf Saputra",
  description:
    "Personal website and blog by Muhammad Yusuf Saputra. Showcase of my projects, thoughts and skills on website development.",
  alternates: {
    canonical: "https://yusufs.me/",
  },
};

export default function Home() {
  return (
    <>
      <div className="px-8 pb-5 pt-8">
        <PageTitle
          title="Home"
          description="introduction to myself"
        />
        <Header />
        <Hero />
        <Stacks />
      </div>
    </>
  );
}
