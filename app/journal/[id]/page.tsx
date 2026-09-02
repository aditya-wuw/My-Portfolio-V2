import BlogPage from "@/Components/Mount/BlogFeed/BlogPage";
// import { TestDataBlogPage } from "@/data/data";
import { BlogPageData } from "@/types/BlogTypes";
import { redirect } from "next/navigation";

interface props {
  params: Promise<{
    id: string;
  }>;
}

const getBlogData = async (id: string) => {
  const ProjectURL = `${process.env.SUPABASE_URL}/rest/v1/personal_blogs?id=eq.${id}&select=id,title,content,banner,published,updated`;
  const res = await fetch(ProjectURL, {
    cache: "no-store",
    headers: {
      apikey: process.env.SUPABASE_ANONE_KEY || "",
    },
  });
  // const BlogData = TestData;
  const Response = await res.json();
  const BlogData = Response[0] as BlogPageData;
  if (BlogData == undefined) return redirect("/404");
  // console.log(BlogData);
  return BlogData;
};
// const getBlogData = async (id: string) => TestDataBlogPage; //debug

export default async function Page({ params }: props) {
  const { id } = await params;
  const BlogData = await getBlogData(id);
  return <BlogPage Blog={BlogData} />;
}
