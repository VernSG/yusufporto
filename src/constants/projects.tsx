import {
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiMysql,
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

export const PROJECTCARD_CONTENTS = [
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
