import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const ICON_SIZE: number = 24;

export const FOOTER_ITEMS = [
  {
    icon: <FiMail size={ICON_SIZE} />,
    href: "/contact",
    ariaLabel: "Send me an email",
    target: "",
    rel: "",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    href: "https://www.linkedin.com/in/muhammad-yusuf-saputra",
    ariaLabel: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: <FiGithub size={ICON_SIZE} />,
    href: "https://github.com/VernSG",
    ariaLabel: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export const FOOTER_LINKS = [
  {
    label: "Source Code",
    toolTip: "This website is open source.",
    url: "https://github.com/VernSG",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Design",
    toolTip: "yusufsaputra.site color palette.",
    url: "/design",
    target: "",
    rel: "",
  },
  {
    label: "Docs",
    toolTip:
      "Personal documentation about my best practices on web development.",
    url: "/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Starter Templates",
    toolTip: "Starter Templates",
    url: "https://github.com/VernSG",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Audits",
    toolTip:
      "Real-time performance report for yusufsaputra.vercel.app based on the Pagespeed API",
    url: "/audits",
    target: "",
    rel: "",
  },
  {
    label: "Analytics",
    toolTip: "yusufsaputra.site views and visitors analytics",
    url: "/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Statistics",
    toolTip: "Blogs statistics",
    url: "/statistics",
    target: "",
    rel: "",
  },
  {
    label: "Guestbook",
    toolTip: "Leave whatever you like to say-message, appreciation, suggestion",
    url: "/guestbook",
    target: "",
    rel: "",
  },
];
