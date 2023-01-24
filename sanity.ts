import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_DATASET || "production",
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  projectId: "391ox5ih",
  apiVersion: "2021-10-21",
  //   apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
    // useCdn: true,
};

export const sanityClient = createClient(config);
export const urlFor = (source: any) => {
  return imageUrlBuilder(config).image(source);
};
