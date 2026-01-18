import { supabase } from '@/lib/supabaseClient';
import GrammarCard from '@/components/GrammarCard';
import ExerciseCard from '@/components/ExerciseCard';

async function getLesson() {
  // Supabase ကနေ Unit 1 data ကို ယူမယ်
  const { data, error } = await supabase
    .from('grammar_lessons')
    .select('*')
    .eq('unit_no', 1)
    .single();
  
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  return data;
}

export default async function Home() {
  const lesson = await getLesson();

  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-500">
          ဒေတာ ရှာမတွေ့ပါ သို့မဟုတ် Key များ မှားနေပါသည်...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 p-6 sm:p-12">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">
            My Grammar App
          </h1>
          <p className="text-zinc-500 mt-2">English Grammar For Fellows</p>
        </header>

        {/* Grammar Card */}
        <GrammarCard lesson={lesson} />

        {/* Exercises Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zinc-800 mb-8 flex items-center gap-3">
            <span className="bg-zinc-800 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">Q</span>
            Practice Exercises
          </h3>
          <div className="space-y-6">
            {lesson.content.exercises.map((ex: any) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}