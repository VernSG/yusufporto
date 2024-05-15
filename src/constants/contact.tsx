import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

const ICON_SIZE: number = 20;

export const CONTACT_ITEMS = [
  {
    icon: <FiGithub size={ICON_SIZE} />,
    url: "https://github.com/VernSG",
    label: "GitHub",
    backgroundColor: "#262626",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    url: "https://www.linkedin.com/in/muhammad-yusuf-saputra/",
    label: "LinkedIn",
    backgroundColor: "#0A66C2",
  },
  {
    icon: <FiInstagram size={ICON_SIZE} />,
    url: "https://www.instagram.com/yusufff.rttex/",
    label: "Instagram",
    backgroundColor: "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
  },
  {
    icon: <FiTwitter size={ICON_SIZE} />,
    url: "https://twitter.com/",
    label: "Twitter",
    backgroundColor: "#262626",
  },
  {
    icon: <FiFacebook size={ICON_SIZE} />,
    url: "https://www.facebook.com/",
    label: "Facebook",
    backgroundColor: "#0966FE",
  },
];
