import { ProjectCardsType } from "@/types/ProjectTypes";
import ProjectsUI from "./ProjectsUI";

const getProjects = async () => {
  const ProjectURL = `${process.env.SUPABASE_DATA_API_ENDPOINT}/personal_projects?select=id,title,Link,started,ended,image,Description,AdditionalDescription,tags,links`;
  const res = await fetch(ProjectURL, {
    headers: {
      apikey: process.env.SUPABASE_ANONE_KEY || "",
    },
    // next: { revalidate: 3600 }, //cache for 1hr
  });
  const Response = await res.json();
  const projects = Response as ProjectCardsType[];
  // console.log(projects);
  return projects;
};

export default async function Projects() {
  const Projects = await getProjects();
  return <ProjectsUI Projects={Projects} />;
}
