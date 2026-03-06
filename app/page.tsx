import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-6xl">
          <b className="text-sky-400 text-8xl">JEEL</b> COMPANY LIMITED
        </h1>

        <p className="text-3xl font-medium text-gray-300 mt-4">
          Service at your Convenience
        </p>

        <div className="flex gap-6 mt-10">
          <Link
            href="/about"
            className="px-6 py-3 ring-1 ring-gray-400 rounded-lg text-gray-200 
            hover:ring-sky-400 hover:text-sky-400 transition"
          >
            Learn More
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 bg-sky-500 text-white rounded-lg 
            hover:bg-sky-600 transition shadow-md"
          >
            Contact Us
          </Link>
        </div>

      </main>

    </div>
  );
}