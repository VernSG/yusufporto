import { AiOutlineHome } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { TbWriting } from "react-icons/tb";

const ICON_SIZE: number = 24;

export const BOTTOMBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/" },
  { icon: <SiAboutdotme size={ICON_SIZE} />, pathname: "/about" },
  { icon: <GoProjectSymlink size={ICON_SIZE} />, pathname: "/projects" },
  { icon: <FaRegPaperPlane size={ICON_SIZE} />, pathname: "/contact" },
];
