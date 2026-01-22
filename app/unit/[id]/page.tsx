import { supabase } from '@/lib/supabaseClient'; // Path ကို @/ နဲ့ ပြောင်းလိုက်ပါ
import { notFound } from 'next/navigation';

export default async function UnitPage({ params }: { params: { id: string } }) {
  // Database ထဲက unit_no က int4 ဖြစ်တဲ့အတွက် Number ပြောင်းပေးဖို့ လိုပါတယ်
  const unitId = Number(params.id);

  if (isNaN(unitId)) return notFound();

  const { data: lesson, error } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', unitId)
    .single();

  if (error || !lesson) return notFound();

  return (
    <main className="p-8 max-w-2xl mx-auto min-h-screen">
      <div className="mb-4">
        <a href="/" className="text-blue-500 hover:underline">← Back to Menu</a>
      </div>
      <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
      <div className="bg-gray-50 p-6 rounded-lg border shadow-sm">
        <div className="prose max-w-none">
          {/* JSON data ထဲက explanation ကို ထုတ်ပြခြင်း */}
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {lesson.content?.grammar_content?.explanation || "No explanation found."}
          </p>
        </div>
      </div>
    </main>
  );
}