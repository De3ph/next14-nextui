import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllCategory } from "@/app/queries";

type Props = {
  children: React.ReactNode;
  individual: React.ReactNode;
  all: React.ReactNode;
};

const Layout = async (props: Props) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getAllCategory);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full min-h-full flex flex-col space-y-10">
        {props.children}
        <div className="grid grid-cols-2">
          {props.all}
          {props.individual}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
