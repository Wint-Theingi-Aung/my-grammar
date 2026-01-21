import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Home() {
  const { data: lessons, error } = await supabase
    .from('grammar_lessons')
    .select('unit_no, title')
    .order('unit_no', { ascending: true });

  if (error) return <div className="p-10">Error loading lessons.</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">English Grammar Lessons</h1>
      <div className="grid gap-4">
        {lessons?.map((lesson) => (
          <Link 
            key={lesson.unit_no} 
            href={`/unit/${lesson.unit_no}`}
            className="p-4 border rounded shadow hover:bg-gray-50 block"
          >
            Unit {lesson.unit_no} - {lesson.title}
          </Link>
        ))}
      </div>
    </main>
  );
}