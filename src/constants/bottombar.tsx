import { AiOutlineHome } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { CiChat1 } from "react-icons/ci";
import { BiSolidDashboard } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";

const ICON_SIZE: number = 24;

export const BOTTOMBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/" },
  { icon: <SiAboutdotme size={ICON_SIZE} />, pathname: "/about" },
  { icon: <GoProject size={ICON_SIZE} />, pathname: "/projects" },
  { icon: <BiSolidDashboard size={ICON_SIZE} />, pathname: "/dashboard" },
  { icon: <CiChat1 size={ICON_SIZE} />, pathname: "/guestbook" },
  { icon: <FaRegPaperPlane size={ICON_SIZE} />, pathname: "/contact" },
];
