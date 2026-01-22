import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function UnitPage({ params }: { params: { id: string } }) {
  const unitId = Number(params.id);
  if (isNaN(unitId)) return notFound();

  const { data: lesson, error } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', unitId)
    .single();

  if (error || !lesson) return notFound();

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
      <div className="prose">
         <pre className="whitespace-pre-wrap font-sans text-gray-800">
           {lesson.content?.grammar_content?.explanation || "No content found."}
         </pre>
      </div>
    </main>
  );
}
