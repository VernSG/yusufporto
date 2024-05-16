import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE: number = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  "React.js": <SiReact size={ICON_SIZE} color="#149FCB" />,
  TailwindCSS: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  Vite: <SiVite size={ICON_SIZE} color="#689EFE" />,
  SASS: <SiSass size={ICON_SIZE} color="#CE649B" />,
  Firebase: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
  "Framer Motion": <SiFramer size={ICON_SIZE} />,
  Jest: <SiJest size={ICON_SIZE} color="#15C312" />,
  Redux: <SiRedux size={ICON_SIZE} color="#764BBD" />,
  "React Query": <SiReactquery size={ICON_SIZE} color="#FF4055" />,
  HTML: <SiHtml5 size={ICON_SIZE} color="#F06525" />,
  CSS: <SiCss3 size={ICON_SIZE} color="#214CE5" />,
  Prisma: <SiPrisma size={ICON_SIZE} color="#2C3648" />,
  "Node JS": <SiNodedotjs size={ICON_SIZE} color="#418A3F" />,
  Github: <SiGithub size={ICON_SIZE} />,
  "React Router": <SiReactrouter size={ICON_SIZE} color="#F54350" />,
  "React Hook Form": <SiReacthookform size={ICON_SIZE} color="#ED5991" />,
  "React Table": <SiReacttable size={ICON_SIZE} color="#1C8FC8" />,
};
