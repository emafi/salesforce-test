import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-3xl mx-auto">Welcome!</h1>
      <Link href='/careers' className="underline">See open job postings</Link>
      <Link href='/create-listing' className="underline">Create your own job posting</Link>
      </main>
    </div>
  );
}
