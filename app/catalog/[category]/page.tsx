import React from "react";

type Props = {
  params: { title: string };
};

const Page = async ({ params }: Props) => {
  return (
    <div>
      <p>Catalog | {params.category} category</p>
    </div>
  );
};

export default Page;
