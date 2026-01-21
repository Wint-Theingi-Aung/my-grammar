import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Home() {
  const { data: lessons, error } = await supabase
    .from('grammar_lessons')
    .select('unit_no, title')
    .order('unit_no', { ascending: true });

  if (error) {
    console.error('Supabase error:', error);
    return <div className="p-10 text-red-500">Error loading lessons. Please check database connection.</div>;
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-600 border-b pb-4">
        English Grammar Lessons
      </h1>
      <div className="grid gap-4">
        {lessons?.map((lesson) => (
          <Link 
            key={lesson.unit_no} 
            href={`/unit/${lesson.unit_no}`}
            className="p-5 border rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all block"
          >
            <span className="font-semibold text-lg text-gray-800">
              Unit {lesson.unit_no} - {lesson.title}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}