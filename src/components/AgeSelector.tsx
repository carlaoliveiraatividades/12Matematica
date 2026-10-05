import React from 'react';
import { AgeLevel } from '../types/math';
import { AGE_LEVELS } from '../data/levelsMeta';
import { Sparkles, HelpCircle } from 'lucide-react';

interface AgeSelectorProps {
  currentLevel: AgeLevel;
  onSelectLevel: (level: AgeLevel) => void;
  compact?: boolean;
}

export const AgeSelector: React.FC<AgeSelectorProps> = ({
  currentLevel,
  onSelectLevel,
  compact = false,
}) => {
  const getIcon = (id: AgeLevel) => {
    switch (id) {
      case '6':
        return '🧒';
      case '10':
        return '👦';
      case '14':
        return '🧑';
      case '18':
        return '🎓';
      case 'adulto':
        return '💼';
    }
  };

  const getLevelColorTag = (id: AgeLevel, isActive: boolean) => {
    switch (id) {
      case '6':
        return isActive
          ? 'bg-amber-100 text-amber-800 border-amber-300'
          : 'bg-amber-50/80 text-amber-700';
      case '10':
        return isActive
          ? 'bg-teal-100 text-teal-800 border-teal-300'
          : 'bg-teal-50/80 text-teal-700';
      case '14':
        return isActive
          ? 'bg-sky-100 text-sky-800 border-sky-300'
          : 'bg-sky-50/80 text-sky-700';
      case '18':
        return isActive
          ? 'bg-blue-100 text-blue-800 border-blue-300'
          : 'bg-blue-50/80 text-blue-700';
      case 'adulto':
        return isActive
          ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
          : 'bg-indigo-50/80 text-indigo-700';
    }
  };

  if (compact) {
    return (
      <div className="inline-flex bg-slate-100/90 p-1 rounded-xl border border-slate-200 shadow-xs">
        {AGE_LEVELS.map((lvl) => {
          const isActive = currentLevel === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-white text-blue-700 font-semibold shadow-xs border border-blue-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
              title={lvl.quote}
            >
              <span>{getIcon(lvl.id)}</span>
              <span>{lvl.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 bg-blue-100/80 border border-blue-200 px-2.5 py-0.5 rounded-md font-bold">
            Passo 2 de 3
          </span>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            Como queres que este conceito te seja explicado?
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Muda a qualquer instante — os exemplos e simuladores adaptam-se em direto
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {AGE_LEVELS.map((lvl) => {
          const isActive = currentLevel === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer group ${
                isActive
                  ? 'bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-md shadow-blue-500/10'
                  : 'bg-white/80 border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-sm text-slate-600'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
              )}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl p-1 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {getIcon(lvl.id)}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border font-semibold ${getLevelColorTag(
                      lvl.id,
                      isActive
                    )}`}
                  >
                    {lvl.label}
                  </span>
                </div>
                <div
                  className={`text-xs font-semibold italic line-clamp-2 mb-2 leading-snug ${
                    isActive ? 'text-blue-900' : 'text-slate-800'
                  }`}
                >
                  {lvl.quote}
                </div>
              </div>
              <div
                className={`text-[11px] leading-relaxed mt-1 ${
                  isActive ? 'text-slate-600 font-medium' : 'text-slate-500'
                }`}
              >
                {lvl.subtitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
