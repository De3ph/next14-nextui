import { NextRequest, NextResponse } from "next/server";

const dummyData = [
  { id: 1, title: "funny" },
  { id: 2, title: "techs" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  //filtered by category
  // GET -> http://localhost:3000/catalog/api?category=funny

  if (searchParams.size > 0 && searchParams.has("category")) {
    const category = searchParams.get("category");
    const filteredData = dummyData.filter((data) => data.title === category);
    const res = NextResponse.json(filteredData);
    return res;
  }

  const res = NextResponse.json(dummyData);

  return res;
}
