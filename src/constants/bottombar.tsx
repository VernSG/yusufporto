import { AiOutlineHome } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";

const ICON_SIZE: number = 24;

export const BOTTOMBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/" },
  { icon: <SiAboutdotme size={ICON_SIZE} />, pathname: "/about" },
  { icon: <GoProject size={ICON_SIZE} />, pathname: "/projects" },
  { icon: <CiMusicNote1 size={ICON_SIZE} />, pathname: "/music" },
  { icon: <GrCertificate size={ICON_SIZE} />, pathname: "/certificate" },
  { icon: <FaRegPaperPlane size={ICON_SIZE} />, pathname: "/contact" },
];
