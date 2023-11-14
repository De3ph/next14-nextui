type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const options = {
  queryKey: ["post"],

  queryFn: async () => {
    console.log("Querying post");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        cache: "force-cache",
      },
    );
    const json = (await response.json()) as Post;

    return json;
  },

  placeholderData: (previousData: Post | unknown, previousQuery: unknown) =>
    previousData as Post,

  retry: 3,
};

const getPost = { ...options };

export default getPost;
