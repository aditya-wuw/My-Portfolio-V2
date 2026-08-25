import { FaFigma, FaNodeJs, FaPython, FaReact, FaRust } from "react-icons/fa";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiVideoOnAiFill,
} from "react-icons/ri";
import {
  SiMongodb,
  SiRadixui,
  SiReacthookform,
  SiSupabase,
  SiTauri,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
// import { GrGithub } from 'react-icons/gr'
import { DiLinux, DiPhotoshop, DiReact } from "react-icons/di";
// import { CgVercel } from 'react-icons/cg'
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { assets, demos } from "../Assets/assets";
import type {
  ContactData,
  DetailsData,
  HeroData,
  NavLink,
  ProjectsData,
  SkillsData,
  TextContentData,
} from "./type";

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

const icon_size = "w-5 h-5 md:w-7 md:h-7";

export const skillsData: SkillsData = {
  title: "Skills",
  items: [
    { Name: "Next.js", Comp: <RiNextjsFill className={icon_size} /> },
    {
      Name: "React",
      Comp: <FaReact className={icon_size} />,
      color: "group-hover:text-blue-300",
    },
    {
      Name: "TypeScript",
      Comp: <SiTypescript className={icon_size} />,
      color: "group-hover:text-blue-600",
    },
    {
      Name: "Tailwind CSS",
      Comp: <RiTailwindCssFill className={icon_size} />,
      color: "group-hover:text-blue-400",
    },
    {
      Name: "Vercel",
      Comp: <IoLogoVercel className={icon_size} />,
    },
    {
      Name: "Supabase",
      Comp: <SiSupabase className={icon_size} />,
      color: "group-hover:text-green-700",
    },
    {
      Name: "Zod",
      Comp: <SiZod className={icon_size} />,
      color: "group-hover:text-blue-800",
    },
    {
      Name: "React Form Hooks",
      Comp: <SiReacthookform className={icon_size} />,
      color: "group-hover:text-red-500",
    },
    {
      Name: "Radix UI",
      Comp: <SiRadixui className={icon_size} />,
      color: "group-hover:text-black-500",
    },
    {
      Name: "Node.js",
      Comp: <FaNodeJs className={icon_size} />,
      color: "group-hover:text-green-500",
    },
    {
      Name: "SQL",
      Comp: <PiFileSql className={icon_size} />,
      color: "group-hover:text-sky-700",
    },
    {
      Name: "MongoDB",
      Comp: <SiMongodb className={icon_size} />,
      color: "group-hover:text-green-700",
    },
    {
      Name: "Python",
      Comp: <FaPython className={icon_size} />,
      color: "group-hover:text-sky-700",
    },
    { Name: "Figma", Comp: <FaFigma className={icon_size} /> },
    {
      Name: "Affinity",
      Comp: <DiPhotoshop className={icon_size} />,
      color: "group-hover:text-blue-800",
    },
    {
      Name: "Linux",
      Comp: <DiLinux className={icon_size} />,
      color: "group-hover:text-orange-800",
    },
    {
      Name: "Rust",
      Comp: <FaRust className={icon_size} />,
      color: "group-hover:text-orange-500",
    },
    {
      Name: "Tauri",
      Comp: <SiTauri className={icon_size} />,
      color: "group-hover:text-yellow-800",
    },
    { Name: "Video Editing", Comp: <RiVideoOnAiFill className={icon_size} /> },
  ],
};

export const projectsData: ProjectsData = {
  title: "Featured",
  items: [
    {
      title: "copy-chan",
      Link: "copy-chan",
      started: "1st Dec",
      ended: "23rd Dec 2025",
      DemoVideo: demos.copychandemo,
      Update:
        "copy-chan is now live and activly being used by me and my friends",
      contributors: [
        {
          label: "aditya",
          profileUrl: "/Images_Optimized/Profile/logo_new.png",
          link: "https://github.com/aditya-wuw",
        },
      ],
      description:
        "I needed a Windows-like clipboard manager as I switched to Linux, so I made my own setup.",
      additional_dec:
        "Copy Chan is a cross-platform desktop clipboard/history manager with an emoji and symbols picker, built with Tauri (Rust) and React + Vite. Primarily made and optimized for Linux.",
      dedicated_dec: {
        Desc: "A lightning-fast native desktop utility built to bridge the gap between Windows and Linux clipboard histories. With v1.0.805 copy-chan is 10x faster than windows native clipboard manager, new ASCII patterns and emojies",
        ProjectIdea:
          "Frustrated by the lack of smooth, native clipboard managers when transitioning layout OS workspaces to Linux, I decided to build an lightweight asset with an accessible emoji dashboard.",
        HowItWorks:
          "Using Tauri and Rust, the app spawns a global system listener thread that intercepts system clipboard changes, stores them in an efficient local layout, and displays them via a lightweight React frontend.",
      },
      image: assets.copychan,
      tags: [
        <DiReact size={18} key="react" />,
        <FaRust size={18} key="rust" />,
        <SiTauri size={18} key="tauri" />,
        <RiTailwindCssFill size={18} key="tw" />,
        "solo",
      ],
      links: [
        {
          label: "View",
          url: "https://copychan.smgcat.site",
        },
        {
          label: "Repo",
          url: "https://github.com/Smug-Cat-s-Den/Copy-Chan",
        },
      ],
    },
    {
      title: "Koneko AI",
      Link: "koneko",
      status: "",
      started: "20th Dec 2025",
      ended: "10th Jan 2026",
      DemoVideo: demos.Koneko,
      contributors: [
        {
          label: "aditya",
          profileUrl: "/Images_Optimized/Profile/logo_new.png",
          link: "https://github.com/aditya-wuw",
        },
      ],
      description:
        "AI-powered web app that generates personalized mock tests and notes to help students prepare effectively for exams.",
      additional_dec:
        "Send a prompt and start preparing as it creates a virtual mock test simulation for you.",
      dedicated_dec: {
        Desc: "An intelligent automated education suite designed to transform unstructured textbooks into mock testing engines.",
        ProjectIdea:
          "Traditional studying methods feel passive. Koneko AI aims to turn study materials into dynamic testing sandboxes to boost active memory recall.",
        HowItWorks:
          "Users pass their course subjects or notes, which are parsed and sent to an AI orchestration layer. The application then streams structural multi-choice questions back and structures mock analytics with Supabase handling progress data.",
      },
      image: assets.Kokeno,
      tags: [
        "NEXT",
        <RiTailwindCssFill size={18} key="tw" />,
        <SiSupabase className="h-4 w-4" key="sb" />,
        "Solo",
      ],
      links: [
        {
          label: "Demo",
          url: "https://koneko.smgcat.site",
        },
      ],
    },
    {
      title: "Smug Cat's Den",
      Link: "smugcat",
      started: "2nd Feb 2026",
      ended: "Today",
      contributors: [
        {
          label: "aditya",
          profileUrl: "/Images_Optimized/Profile/logo_new.png",
          link: "https://github.com/aditya-wuw",
        },
      ],
      description:
        "This is the online brand alias I maintain to release my open-source apps or products. The name comes from a motivation of some self-centered cats building something cool, haha.",
      additional_dec:
        "My vision is very ambitious, but I am currently narrowing it down to something more achievable.",
      dedicated_dec: {
        Desc: "Smug Cat's Den serves as my digital umbrella studio and playground for personal open-source projects, tools, and branding experiments.",
        ProjectIdea:
          "The concept stems from creating a distinct developer persona—something memorable, playful, and completely unhinged like cats building code—to host production-ready apps.",
        HowItWorks:
          "It handles multi-project routing and deployment configurations across specific subdomains while serving as the primary hub for my software releases.",
      },
      image: assets.smgcat,
      tags: ["brand", "alias"],
      links: [
        {
          label: "View",
          url: "https://home.smgcat.site/",
        },
      ],
    },
    {
      title: "Music Player Component",
      Link: "Player",
      started: "1st Feb",
      ended: "8th Feb 2025",
      contributors: [
        {
          label: "aditya",
          profileUrl: "/Images_Optimized/Profile/logo_new.png",
          link: "https://github.com/aditya-wuw",
        },
      ],
      description:
        "Fully hand-coded the logic of the displayed music player right next to the skills tab.",
      additional_dec:
        "Initially used to showcase my favorite music, but I removed them due to copyright issues. I have also been learning to produce music since the start of 2026, so the music player may showcase some of my own tracks in the future.",
      dedicated_dec: {
        Desc: "A custom-built, highly interactive custom web audio layout built natively within a portfolio context.",
        ProjectIdea:
          "Instead of relying on clunky third-party iframe embed codes that degrade site load speeds, I hand-coded an interactive HTML5 audio engine node.",
        HowItWorks:
          "Utilizes React state hooks tied to DOM audio nodes to handle play status, track queuing, duration calculation, and seamless timeline scrubbing.",
      },
      image: assets.msplayer,
      tags: [
        <DiReact size={18} key="react" />,
        <RiTailwindCssFill size={18} key="tw" />,
      ],
      links: [
        {
          label: "Repo",
          url: "https://github.com/aditya-wuw/Null-V2-Portfolio-/blob/master/src/components/Mount/Profile/MusicEmbed.tsx",
        },
      ],
    },
    {
      title: "FireShip Discord bot",
      Link: "FireShip_Discord_bot",
      description:
        "FireShip bot is a Discord bot designed to keep users up to date with the latest videos.",
      additional_dec:
        "Fireship is awesome, so I made this bot to stay instantly updated with channel uploads.",
      dedicated_dec: {
        Desc: "FireShipBot is an automation tool built to fetch the latest videos from the Fireship YouTube channel and send instant updates to a Discord server.",
        ProjectIdea:
          "As a fan of Fireship’s short, fast-paced tech videos, I wanted a clean way to get notified when a new one dropped without cluttering my personal YouTube subscription feeds.",
        HowItWorks:
          "The bot runs on a 24-hour cron schedule built on Node.js. It hits the YouTube Data API to check for new video keys, compares them with the last cached entry, and automatically broadcasts embedded updates to configured webhooks.",
      },
      image: assets.Fireship,
      tags: [<FaNodeJs size={18} key="node" />, "Express", "YTV3"],
      links: [
        {
          label: "none",
          url: "none",
        },
        {
          label: "Repo",
          url: "https://github.com/aditya-wuw/FireShipBot",
        },
      ],
    },
    {
      title: "HMS-dashboard",
      Link: "HMS_dashboard",
      status: "",
      description:
        "Tasked with building an Admin Hospital Management System Dashboard. This is a full-stack project demo.",
      additional_dec:
        "A robust full-stack dashboard built during a hackathon challenge.",
      DemoVideo: demos.HMSdemo,
      dedicated_dec: {
        Desc: "HMS Dashboard is a full-stack healthcare platform engineered to handle core operations including analytical tracking and patient registration workflows.",
        ProjectIdea:
          "Conceived during a rapid hackathon timeframe, this system addresses workflow congestion in clinics by digitizing tracking protocols.",
        HowItWorks:
          "The UI maps relational operational queues through React components. Database logic coordinates secure CRUD updates handling doctor profiles, calendar bookings, and analytical summaries.",
      },
      Update:
        "I recently migrated the database to SQL from Mongo as I no longer use it",
      image: assets.screenshot5,
      tags: [
        <RiReactjsFill size={18} key="react" />,
        "Express",
        <span className="flex items-center gap-1" key="mongo">
          <BiLogoPostgresql size={18} />
          <h1>Neon</h1>
        </span>,
      ],
      links: [
        {
          label: "Demo",
          url: "https://hms-dashbord-1.onrender.com/",
        },
        {
          label: "Repo",
          url: "https://github.com/aditya-wuw/HMS-Dashbord",
        },
      ],
    },
  ],
};
export const TextContent: TextContentData = {
  title: "Thank you for Visiting",
  content: ":3",
  by: "Null faced dev",
};
