import {
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";

const ICON_SIZE: number = 24;

export const TECH_STACK_SIZE = [
  {
    label: "React.js",
    icon: <SiReact />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "Firebase",
    icon: <SiFirebase size={ICON_SIZE} color="#016949" />,
  },
];

export const TECH_STACK_IRMA = [
  {
    label: "Next JS",
    icon: <SiNextdotjs size={ICON_SIZE} color="" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "Prisma ORM",
    icon: <SiPrisma size={ICON_SIZE} color="" />,
  },
];

export const TECH_STACK_OGE = [
  {
    label: "PHP",
    icon: <SiPhp size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "MySQL",
    icon: <SiMysql size={ICON_SIZE} color="#38BDF8" />,
  },
];

export const TECH_STACK_ANIME = [
  {
    label: "Next JS",
    icon: <SiNextdotjs size={ICON_SIZE} color="" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "Prisma",
    icon: <SiPrisma size={ICON_SIZE} color="" />,
  },
];

export const PROJECTCARD_CONTENTS = [
  {
    url: "https://irma-management-system.vercel.app",
    techStack: TECH_STACK_IRMA,
    name: "Irma Management System",
    description:
      "Management System for Irma Miftahul Huda with Next.js and Tailwind CSS",
    image: "/irma.webp",
    imageAlt: "Irma Anime",
  },
  {
    url: "https://mangaverse-gamma.vercel.app",
    techStack: TECH_STACK_ANIME,
    name: "MangaVerse",
    description: "Read Manga, Manhwa and Manhua with Next.js and Tailwind CSS",
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1743945192/6802C4FF-2DBE-46D5-866B-F57DD33A0026_peoomp.png",
    imageAlt: "MangaVerse",
  },
  {
    url: "https://sizestore.site",
    name: "SizeStore Landing Page",
    description: "Landing page size store with React.js and Tailwind CSS",
    techStack: TECH_STACK_SIZE,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1742243652/daily_vlog_yrzeav.png",
    imageAlt: "SizeStore Landing Page",
  },
  {
    url: "",
    techStack: TECH_STACK_OGE,
    name: "POS OGE CASE",
    description: "POS OGE CASE with PHP and MYSQL",
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1742390806/daily_vlog_2_de3sjv.png",
    imageAlt: "POS OGE CASE",
  },
];
