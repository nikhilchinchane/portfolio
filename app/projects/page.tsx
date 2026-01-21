
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-sm text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Projects
          </h1>
          <section style={{ marginTop: "24px" }}>
        <h2>Scalable Search Platform</h2>
        <p>
          Enterprise-style search system focusing on performance, pagination,
          and scalable UI architecture.
        </p>
        <Link href="/projects/scalable-search">
          View Case Study →
        </Link>
      </section>
        </div>
       
      </main>
    </div>
  );
}
