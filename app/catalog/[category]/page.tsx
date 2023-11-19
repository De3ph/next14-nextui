import React from "react";

type Props = {
  params: { category: string };
};

const Page = async ({ params }: Props) => {
  return (
    <div>
      <p>Catalog | {params.category} category</p>
    </div>
  );
};

export default Page;
