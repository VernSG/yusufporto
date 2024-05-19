import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import AboutText from "./AboutText";
import Contact from "./Contact";
import FavoriteStacks from "./FavoriteStacks";

export const metadata: Metadata = {
  title: "About | Muhammad Yusuf",
  description:
    "Yusuf, a front-end developer who embarked on his learning journey in 2022, shares his insights and thoughts for comprehending various aspects of front-end development through his blog posts.",
  alternates: {
    canonical: "https://yusufs.me/about",
  },
};

export default function About() {
  return (
    <div className="p-8">
      <PageTitle title="About me" description="Short story about me." />
      <AboutText />
      <FavoriteStacks />
      <Contact />
    </div>
  );
}
