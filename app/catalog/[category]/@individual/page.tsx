import { Category } from "@/types";
import React from "react";

async function getCategory(category: string) {
  const res = await fetch(
    `http://localhost:3000/catalog/api/?category=${category}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const data = await getCategory(category);

  return (
    <div>
      <h1 className="mb-3 font-bold text-xl">Current Category</h1>
      <ul>
        {data?.map((category: Category) => {
          return (
            <li key={category.id}>
              {category.id} | {category.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
