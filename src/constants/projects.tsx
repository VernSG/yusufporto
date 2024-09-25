import {
  SiFirebase,
  SiFlask,
  SiVultr,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiPytorch,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";

const ICON_SIZE: number = 24;

export const TECH_STACK_GTPS = [
  {
    label: "Vps",
    icon: <SiVultr size={ICON_SIZE} color="#38BDF8" />,
  },
];

export const TECH_STACK_RYO = [
  {
    label: "Node JS",
    icon: <SiNodedotjs size={ICON_SIZE} color="#38BDF8" />,
  },
];

export const TECH_STACK_PHP = [
  {
    label: "php",
    icon: <SiPhp size={ICON_SIZE} color="#38BDF8" />,
  },
];

export const TECH_STACK_GRQ = [
  {
    label: "Python",
    icon: <SiPython size={ICON_SIZE} color="#38BDF8" />,
  },
  ];

export const TECH_STACK_AETHER = [
  {
    label: "Vultr",
    icon: <SiVultr size={ICON_SIZE} color="#38BDF8" />,
  },
];

export const TECH_STACK_REACT = [
  {
    label: "React",
    icon: <SiReact size={ICON_SIZE} color="#38BDF8" />,
  },
]

export const TECH_STACK_JS = [
  {
    label: "Javascript",
    icon: <SiJavascript size={ICON_SIZE} color="#38BDF8" />,
  },
]

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
    url: "https://github.com/indonesianoss/hirakanji-react",
    name: "Hirakanji",
    description:
    "Hirakanji react integrated with Gemini AI",
    techstack: TECH_STACK_HIRAKANJI,
    image: "https://res.cloudinary.com/djsdnb4td/image/upload/v1727288070/hirakanji_flmj7m.png",
    imageAlt: "Hirakanji png",
  },
  {
    url: "https://github.com/VernSG/Ryo-Bot.git",
    name: "Ryo Yamada Bot",
    description:
      "Bot discord with /anime commands added global slash command.",
    techStack: TECH_STACK_RYO,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1722755925/21f1f7ef-eeb1-4dd4-9be6-0d7851c0d7e8.png",
    imageAlt: "Ryo Bot",
  },
  {
    url: "https://github.com/VernSG/ryo-store.git",
    name: "Aplikasi manajemen kasir",
    description:
      "Aplikasi manajemen kasir dan landing pages dengan php dan tailwind css.",
    techStack: TECH_STACK_PHP,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1725172709/ssan_ppq1tk.jpg",
    imageAlt: "GTPS TUTORIAL Screenshot",
  },
  {
    url: "https://youtube.com/VernSG/",
    name: "Growtopia Private Server",
    description:
      "how to create a growtopia private server using open source code and run it using a Virtual Private Server (VPS).",
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
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1720419126/ss_an_pku26m.png",
    imageAlt: "Sizestore Website Screenshot",
  },
  {
    url: "https://github.com/VernSG/",
    name: "AetherEye Bypass",
    description:
      "Pubg Mobile Bypass.",
    techStack: TECH_STACK_AETHER,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1720418808/aether_acm4b7.png",
    imageAlt: "Discord Screenshot",
  },
  {
    url: "https://github.com/VernSG/bot-groq.git",
    name: "Groq Discord Bot",
    description:
      "discord bot integrated by groq ai",
    techStack: TECH_STACK_GRQ,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1720418736/groqqqq_r1jurt.png",
    imageAlt: "Bot Screenshot",
  },
  {
    url: "https://manhwapedia.site",
    name: "Manhwapedia",
    description:
      "Character Manhwa and Manga Desk Website",
    techStack: TECH_STACK_JS,
    image:
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1718028162/manhwa_w4sn9q.png",
    imageAlt: "Web Screenshot",
  },
];
