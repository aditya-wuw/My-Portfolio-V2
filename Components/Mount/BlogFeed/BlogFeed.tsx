import { BlogFeedData } from "@/types/BlogTypes";
import BlogFeedView from "./BlogFeedView";

const getBlogFeeds = async () => {
  const ProjectURL = `${process.env.SUPABASE_DATA_API_ENDPOINT}/personal_blogs?select=id,title,shortDescription,published`;
  try {
    const res = await fetch(ProjectURL, {
      headers: {
        apikey: process.env.SUPABASE_ANONE_KEY || "",
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      const errorMessage = await res.json();
      console.error(`Recived: ${errorMessage}`);
      return [];
    }
    const Response = await res.json();
    const Feeds = Response as BlogFeedData[];
    return Feeds;
  } catch (e) {
    console.error(`Failed to fetch data, Error: ${e}`);
    return [];
  }
};

export default async function BlogFeed() {
  const BlogFeeds = await getBlogFeeds();
  return (
    <div id="Journal" className="w-full h-full">
      <BlogFeedView Feeds={BlogFeeds} />
    </div>
  );
}
