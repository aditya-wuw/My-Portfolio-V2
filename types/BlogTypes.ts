interface BlogData {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  banner: string;
  published: Date;
  updated?: Date;
}

export type BlogFeedData = Omit<BlogData, "content" | "banner" | "isUpdated">;
export type BlogPageData = Omit<BlogData, "shortDescription">;
