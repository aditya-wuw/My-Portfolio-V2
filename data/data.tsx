import { FaDocker, FaNodeJs, FaPython, FaReact, FaRust } from "react-icons/fa";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiBlender,
  SiDavinciresolve,
  SiExpress,
  SiMongodb,
  SiRadixui,
  SiReacthookform,
  SiSupabase,
  SiTauri,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { DiLinux, DiPhotoshop } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import type {
  ContactData,
  DetailsData,
  HeroData,
  NavLink,
  SkillsData,
  TextContentData,
} from "./type";
import { BiLogoPostgresql, BiMusic } from "react-icons/bi";
import { BlogPageData } from "@/types/BlogTypes";

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
      Building desktop, web apps and websites with TypeScript, Next.JS, Tauri
      and Supabase. Hosting using Vercel, Render and managing deployments via
      Vercel CLI tools and Git
    </span>
  ),
  about_ln3:
    "I also have strong video editing, social media skills and understanding of 3D softwares to help build individuals online presence. Currently exploring music production in my spare time",
};

export const contactData: ContactData = {
  title: "Contact Info",
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: "aditya@smgcat.site",
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
  "[#skills_&]:w-5 [#skills_&]:h-5 md:[#skills_&]:w-6.5 md:[#skills_&]:h-6.5 text-lg";

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

    linux: {
      label: "Linux",
      Comp: <DiLinux className={icon_size} />,
      color: "group-hover:text-orange-800",
    },
    docker: {
      label: "Docker",
      Comp: <FaDocker className={icon_size} />,
      color: "group-hover:text-blue-500",
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
      label: "Davinchi resolve",
      Comp: <SiDavinciresolve className={icon_size} />,
      color: "",
    },
    affinity: {
      label: "Affinity",
      Comp: <DiPhotoshop className={icon_size} />,
      color: "group-hover:text-blue-800",
    },
    blender: {
      label: "Blender",
      Comp: <SiBlender className={icon_size} />,
      color: "group-hover:text-orange-600",
    },
    music: {
      label: "FL Studio",
      Comp: <BiMusic className={icon_size} />,
      color: "group-hover:text-green-600",
    },
  },
};

export const TextContent: TextContentData = {
  title: "Thank you for Visiting",
  content: ":3",
  by: "Null faced dev",
};

export const TestDataBlogPage: BlogPageData = {
  id: "dasdasdadssada",
  title: "Testing Blog post page",
  content: `The quick brown fox jumps over the lazy dog while background workers process incoming queue events asynchronously. In distributed systems, maintaining eventual consistency requires careful coordination between write-ahead logs and cache invalidation policies.\n### Key Milestones \n- **Phase 1:** Core infrastructure provisioning and VPC peering.- **Phase 2:** Database indexing optimizations and read-replica scaling.\n- **Phase 3:** Automated failover routines and end-to-end monitoring.> "Premature optimization is the root of all evil (or at least most of it) in programming."

  > # "greatest human being that ever lived"
  \`\`\`typescript
  interface CacheConfig {
    ttlSeconds: number;
    maxEntries: number;
    evictionPolicy: 'LRU' | 'FIFO';
  }
  \`\`\`
  - **Phase 2:** Database indexing optimizations and read-replica scaling.
  \`\`\`py
  helloWorld = "Hi"
  \`\`\`
  - **Phase 2:** Database indexing optimizations and read-replica scaling.
  \n\n
  ![somethinger](/store/Board.png)
  `,
  banner: "/Assets/ow.png",
  published: new Date("2026-08-30T08:35:50.000Z"),
  // updated: new Date("2026-09-01T08:35:50.000Z"),
};
