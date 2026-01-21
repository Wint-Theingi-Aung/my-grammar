import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function UnitPage({ params }: { params: { id: string } }) {
  // Params id ကို Number အဖြစ်ပြောင်းခြင်း (Database နှင့် ကိုက်ညီရန်)
  const unitId = Number(params.id);

  if (isNaN(unitId)) return notFound();

  const { data: lesson, error } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', unitId)
    .single();

  if (error || !lesson) {
    console.log("Error or Lesson not found:", error);
    return notFound();
  }

  return (
    <main className="p-8 max-w-2xl mx-auto min-h-screen">
      <div className="mb-4">
        <a href="/" className="text-blue-600 hover:underline">← Back to Menu</a>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{lesson.title}</h1>
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="prose max-w-none text-gray-700 leading-relaxed">
           {/* Database schema အလိုက် content ကို ဆွဲထုတ်ခြင်း */}
           <pre className="whitespace-pre-wrap font-sans">
             {lesson.content?.grammar_content?.explanation || "No explanation available."}
           </pre>
        </div>
      </div>
    </main>
  );
}