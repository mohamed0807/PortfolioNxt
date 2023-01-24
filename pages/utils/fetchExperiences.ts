import { Experience } from "../../typing";
export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    // `http://localhost:3000/api/getExperience`
  );
  const data = await res.json();
  const experiences: Experience[] = data?.experience;
  console.log("Fetching");
  return experiences;
};
