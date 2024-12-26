import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export const metadata: Metadata = {
  title: "Muhammad Yusuf Saputra - Portofolio dan Blog",
  description:
    "Muhammad Yusuf Saputra, seorang web developer yang berdedikasi pada pengembangan website modern & berkualitas. Pelajari lebih lanjut tentang proyek, keterampilan, dan pemikiran saya di sini.",
  alternates: {
    canonical: "https://yusufs.me/",
  },
  keywords: [
    "Muhammad Yusuf Saputra",
    "Siapa Muhammad Yusuf Saputra",
    "web developer Indonesia",
    "portofolio Muhammad Yusuf Saputra",
    "tentang Muhammad Yusuf Saputra",
  ],
  openGraph: {
    title: "Muhammad Yusuf Saputra - Web Developer",
    description:
      "Selamat datang di situs pribadi Muhammad Yusuf Saputra. Temukan proyek, blog, dan pemikiran saya seputar pengembangan website.",
    url: "https://yusufs.me/",
    siteName: "Muhammad Yusuf Saputra",
    images: [
      {
        url: "https://res.cloudinary.com/djsdnb4td/image/upload/v1726242676/Ryo_Yamada_1_vflkls.jpg",
        width: 800,
        height: 600,
        alt: "Muhammad Yusuf Saputra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yusuf Saputra",
    description:
      "Situs pribadi Muhammad Yusuf Saputra. Proyek, keterampilan, dan blog pengembangan web.",
    images: [
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1726242676/Ryo_Yamada_1_vflkls.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="px-8 pb-5 pt-8">
        <PageTitle title="Home" description="introduction to myself" />
        <Header />
        <Hero />
        <Stacks />
      </div>
    </>
  );
}
