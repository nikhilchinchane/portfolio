"use client";

import { useState } from "react";
import { useSearch } from "./useSearch";

export default function SearchClient({
  initialQuery,
}: {
  initialQuery: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useSearch(query, page);

  return (
    <section>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        placeholder="Search documents..."
      />

      {isLoading && <p>Searching...</p>}

      <ul>
        {data?.results.map((r: any) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </section>
  );
}
