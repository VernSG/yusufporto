import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiFramer,
  SiNginx,
  SiPhp,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiMysql
} from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE: number = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  MySql: <SiMysql size={ICON_SIZE} color="" />,
  MongoDB: <SiMongodb size={ICON_SIZE} color="" />,
  Express: <SiExpress size={ICON_SIZE} />,
  Php: <SiPhp size={ICON_SIZE} color="" />,
  Shadcnui: <SiShadcnui size={ICON_SIZE} color="" />,
  "Next.js": <SiNextdotjs size={ICON_SIZE} color="" />,
  Nginx: <SiNginx size={ICON_SIZE} color="" />,
  "React.js": <SiReact size={ICON_SIZE} color="#149FCB" />,
  TailwindCSS: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  Vite: <SiVite size={ICON_SIZE} color="#689EFE" />,
  SASS: <SiSass size={ICON_SIZE} color="#CE649B" />,
  Firebase: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
  "Framer Motion": <SiFramer size={ICON_SIZE} />,
  HTML: <SiHtml5 size={ICON_SIZE} color="#F06525" />,
  CSS: <SiCss3 size={ICON_SIZE} color="#214CE5" />,
  "Node JS": <SiNodedotjs size={ICON_SIZE} color="#418A3F" />,
  Github: <SiGithub size={ICON_SIZE} />,
};
