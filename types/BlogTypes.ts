interface BlogData {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  banner: string;
  published: Date;
  isUpdated?: boolean;
}

export type BlogShortData = Omit<BlogData, "content" | "banner" | "isUpdated">;
export type BlogPageData = Omit<BlogData, "shortDescription">;
