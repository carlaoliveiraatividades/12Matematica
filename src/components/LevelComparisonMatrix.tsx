import React from 'react';
import { SubTopic, AgeLevel } from '../types/math';
import { AGE_LEVELS } from '../data/levelsMeta';
import { ArrowRight, Layers, Lightbulb, Compass, Award } from 'lucide-react';

interface LevelComparisonMatrixProps {
  subtopic: SubTopic;
  onSelectLevel: (level: AgeLevel) => void;
}

export const LevelComparisonMatrix: React.FC<LevelComparisonMatrixProps> = ({
  subtopic,
  onSelectLevel,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-1">
            <Layers className="w-4 h-4 text-blue-600" /> Matriz Comparativa Multinível
          </div>
          <h3 className="text-xl sm:text-2xl font-display text-slate-900 font-bold">
            Como a mesma ideia matemática amadurece dos 6 anos à idade adulta
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
          Clica num cartão para carregar essa experiência
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {AGE_LEVELS.map((lvl) => {
          const exp = subtopic.experiences[lvl.id];
          if (!exp) return null;

          return (
            <div
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-blue-400 hover:bg-white hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl p-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    {lvl.badge.slice(0, 2)}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-bold">
                    {lvl.label}
                  </span>
                </div>

                <div className="text-xs font-bold text-blue-800 italic">
                  {lvl.quote}
                </div>

                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2 leading-snug">
                  {exp.curiosityHook.question}
                </div>

                <p className="text-[11px] text-slate-600 line-clamp-4 leading-relaxed">
                  {exp.intuition.storyOrAnalogy}
                </p>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[10px] text-teal-900 font-semibold shadow-2xs">
                  ✨ {exp.intuition.keyTakeaway}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-blue-600 group-hover:text-blue-800 font-bold">
                <span>Experimentar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
