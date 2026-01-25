import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import GrammarCard from "@/components/GrammarCard"; // ✅ ရှိပြီးသားကို သုံးမယ်
import ExerciseCard from "@/components/ExerciseCard"; // ✅ ရှိပြီးသားကို သုံးမယ်

type Props = { params: Promise<{ id: string }> };

export default async function UnitPage({ params }: Props) {
  const { id } = await params; // ✅ Next.js 15 Promise logic
  const unitNo = Number(id);

  if (isNaN(unitNo)) notFound();

  const { data: lesson, error } = await supabase
    .from("grammar_lessons")
    .select("*")
    .eq("unit_no", unitNo)
    .single();

  if (error || !lesson) notFound();

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      {/* ၁။ Grammar သင်ခန်းစာအပိုင်း */}
      <GrammarCard lesson={lesson} />

      {/* ၂။ လေ့ကျင့်ခန်းအပိုင်း (မေးခွန်းတစ်ခုချင်းစီအတွက် Card တစ်ခုစီ ထုတ်ပေးမည်) */}
      <div className="space-y-4">
        {lesson.content.exercises.map((ex: any) => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <a href="/" className="inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">
          ← Back to Menu
        </a>
      </div>
    </main>
  );
}