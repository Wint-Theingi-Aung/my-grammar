import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export default async function UnitPage({ params }: { params: { id: string } }) {
  const { data: lesson } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', params.id)
    .single();

  if (!lesson) notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-8">
        <a href="/" className="text-blue-500 mb-4 inline-block">← Back to Menu</a>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
      </header>
      
      <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Grammar Point</h2>
        <p className="whitespace-pre-line text-gray-700 leading-relaxed">
          {lesson.content.grammar_content.explanation}
        </p>
      </section>

      {/* Examples & Exercises ကို အရင် page.tsx ကအတိုင်း ဒီမှာ ထပ်ထည့်ရပါမယ် */}
      {/* (ကုဒ်ရှည်မှာ စိုးလို့ အတိုချုပ်ပြထားတာပါ၊ အရင် page.tsx ထဲက design တွေကို ဒီမှာ ပြန်သုံးနိုင်ပါတယ်) */}
    </div>
  );
}