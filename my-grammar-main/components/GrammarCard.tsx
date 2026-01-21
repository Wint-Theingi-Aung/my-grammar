// components/GrammarCard.tsx
export default function GrammarCard({ lesson }: { lesson: any }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-indigo-100/50 overflow-hidden border border-indigo-50/50 max-w-2xl mx-auto my-8 transition-all hover:shadow-indigo-200/60">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
            Unit {lesson.unit_no}
          </span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">{lesson.title}</h2>
      </div>
      
      <div className="p-8">
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-indigo-500 rounded-full"></div>
          <p className="text-slate-700 leading-relaxed text-xl font-medium pl-4">
            {lesson.content.grammar_content.explanation}
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <h4 className="text-sm font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-100"></span>
            Examples
          </h4>
          
          <div className="grid gap-4">
            {lesson.content.examples.map((ex: any, index: number) => (
              <div key={index} className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all">
                <p className="text-indigo-600 font-bold text-lg mb-1">{ex.en}</p>
                <p className="text-slate-500 font-medium">{ex.mm}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}