import {
    SiFirebase,
    SiFlask,
    SiNodedotjs,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiPython,
    SiGit,
    SiPytorch,
    SiVultr,
    SiReact,
    SiTailwindcss,
    SiTypescript,
  } from "react-icons/si";
  
  const ICON_SIZE: number = 24;
  
  export const TECH_STACK_JS = [
    {
      label: "Javascript",
      icon: <SiJavascript size={ICON_SIZE} color="#38BDF8" />,
    },
  ];

export const TECH_STACK_JSX = [
    {
      label: "Javascript",
      icon: <SiJavascript size={ICON_SIZE} color="#38BDF8" />,
    },
  ];

export const TECH_STACK_GIT = [
    {
      label: "GIT",
      icon: <SiGit size={ICON_SIZE} color="#38BDF8" />,
    },
  ];
  
  export const TECH_STACK_AWS = [
    {
      label: "AWS",
      icon: <SiVultr size={ICON_SIZE} color="#38BDF8" />,
    },
  ];
   export const TECH_STACK_BE = [
        {
          label: "Node JS",
          icon: <SiNodedotjs size={ICON_SIZE} color="#38BDF8" />,
        },
  ];
  
  export const PROJECTCARD_CONTENTS = [
    {
      url: "https://www.dicoding.com/certificates/0LZ0269LNX65",
      name: "Introduction to Programming using Javascript",
      description:
        "Diterbitkan Jan 2024 Kadaluarsa Jan 2027.",
      techStack: TECH_STACK_JS,
      image:
        "https://res.cloudinary.com/djsdnb4td/image/upload/v1716118348/js_kgmcg2.png",
      imageAlt: "Javascript",
    },
      {
      url: "https://www.codepolitan.com/c/IESMR8F/",
      name: "Introduction to Programming using Javascript",
      description:
        "Diterbitkan Mei 2024 Kadaluarsa Jan 2027.",
      techStack: TECH_STACK_JS,
      image:
        "https://res.cloudinary.com/djsdnb4td/image/upload/v1716813607/jsx_gf9luu.png",
      imageAlt: "Javascript",
    },
    {
      url: "https://www.dicoding.com/certificates/72ZDV7OWQZYW",
      name: "Cloud Practitioner Essentials",
      description:
        "Diterbitkan Mei 2024 Kadaluarsa Mei 2027",
      techStack: TECH_STACK_AWS,
      image:
        "https://res.cloudinary.com/djsdnb4td/image/upload/v1716118331/aws_zqzgbk.png",
      imageAlt: "Dicoding Website Screenshot",
    },
    {
      url: "https://www.codepolitan.com/c/EIS1JDM/",
      name: "Belajar Dasar GIT",
      description:
        "Diterbitkan Mei 2024 Kadaluarsa Mei 2027",
      techStack: TECH_STACK_GIT,
      image:
        "https://res.cloudinary.com/djsdnb4td/image/upload/v1716813598/gitjs_mki9e8.png",
      imageAlt: "CODEPOLITAN Website Screenshot",
    },
    {
        url: "https://www.dicoding.com/certificates/KEXL1L53YXG2",
        name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        description:
          "Diterbitkan Mei 2024 Kadaluarsa Mei 2027",
        techStack: TECH_STACK_BE,
        image:
          "https://res.cloudinary.com/djsdnb4td/image/upload/v1716118332/be_o69t8x.png",
        imageAlt: "Dicoding Website Screenshot",
      },
  ];
