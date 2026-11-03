import type { ComponentType, SVGProps } from "react";
import {
  SiAndroid,
  SiChartdotjs,
  SiClaude,
  SiCss,
  SiCursor,
  SiExpo,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { Atom, Braces, FileText, Globe, Layers, Mail, MonitorSmartphone, Plug, RefreshCw, Smartphone, Sparkles } from "lucide-react";
import type { ServiceIcon, SkillIcon, SocialKind } from "@/types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export const skillIcons: Record<SkillIcon, IconComponent> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  python: SiPython,
  redux: SiRedux,
  reactrouter: SiReactrouter,
  expo: SiExpo,
  tailwind: SiTailwindcss,
  mui: SiMui,
  chartjs: SiChartdotjs,
  github: SiGithub,
  gitlab: SiGitlab,
  postman: SiPostman,
  vercel: SiVercel,
  claude: SiClaude,
  cursor: SiCursor,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  redis: SiRedis,
  framer: SiFramer,
  threejs: SiThreedotjs,
  git: SiGit,
  android: SiAndroid,
  api: Plug,
  spark: Sparkles,
  generic: Braces,
};

export const serviceIcons: Record<ServiceIcon, IconComponent> = {
  globe: Globe,
  layers: Layers,
  atom: Atom,
  nextjs: SiNextdotjs,
  mobile: Smartphone,
  refresh: RefreshCw,
  responsive: MonitorSmartphone,
};

export const socialIcons: Record<SocialKind, IconComponent> = {
  linkedin: FaLinkedinIn,
  github: SiGithub,
  email: Mail,
  resume: FileText,
  x: Sparkles,
  website: Globe,
};
