import {
  SiFirebase,
  SiFlask,
  SiVultr,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const ICON_SIZE: number = 24;

export const TECH_STACK_GTPS = [
  {
    label: "Vps",
    icon: <SiVultr size={ICON_SIZE} color="#38BDF8" />,
  },
];

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

export const PROJECTCARD_CONTENTS = [
  {
    url: "https://youtube.com/VernSG/",
    name: "Growtopia Private Server",
    description:
      "4 years ago, I made a video tutorial on Youtube: how to create a growtopia private server using open source code and run it using a Virtual Private Server (VPS). I was happy to get a lot of views, at that time it reached 36,000 views.",
    techStack: TECH_STACK_GTPS,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1715886530/IMG_20240516_054414_nzfqjf.jpg",
    imageAlt: "GTPS TUTORIAL Screenshot",
  },
  {
    url: "https://sizestore.site/",
    name: "E-Commerce Website",
    description:
      "this is my e-commerce website project made with react js, tailwind css and firebase as database.",
    techStack: TECH_STACK_SIZE,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1715886791/IMG_20240517_031255_diwabo.jpg",
    imageAlt: "Sizestore Website Screenshot",
  },
];
