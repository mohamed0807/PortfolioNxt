import { Skill } from "../../typing";
export const fetchSkill = async () => {
  // const res = await fetch(`http://localhost:3000/api/getSkills`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data?.skills;
  //   const skills: Skill[] = data;
  console.log("Fetching");
  return skills;
};
