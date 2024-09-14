import { BiLogoPostgresql } from "react-icons/bi";
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
  SiDaisyui,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiFlowbite,
  SiMysql
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE: number = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  FlowBite: <SiFlowbite size={ICON_SIZE} color="" />,
  MySql: <SiMysql size={ICON_SIZE} color="" />,
  MongoDB: <SiMongodb size={ICON_SIZE} color="" />,
  Php: <SiPhp size={ICON_SIZE} color="" />,
  Nginx: <SiNginx size={ICON_SIZE} color="" />,
  "React.js": <SiReact size={ICON_SIZE} color="#149FCB" />,
  TailwindCSS: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  Vite: <SiVite size={ICON_SIZE} color="#689EFE" />,
  SASS: <SiSass size={ICON_SIZE} color="#CE649B" />,
  Firebase: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
  "Framer Motion": <SiFramer size={ICON_SIZE} />,
  HTML: <SiHtml5 size={ICON_SIZE} color="#F06525" />,
  CSS: <SiCss3 size={ICON_SIZE} color="#214CE5" />,
  Prisma: <SiPrisma size={ICON_SIZE} color="#2C3648" />,
  "Node JS": <SiNodedotjs size={ICON_SIZE} color="#418A3F" />,
  Github: <SiGithub size={ICON_SIZE} />,
  DaisyUI: <SiDaisyui size={ICON_SIZE} />,
};
