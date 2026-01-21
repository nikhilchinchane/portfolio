import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);
  const PAGE_SIZE = 3;

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  console.log(`Searching for "${query}" on page ${page}`);
  // simulate database / Elasticsearch
  const allResults = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Result ${i + 1} for "${query}"`,
  }));

  const paginated = allResults.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return NextResponse.json({
    results: paginated,
    total: allResults.length,
    page,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: "POST method not implemented yet." });
}
