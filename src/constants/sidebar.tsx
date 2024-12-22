import { AiOutlineHome } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { BiSolidDashboard } from "react-icons/bi";

const ICON_SIZE: number = 24;

export const SIDEBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/", label: "Home" },
  {
    icon: <SiAboutdotme size={ICON_SIZE} />,
    pathname: "/about",
    label: "About",
  },
  {
    icon: <FaBlog size={ICON_SIZE} />,
    pathname: "/blog",
    label: "Blog",
  },
  {
    icon: <BiSolidDashboard size={ICON_SIZE} />,
    pathname: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: <CiChat1 size={ICON_SIZE} />,
    pathname: "/guestbook",
    label: "Chat",
  },
  {
    icon: <FaRegPaperPlane size={ICON_SIZE} />,
    pathname: "/contact",
    label: "Contact",
  },
];
