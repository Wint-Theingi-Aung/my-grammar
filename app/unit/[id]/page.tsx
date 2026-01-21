import { supabase } from '../../lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function UnitPage({ params }: { params: { id: string } }) {
  const { data: lesson } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', params.id)
    .single();

  if (!lesson) notFound();

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <a href="/" className="text-blue-500">← Back to Menu</a>
      <h1 className="text-3xl font-bold mt-6 mb-4">{lesson.title}</h1>
      <div className="prose">
        <p className="text-gray-700 whitespace-pre-wrap">{lesson.content.grammar_content.explanation}</p>
      </div>
    </main>
  );
}