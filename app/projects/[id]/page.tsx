import DedicatedPageView from "@/Components/Mount/Projects/DedicatedPageView";
import { ProjectData } from "@/types/ProjectTypes";
import Link from "next/link";

interface props {
  params: Promise<{
    id: string;
  }>;
}

const getProjectData = async (id: string) => {
  const ProjectURL = `${process.env.SUPABASE_URL}/rest/v1/personal_projects?Link=eq.${id}&select=*`;
  try {
    const res = await fetch(ProjectURL, {
      headers: {
        apikey: process.env.SUPABASE_ANONE_KEY || "",
      },
      next: { revalidate: 60 },
    });
    const Response = await res.json();
    const ProjectData = Response[0] as ProjectData;
    // console.log(ProjectData);
    return ProjectData;
  } catch (e) {
    console.error(`Failed to fetch data, Error:${e}`);
  }
};

export default async function Page({ params }: props) {
  const { id } = await params;
  const ProjectData = await getProjectData(id);
  if (!ProjectData)
    return (
      <div className="flex justify-center gap-2">
        page content wan&apos;t available :({""}
        <Link href="/" className="text-blue-500 underline">
          go back
        </Link>
      </div>
    );
  return <DedicatedPageView ProjectData={ProjectData} />;
}
