// "use client";

// import { useEffect, useState } from "react";

// type SearchResult = {
//   id: number;
//   title: string;
// };

// export function useSearch() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }

//     setLoading(true);

//     const handler = setTimeout(async () => {
//       const res = await fetch(
//         `/api/search?q=${query}&page=${page}`
//       );
//       const data = await res.json();
//       setResults(data.results);
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(handler);
//   }, [query, page]);

//   useEffect(() => {
//     setPage(1);
//   }, [query]);



//   return {
//     query,
//     setQuery,
//     results,
//     loading,
//     page,
//     setPage,
//   };
// }

"use client";

import { useQuery } from "@tanstack/react-query";

type SearchResult = {
  id: number;
  title: string;
};

export function useSearch(query: string, page: number) {
  return useQuery({
    queryKey: ["search", query, page],
    queryFn: async () => {
      const res = await fetch(`/api/search?q=${query}&page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    enabled: !!query.trim(),
    keepPreviousData: true,
     staleTime: 60 * 1000, // 1 minute
  });
}

