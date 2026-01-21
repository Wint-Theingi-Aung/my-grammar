import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function UnitPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data: lesson, error } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', id)
    .single();

  if (error || !lesson) {
    return notFound();
  }

  return (
    <main className="p-8 max-w-2xl mx-auto bg-white min-h-screen">
      <a href="/" className="text-blue-500 hover:underline">← Back to Lessons</a>
      <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900">{lesson.title}</h1>
      <div className="prose prose-blue max-w-none">
        {/* Content ထဲက data ကို display လုပ်ခြင်း */}
        <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
          {JSON.stringify(lesson.content, null, 2)}
        </pre>
      </div>
    </main>
  );
}