
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import SearchClient from "./SearchClient";

export default async function ScalableSearchPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["search", "react", 1],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?q=react&page=1`,
        { cache: "no-store" }
      );
      return res.json();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
         <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">      

             <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                 <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                     <h1 className="max-w-sm text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                         Scalable Search Platform
                     </h1>

                     <h2>Problem</h2>
                     <p>
                         Searching large datasets efficiently is challenging when results need
                         to be fast, relevant, and paginated without overloading the UI.
                     </p>
                     <h2>Solution</h2>
                         <p>
                             Designed a scalable search architecture using a debounced React UI,
                             server-side pagination, and Elasticsearch-style querying.
                         </p>

                         <h2>Architecture</h2>
                         <ul>
                             <li>React + TypeScript frontend</li>
                             <li>Node.js API layer</li>
                             <li>Search layer simulating Elasticsearch</li>
                             <li>Server-side pagination</li>
                         </ul>

                         <h2>Key Engineering Decisions</h2>
                         <ul>
                             <li>Server-side pagination to handle large datasets</li>
                             <li>Debounced search input to reduce API calls</li>
                             <li>Clear loading, empty, and error states</li>
                         </ul>

                         <h2>Outcome</h2>
                         <p>
                             The system is designed to scale with increasing data volume while
                             keeping the UI responsive and maintainable.
                         </p>
                         <h2>Live Demo</h2>
                          <SearchClient initialQuery="react" />

                 </div>
             </main>
         </div>
     
    </HydrationBoundary>
  );
}
