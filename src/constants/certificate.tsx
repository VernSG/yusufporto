import {
    SiFirebase,
    SiFlask,
    SiNodedotjs,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiPython,
    SiPytorch,
    SiVultr,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiGit
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
      icon: <SiReact size={ICON_SIZE} color="#38BDF8" />,
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

  export const TECH_STACK_LOMBA = [
    {
      label: "React JS",
      icon: <SiReact size={ICON_SIZE} color="#38BDF8" />,
    },
    {
      label: "Html5",
      icon: <SiHtml5 size={ICON_SIZE} color="" />,
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={ICON_SIZE} color="" />,
    }
];

 export const TECH_STACK_WEB = [
        {
          label: "HTML5",
          icon: <SiHtml5 size={ICON_SIZE} color="#38BDF8" />,
        },
     {
          label: "CSS3",  
          icon: <SiCss3 size={ICON_SIZE} color="39BDF8" />,
        },
  ];
  
  export const PROJECTCARD_CONTENTS = [
    {
      url: "",
      name: "Website landing pages competition participation",
      description:
        "Top 10 lomba web landing pages FESIFO2024",
      techStack: TECH_STACK_LOMBA,
      image:
        "https://res.cloudinary.com/djsdnb4td/image/upload/v1726273904/IMG-20240914-WA0002_kcgxlr.jpg",
      imageAlt: "Javascript",
    },
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
        url: "https://www.dicoding.com/certificates/KEXL1L53YXG2",
        name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        description:
          "Diterbitkan Mei 2024 Kadaluarsa Mei 2027",
        techStack: TECH_STACK_BE,
        image:
          "https://res.cloudinary.com/djsdnb4td/image/upload/v1716118332/be_o69t8x.png",
        imageAlt: "Dicoding Website Screenshot",
      },
       {
        url: "https://www.dicoding.com/certificates/53XEOQL29ZRN",
        name: "Belajar Dasar Pemrograman Web",
        description:
          "Diterbitkan Mei 2024 Kadaluarsa Mei 2027",
        techStack: TECH_STACK_WEB,
        image:
          "https://res.cloudinary.com/djsdnb4td/image/upload/v1717136316/abstact_maytw7.jpg",
        imageAlt: "Dicoding Website Screenshot",
      },
  ];
