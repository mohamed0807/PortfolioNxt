import { PageInfo } from "../../typing";
export const fetchPageInfo = async () => {
  // const res = await fetch(`http://localhost:3000/api/getPageInfo`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data?.pageInfo;
  //   const pageInfo: PageInfo = data;
  // console.log("FetchingHe");
  return pageInfo;
};
