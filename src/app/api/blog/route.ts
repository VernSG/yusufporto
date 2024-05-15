import { NextRequest, NextResponse } from "next/server";
import { getBlog } from "../../../../sanity/action";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  const response = await getBlog({
    query: slug || "",
    tags: "",
    page: "1",
  });

  if (Array.isArray(response) && response.length === 0) {
    return NextResponse.json({ status: 404 });
  }

  const data = await response;
  return NextResponse.json(data, { status: 200 });
}
