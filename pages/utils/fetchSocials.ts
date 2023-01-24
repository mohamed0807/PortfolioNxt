import { Social } from "../../typing";
export const fetchSocial = async () => {
  // const res = await fetch(`http://localhost:3000/api/getSocials`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data?.socials;
  //   const socials: Social[] = data;
  console.log("Fetching");
  return socials;
};
