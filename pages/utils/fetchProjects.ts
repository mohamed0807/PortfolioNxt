import { Project } from "../../typing";
export const fetchProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  // const res = await fetch(`http://localhost:3000/api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data?.projects;
  // const projects:Project[]=data;
  console.log("Fetching");
  return projects;
};
