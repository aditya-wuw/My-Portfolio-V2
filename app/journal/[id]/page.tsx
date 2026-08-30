import BlogPage from "@/Components/Mount/BlogFeed/BlogPage";
import { BlogPageData } from "@/types/BlogTypes";

interface props {
  params: Promise<{
    id: string;
  }>;
}

// const TestData: BlogPageData = {
//   id: "dasdasdadssada",
//   title: "Testing Blog post page",
//   content: `The quick brown fox jumps over the lazy dog while background workers process incoming queue events asynchronously. In distributed systems, maintaining eventual consistency requires careful coordination between write-ahead logs and cache invalidation policies.\n### Key Milestones \n- **Phase 1:** Core infrastructure provisioning and VPC peering.- **Phase 2:** Database indexing optimizations and read-replica scaling.\n- **Phase 3:** Automated failover routines and end-to-end monitoring.> "Premature optimization is the root of all evil (or at least most of it) in programming."

//   > # "greatest human being that ever lived"
//   \`\`\`typescript
//   interface CacheConfig {
//     ttlSeconds: number;
//     maxEntries: number;
//     evictionPolicy: 'LRU' | 'FIFO';
//   }
//   \`\`\`
//   - **Phase 2:** Database indexing optimizations and read-replica scaling.
//   \`\`\`py
//   helloWorld = "Hi"
//   \`\`\`
//   - **Phase 2:** Database indexing optimizations and read-replica scaling.
//   `,
//   banner: "/Assets/ow.png",
//   published: new Date("2026-08-30T08:35:50.000Z"),
//   updated: undefined,
// };

const getBlogData = async (id: string) => {
  const ProjectURL = `${process.env.SUPABASE_DATA_API_ENDPOINT}/personal_blogs?id=eq.${id}&select=id,title,content,banner,published,updated`;
  const res = await fetch(ProjectURL, {
    headers: {
      apikey: process.env.SUPABASE_ANONE_KEY || "",
    },
    // next: { revalidate: 3600 },
  });
  // const BlogData = TestData;
  const Response = await res.json();
  const BlogData = Response[0] as BlogPageData;
  // console.log(ProjectData);
  return BlogData;
};

export default async function Page({ params }: props) {
  const { id } = await params;
  const BlogData = await getBlogData(id);
  return <BlogPage Blog={BlogData} />;
}
