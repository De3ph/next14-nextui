import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPost } from "@/app/queries";

type Props = {
  children: React.ReactNode;
  infos: React.ReactNode;
  list: React.ReactNode;
};

const Layout = async (props: Props) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getPost);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full min-h-full flex flex-col space-y-10">
        {props.children}
        <div className="grid grid-cols-2">
          {props.list}
          {props.infos}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
