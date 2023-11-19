type Category = {
  id: number;
  title: string;
};

const options = {
  queryKey: ["category"],

  queryFn: async () => {
    console.log("Querying category");

    const response = await fetch("http://localhost:3000/catalog/api", {
      cache: "force-cache",
    });
    const json = await response.json();

    return json;
  },

  placeholderData: (previousData: Category | unknown, previousQuery: unknown) =>
    previousData,

  retry: 3,
};

const getAllCategory = { ...options };

export default getAllCategory;
