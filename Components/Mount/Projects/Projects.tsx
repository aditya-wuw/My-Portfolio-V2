import { ProjectCardsType } from "@/types/ProjectTypes";
import ProjectsUI from "./ProjectsUI";

const getProjects = async () => {
  const ProjectURL = `${process.env.SUPABASE_DATA_API_ENDPOINT}/personal_projects?select=orderIndex,title,Link,started,ended,image,Description,AdditionalDescription,tags,links`;
  try {
    const res = await fetch(ProjectURL, {
      headers: {
        apikey: process.env.SUPABASE_ANONE_KEY || "",
      },
    });
    if (!res.ok) {
      const errorMessage = await res.json();
      console.error(`Returned nothing, recived: ${errorMessage}`);
      return [];
    }
    const Response = await res.json();
    const projects = Response as ProjectCardsType[];
    // console.log(projects);
    return projects;
  } catch (e) {
    console.error(`Failed to fetch data, Error: ${e}`);
    return [];
  }
};

export default async function Projects() {
  const Projects = await getProjects();
  return <ProjectsUI Projects={Projects} />;
}
