"use client";

import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/app/queries";

type Props = {};

const Page = (props: Props) => {
  const { data } = useQuery(getPost);
  return <div>{data?.title}</div>;
};

export default Page;
