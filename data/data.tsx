import { FaFigma, FaNodeJs, FaPython, FaReact, FaRust } from "react-icons/fa";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiVideoOnAiFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRadixui,
  SiReacthookform,
  SiSupabase,
  SiTauri,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { DiLinux, DiPhotoshop, DiPostgresql } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import type {
  ContactData,
  DetailsData,
  HeroData,
  NavLink,
  SkillsData,
  TextContentData,
} from "./type";
import { BiLogoPostgresql } from "react-icons/bi";

export const navLinks: Array<NavLink> = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroData: HeroData = {
  name: "Aditya Mandal",
  role: "aka @Adi",
  about_ln1: (
    <p>
      <span className="font-bold">Full Stack Developer</span> and a Final year
      student based in <strong>West Bengal, India</strong>.
    </p>
  ),
  about_ln2: (
    <span>
      building functional web apps/websites with TypeScript, React, Next and
      Supabase. Hosting using Vercel, Render and maintaining CI/CD using Vercel
      CLI tools and Git
    </span>
  ),
  about_ln3:
    "I also have strong video editing and social media skills to help build individuals online presence",
};

export const contactData: ContactData = {
  title: "Contact Info",
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: "nullfaceddevbusiness@gmail.com",
  gh: "https://github.com/aditya-wuw",
  linkedIN: "https://www.linkedin.com/in/aditya-mandal-a30347294",
};

export const details: DetailsData = {
  employment: "",
  certification: [
    {
      label: "Web Dev",
      path: "/Web Development.pdf",
    },
  ],
  college: "Currently final year",
  techstack: (
    <span className="flex gap-2 items-center">
      <RiNextjsFill className="hover:scale-115 scale-100 cursor-pointer" />
      <SiTypescript className="hover:scale-115 scale-100 cursor-pointer" />
      <RiReactjsFill className="hover:scale-115 scale-100 cursor-pointer" />
      <RiSupabaseFill className="hover:scale-115 scale-100 cursor-pointer" />
    </span>
  ),
};

// const icon_size = "w-5 h-5 md:w-7 md:h-7";
const icon_size =
  "[#skills_&]:w-5 [#skills_&]:h-5 md:[#skills_&]:w-7 md:[#skills_&]:h-7 text-lg";

export const skillsData: SkillsData = {
  title: "Skills",
  items: {
    nextjs: {
      label: "Next.js",
      Comp: <RiNextjsFill className={icon_size} />,
      color: "",
    },
    react: {
      label: "React",
      Comp: <FaReact className={icon_size} />,
      color: "group-hover:text-blue-300",
    },
    typescript: {
      label: "TypeScript",
      Comp: <SiTypescript className={icon_size} />,
      color: "group-hover:text-blue-600",
    },
    tailwindcss: {
      label: "Tailwind CSS",
      Comp: <RiTailwindCssFill className={icon_size} />,
      color: "group-hover:text-blue-400",
    },
    vercel: {
      label: "Vercel",
      Comp: <IoLogoVercel className={icon_size} />,
      color: "",
    },
    supabase: {
      label: "Supabase",
      Comp: <SiSupabase className={icon_size} />,
      color: "group-hover:text-green-700",
    },
    postgresql: {
      label: "PostgreSQL",
      Comp: <BiLogoPostgresql className={icon_size} />,
      color: "group-hover:text-green-700",
    },
    sql: {
      label: "SQL",
      Comp: <PiFileSql className={icon_size} />,
      color: "group-hover:text-sky-700",
    },
    zod: {
      label: "Zod",
      Comp: <SiZod className={icon_size} />,
      color: "group-hover:text-blue-800",
    },
    reacthookform: {
      label: "React Hook Form",
      Comp: <SiReacthookform className={icon_size} />,
      color: "group-hover:text-red-500",
    },
    radixui: {
      label: "Radix UI",
      Comp: <SiRadixui className={icon_size} />,
      color: "group-hover:text-neutral-800",
    },
    nodejs: {
      label: "Node.js",
      Comp: <FaNodeJs className={icon_size} />,
      color: "group-hover:text-green-500",
    },
    express: {
      label: "Express.js",
      Comp: <SiExpress className={icon_size} />,
      color: "group-hover:text-green-500",
    },
    mongodb: {
      label: "MongoDB",
      Comp: <SiMongodb className={icon_size} />,
      color: "group-hover:text-green-700",
    },
    python: {
      label: "Python",
      Comp: <FaPython className={icon_size} />,
      color: "group-hover:text-sky-700",
    },
    figma: {
      label: "Figma",
      Comp: <FaFigma className={icon_size} />,
      color: "",
    },
    affinity: {
      label: "Affinity",
      Comp: <DiPhotoshop className={icon_size} />,
      color: "group-hover:text-blue-800",
    },
    linux: {
      label: "Linux",
      Comp: <DiLinux className={icon_size} />,
      color: "group-hover:text-orange-800",
    },
    rust: {
      label: "Rust",
      Comp: <FaRust className={icon_size} />,
      color: "group-hover:text-orange-500",
    },
    tauri: {
      label: "Tauri",
      Comp: <SiTauri className={icon_size} />,
      color: "group-hover:text-yellow-800",
    },
    "video editing": {
      label: "Video Editing",
      Comp: <RiVideoOnAiFill className={icon_size} />,
      color: "",
    },
  },
};

export const TextContent: TextContentData = {
  title: "Thank you for Visiting",
  content: ":3",
  by: "Null faced dev",
};
