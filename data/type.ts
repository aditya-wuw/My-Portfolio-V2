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
    college: string
}

export interface SkillItem {
    Name: string;
    Comp: JSX.Element;
    color?: string;
}

export interface SkillsData {
    title: string;
    items: Array<SkillItem>;
}

export interface Contributor {
    label: string;
    profileUrl: string;
    link: string;
}

export interface ProjectLink {
    label: string | JSX.Element;
    url: string;
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
    Desc: string
    ProjectIdea: string
    HowItWorks: string
}

export interface ProjectItem {
    title: string;
    Link: string;
    started?: string;
    ended?: string;
    status?: string;
    DemoVideo?: string;
    contributors?: Array<Contributor>;
    description: string;
    additional_dec?: string | null;
    Update?: string;
    dedicated_dec: ProjectDetailsType;
    image: string | null;
    tags: Array<string | JSX.Element>;
    links: Array<ProjectLink>;
}
