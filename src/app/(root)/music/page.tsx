import MusicCard from "@/components/cards/MusicCard";
import ProjectCard from "@/components/cards/MusicCard";
import PageTitle from "@/components/elements/PageTitle";
import { MUSICCARD_CONTENTS } from "@/constants/music";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Muhammad Yusuf",
  description:
    "Discover my portfolio of frontend development Music, a curated collection showcasing my skills and creativity in web design and development. Immerse yourself in a diverse range of web solutions and innovative designs.",
  alternates: {
    canonical: "https://yusufs.me/Music",
  },
};

export default function Music() {
  return (
    <div className="p-8">
      <PageTitle
        title="Music"
        description="Showcase of my library music"
      />

      <section className="lg:mb-20">
        <ul className="grid gap-8 sm:grid-cols-2">
          {MUSICCARD_CONTENTS.map((content, index) => (
            <MusicCard
              key={index}
              url=""
              title={content.name}
              description={content.description}
              image={content.image}
              imageAlt={content.imageAlt}
              audioSrc={content.audioSrc}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
