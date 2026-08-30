import { StaticImageData } from "next/image";
import type { JSX } from "react";

export interface NavLink {
  id: string;
  label: string;
}

export interface HeroData {
  name: string;
  role: string;
  about_ln1: JSX.Element;
  about_ln2: JSX.Element;
  about_ln3: string;
}

export interface ContactData {
  title: string;
  message: string;
  email: string;
  gh: string;
  linkedIN: string;
  CV?: string;
}

export interface CertificationItem {
  label: string;
  path: string;
}

export interface DetailsData {
  employment: string;
  certification: Array<CertificationItem>;
  techstack: JSX.Element;
  college: string;
}

export interface SkillItem {
  label: string;
  Comp: JSX.Element;
  color?: string;
}

export interface SkillsData {
  title: string;
  items: Record<string, SkillItem>;
}

export interface ProjectsData {
  title: string;
  items: Array<ProjectItem>;
}

export interface TextContentData {
  title: string;
  content: string;
  by: string;
}

export interface ProjectDetailsType {
  Desc: string;
  ProjectIdea: string;
  HowItWorks: string;
}

export interface ProjectItem {
  title: string;
  Link: string;
  started?: string;
  ended?: string;
  DemoVideo?: string;
  image: string | null | ImageData | StaticImageData;
  Description: string;
  AdditionalDescription?: string | null;
  content: string;
  tags: string[];
  links: ProjectLink[];
}
export interface ProjectLink {
  label: string | JSX.Element;
  url: string;
}
