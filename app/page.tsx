import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default async function Home() {
  // grammar_lessons table ထဲက unit_no နဲ့ title အကုန်လုံးကို ခေါ်ယူခြင်း
  const { data: lessons, error } = await supabase
    .from('grammar_lessons')
    .select('unit_no, title')
    .order('unit_no', { ascending: true });

  if (error) {
    return <div className="p-10 text-red-500">Error loading lessons: {error.message}</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">English Grammar For Fellows</h1>
          <p className="text-gray-600">သင်ခန်းစာများကို ရွေးချယ်လေ့လာပါ</p>
        </header>

        <div className="grid gap-4">
          {lessons?.map((lesson) => (
            <Link 
              key={lesson.unit_no}
              href={`/unit/${lesson.unit_no}`}
              className="block p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Unit {lesson.unit_no}</span>
                  <h2 className="text-xl font-medium text-gray-800 group-hover:text-blue-600">{lesson.title}</h2>
                </div>
                <span className="text-2xl text-gray-300 group-hover:text-blue-500">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}