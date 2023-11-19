"use client";

/* 

  Client Side Data Fetching with React Query


*/

import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "@/app/queries";
import { Category } from "@/types";

const Page = ({ params: { category } }: { params: { category: string } }) => {
  const {
    data: { data },
  } = useQuery(getAllCategory);
  console.log("🚀 ~ file: page.tsx:16 ~ Page ~ data:", data);

  return (
    <div>
      <h1 className="mb-3 font-bold text-xl">All Categories</h1>
      <ul>
        {data?.map((category: Category) => {
          return <li key={category.id}>{category.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
