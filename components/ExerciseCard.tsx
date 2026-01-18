// components/ExerciseCard.tsx
"use client"
import { useState } from 'react';

export default function ExerciseCard({ exercise }: { exercise: any }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 border border-slate-100 max-w-2xl mx-auto my-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800">{exercise.question}</h3>
        <span className="text-slate-300 font-black text-4xl opacity-20">?</span>
      </div>

      <div className="grid gap-4">
        {exercise.options.map((option: string) => {
          const isSelected = selected === option;
          const isCorrect = option === exercise.answer;
          
          let buttonClass = "w-full p-5 rounded-2xl text-left font-bold text-lg border-b-4 transition-all ";
          
          if (!selected) {
            buttonClass += "bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50/30";
          } else if (isSelected) {
            buttonClass += isCorrect ? "bg-green-50 border-green-500 text-green-700" : "bg-red-50 border-red-500 text-red-700";
          } else {
            buttonClass += isCorrect ? "bg-green-50/30 border-green-200 text-green-600/50" : "bg-white border-slate-100 text-slate-300";
          }

          return (
            <button
              key={option}
              disabled={!!selected}
              onClick={() => setSelected(option)}
              className={buttonClass}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {selected && isCorrect && <span className="text-green-500">✔</span>}
                {isSelected && !isCorrect && <span className="text-red-500">✖</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}