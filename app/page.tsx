import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default async function Home() {
  const { data: lessons, error } = await supabase
    .from("grammar_lessons")
    .select("unit_no, title")
    .order("unit_no", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
    return <div className="p-10 text-red-500">Error loading lessons.</div>;
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-indigo-600 border-b pb-4">
        English Grammar Lessons
      </h1>

      <div className="space-y-6">
        {lessons?.map((lesson) => (
          <Link
            key={lesson.unit_no}
            href={`/unit/${lesson.unit_no}`}
            className="block rounded-[2rem] overflow-hidden shadow-xl border border-indigo-50 hover:shadow-2xl transition-all bg-white"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-widest text-xs font-black">
                Unit {lesson.unit_no}
              </span>
              <h2 className="text-2xl font-extrabold mt-2">{lesson.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
