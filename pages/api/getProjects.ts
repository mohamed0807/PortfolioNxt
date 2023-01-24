import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo, Project } from "../../typing";

// import { sanityClient } from "../../../sanity";
// import { PageInfo, Project } from "../../../typing";

// const query = groq`
// *[_type == 'projects'](
//   ...,technologies[]->
// )
// `;
const query = groq`
*[_type == 'project']{
  ...,technologies[]->
}
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
