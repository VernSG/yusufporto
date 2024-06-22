import { AiOutlineHome } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";

const ICON_SIZE: number = 24;

export const SIDEBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/", label: "Home" },
  {
    icon: <SiAboutdotme size={ICON_SIZE} />,
    pathname: "/about",
    label: "About",
  },
  {
    icon: <GoProject size={ICON_SIZE} />,
    pathname: "/projects",
    label: "Projects",
  },
  {
    icon: <CiMusicNote1 size={ICON_SIZE} />,
    pathname: "/music",
    label: "Music",
  },
  {
    icon: <GrCertificate size={ICON_SIZE} />,
    pathname: "/certificate",
    label: "Certificate",
  },
  {
    icon: <FaRegPaperPlane size={ICON_SIZE} />,
    pathname: "/contact",
    label: "Contact",
  },
];
