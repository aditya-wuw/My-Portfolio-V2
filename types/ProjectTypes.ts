export interface ProjectData {
  title: string;
  Link: string;
  started?: string;
  ended?: string;
  DemoVideo?: string;
  image?: string;
  Description: string;
  AdditionalDescription?: string | null;
  content: string;
  tags: string[];
  links: ProjectLink[];
}

interface ProjectLink {
  url: string;
  label: string;
}

export type ProjectCardsType = Omit<ProjectData, "content" | "DemoVideo">;
