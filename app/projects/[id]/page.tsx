import DedicatedPageUI from "@/Components/Mount/Projects/DedicatedPageUI";
import { ProjectData } from "@/types/ProjectTypes";

interface props {
  params: Promise<{
    id: string;
  }>;
}

const getProjectData = async (id: string) => {
  const ProjectURL = `${process.env.SUPABASE_DATA_API_ENDPOINT}/personal_projects?Link=eq.${id}&select=*`;
  const res = await fetch(ProjectURL, {
    headers: {
      apikey: process.env.SUPABASE_ANONE_KEY || "",
    },
    // next: { revalidate: 3600 },
  });
  const Response = await res.json();
  const ProjectData = Response[0] as ProjectData;
  // console.log(ProjectData);
  return ProjectData;
};

export default async function Page({ params }: props) {
  const { id } = await params;
  const ProjectData = await getProjectData(id);
  return <DedicatedPageUI ProjectData={ProjectData} />;
}
