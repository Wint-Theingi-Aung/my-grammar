import { supabase } from "@/lib/supabaseClient";
import GrammarCard from "@/components/GrammarCard";
import ExerciseCard from "@/components/ExerciseCard";

interface UnitPageProps {
  params: { id: string };
}

export default async function UnitPage({ params }: UnitPageProps) {
  const { data: lesson, error } = await supabase
    .from("grammar_lessons")
    .select("*")
    .eq("unit_no", params.id)
    .single();

  if (error || !lesson) {
    return (
      <div className="p-10 text-red-500">
        Error loading lesson. Please check database.
      </div>
    );
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <GrammarCard lesson={lesson} />

      {lesson.content?.exercises?.map((ex: any, idx: number) => (
        <ExerciseCard key={idx} exercise={ex} />
      ))}
    </main>
  );
}
