import { AiOutlineHome } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { TbWriting } from "react-icons/tb";

const ICON_SIZE: number = 24;

export const SIDEBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/", label: "Home" },
  {
    icon: <SiAboutdotme size={ICON_SIZE} />,
    pathname: "/about",
    label: "About",
  },
  {
    icon: <GoProjectSymlink size={ICON_SIZE} />,
    pathname: "/projects",
    label: "Projects",
  },
  {
    icon: <TbWriting size={ICON_SIZE} />,
    pathname: "/certificate",
    label: "Certificate",
  },
  {
    icon: <FaRegPaperPlane size={ICON_SIZE} />,
    pathname: "/contact",
    label: "Contact",
  },
];
