import {
    SiFirebase,
    SiFlask,
    SiMongodb,
    SiNextdotjs,
    SiPython,
    SiPytorch,
    SiReact,
    SiTailwindcss,
    SiTypescript,
  } from "react-icons/si";
  
  const ICON_SIZE: number = 24;
  
  export const TECH_STACK_CHATBOT = [
    {
      label: "React",
      icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
    },
    {
      label: "Python",
      icon: <SiPython size={ICON_SIZE} color="#FEDE59" />,
    },
    {
      label: "PyTorch",
      icon: <SiPytorch size={ICON_SIZE} color="#EE4D2D" />,
    },
    {
      label: "Flask",
      icon: <SiFlask size={ICON_SIZE} color="#63BDC8" />,
    },
    {
      label: "Firebase",
      icon: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
    },
  ];
  
  export const TECH_STACK_X_APP = [
    {
      label: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      label: "TypeScript",
      icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
    },
    {
      label: "MongoDB Atlas",
      icon: <SiMongodb size={ICON_SIZE} color="#016949" />,
    },
  ];
  
  export const TECH_STACK_OOPSUM = [
    {
      label: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      label: "TypeScript",
      icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
    },
  ];
  
  export const TECH_STACK_COLLOSAL = [
    {
      label: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
    },
  ];
  
  export const PROJECTCARD_CONTENTS = [
    {
      url: "https://chatbot-app.pages.dev/",
      name: "AI Chatbot",
      description:
        "An Indonesian language chatbot with deep learning and NLP, that can answer user questions regarding university enrollment information.",
      techStack: TECH_STACK_CHATBOT,
      image:
        "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697086786/personal-website/projects/chatbot.webp",
      imageAlt: "AI Chatbot Website Screenshot",
    },
    {
      url: "https://x-app-clone.vercel.app/",
      name: "X App Clone",
      description:
        "This is a project for developing a clone application of X formerly Twitter, although the end result may not be entirely identical to the X application.",
      techStack: TECH_STACK_X_APP,
      image:
        "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697086832/personal-website/projects/x_app_clone.webp",
      imageAlt: "X App Clone Website Screenshot",
    },
    {
      url: "https://oopsum.vercel.app/",
      name: "Crypto Platform",
      description:
        "Web-3 based crypto trading platform, with real-time data provided by CoinGecko Public API. Designed by Kuldeep Jiyani on Figma.",
      techStack: TECH_STACK_OOPSUM,
      image:
        "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697086833/personal-website/projects/oopsum.webp",
      imageAlt: "Crypto Trading Platform Website Screenshot",
    },
    {
      url: "https://collosal-landing-page-codedesign-dev.vercel.app/",
      name: "Collosal",
      description:
        "Challenge to create landing page from codedesign.dev. Collosal is a visually stunning landing page designed for a software house company.",
      techStack: TECH_STACK_COLLOSAL,
      image:
        "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697086833/personal-website/projects/collosal.webp",
      imageAlt: "Collosal Website Screenshot",
    },
  ];
  
