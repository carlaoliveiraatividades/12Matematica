import React from 'react';
import { AgeLevel } from '../types/math';
import { Zap, Sparkles } from 'lucide-react';

interface AgeLearningSelectorProps {
  currentLevel: AgeLevel;
  onSelectLevel: (level: AgeLevel) => void;
}

export const AgeLearningSelector: React.FC<AgeLearningSelectorProps> = ({
  currentLevel,
  onSelectLevel,
}) => {
  const levels = [
    {
      id: '6' as AgeLevel,
      title: '6 anos',
      description: 'Começa pela ideia mais simples possível.',
      badgeText: 'Intuição fundamental',
      avatar: (
        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center relative overflow-hidden shrink-0 border border-pink-200">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#ffd4bc" />
            <path d="M10 18C10 11 14 8 20 8C26 8 30 11 30 18C30 20 28 23 28 23L12 23C12 23 10 20 10 18Z" fill="#ff7f9d" />
            <circle cx="8" cy="19" r="4.5" fill="#ff7f9d" />
            <circle cx="32" cy="19" r="4.5" fill="#ff7f9d" />
            <circle cx="16" cy="19" r="1.5" fill="#4a2820" />
            <circle cx="24" cy="19" r="1.5" fill="#4a2820" />
            <path d="M17 23C18.5 25 21.5 25 23 23" stroke="#4a2820" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 36C12 30 15 28 20 28C25 28 28 30 28 36" fill="#ff5c8a" />
          </svg>
        </div>
      ),
    },
    {
      id: '10' as AgeLevel,
      title: '10 anos',
      description: 'Explica com exemplos e situações concretas.',
      badgeText: 'Padrões & Ritmos',
      avatar: (
        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center relative overflow-hidden shrink-0 border border-sky-200">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#ffd4bc" />
            <path d="M11 17C11 11 15 8 20 8C25 8 29 11 29 17C29 18 28 20 28 20L12 20C12 20 11 18 11 17Z" fill="#6d3c24" />
            <circle cx="16" cy="19" r="1.5" fill="#2d170f" />
            <circle cx="24" cy="19" r="1.5" fill="#2d170f" />
            <path d="M17 23C18.5 25 21.5 25 23 23" stroke="#2d170f" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 36C12 30 15 28 20 28C25 28 28 30 28 36" fill="#38bdf8" />
          </svg>
        </div>
      ),
    },
    {
      id: '14' as AgeLevel,
      title: '14 anos',
      description: 'Explica com mais matemática, mas sem complicar.',
      badgeText: 'Ponte Algébrica',
      avatar: (
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center relative overflow-hidden shrink-0 border border-amber-200">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#ffd4bc" />
            <path d="M12 16C12 10 16 7 20 7C24 7 28 10 28 16C28 17 27 19 27 19L13 19C13 19 12 17 12 16Z" fill="#8c5836" />
            <circle cx="16" cy="19" r="1.5" fill="#382315" />
            <circle cx="24" cy="19" r="1.5" fill="#382315" />
            <path d="M17 24C18.5 25.5 21.5 25.5 23 24" stroke="#382315" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 36C12 30 15 28 20 28C25 28 28 30 28 36" fill="#2563eb" />
          </svg>
        </div>
      ),
    },
    {
      id: '18' as AgeLevel,
      title: '18 anos',
      description: 'Explica ao nível do 12.º ano e prepara o exame.',
      badgeText: 'Rigor de Exame IAVE',
      avatar: (
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center relative overflow-hidden shrink-0 border border-blue-200">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#ffd4bc" />
            <circle cx="16" cy="20" r="1.5" fill="#1e293b" />
            <circle cx="24" cy="20" r="1.5" fill="#1e293b" />
            <path d="M17 24.5C18.5 26 21.5 26 23 24.5" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 36C12 30 15 29 20 29C25 29 28 30 28 36" fill="#1e293b" />
            <polygon points="20,29 21.5,33 20,36 18.5,33" fill="#f59e0b" />
            <polygon points="20,5 33,11 20,17 7,11" fill="#0f172a" />
            <path d="M12 13V18C12 18 15 21 20 21C25 21 28 18 28 18V13" fill="#0f172a" />
            <line x1="30" y1="12" x2="33" y2="18" stroke="#f59e0b" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 'adulto' as AgeLevel,
      title: 'Adulto',
      description: 'Explica primeiro porque isto existe e para que serve.',
      badgeText: 'Mundo Real & IA',
      avatar: (
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center relative overflow-hidden shrink-0 border border-slate-200">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#ffd4bc" />
            <path d="M11 16C11 10 15 7 20 7C25 7 29 10 29 16C29 17 28 18 28 18L12 18C12 18 11 17 11 16Z" fill="#33241b" />
            <path d="M14 21C14 26 17 28 20 28C23 28 26 26 26 21C26 23 25 26 23 27C21 28 19 28 17 27C15 26 14 23 14 21Z" fill="#33241b" />
            <circle cx="16" cy="19" r="1.5" fill="#1e293b" />
            <circle cx="24" cy="19" r="1.5" fill="#1e293b" />
            <path d="M18 24C19 24.5 21 24.5 22 24" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 36C12 30 15 29 20 29C25 29 28 30 28 36" fill="#0284c7" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
        <div>
          <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Como queres aprender?</span>
            <span className="text-[10px] font-mono uppercase bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-semibold">
              Modos de Explicação (Zoom de Compreensão)
            </span>
          </h2>
          <p className="text-[11px] text-slate-500">
            Não são etapas obrigatórias. Escolhe diretamente o nível que preferes (podes ir direto a 18 anos ou descer para desbloquear conceitos).
          </p>
        </div>

        {/* Level Quick Zoom Indicator */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-100/80 px-3 py-1 rounded-lg border border-slate-200">
          <span className="text-slate-500 font-sans text-[10px] uppercase font-bold mr-1">Zoom:</span>
          <button
            onClick={() => onSelectLevel('6')}
            className={`hover:text-pink-600 transition-colors cursor-pointer ${currentLevel === '6' ? 'text-pink-600 font-bold' : ''}`}
          >
            6a
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectLevel('10')}
            className={`hover:text-sky-600 transition-colors cursor-pointer ${currentLevel === '10' ? 'text-sky-600 font-bold' : ''}`}
          >
            10a
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectLevel('14')}
            className={`hover:text-amber-600 transition-colors cursor-pointer ${currentLevel === '14' ? 'text-amber-600 font-bold' : ''}`}
          >
            14a
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectLevel('18')}
            className={`hover:text-blue-600 transition-colors cursor-pointer ${currentLevel === '18' ? 'text-blue-600 font-bold' : ''}`}
          >
            18a (Exame)
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectLevel('adulto')}
            className={`hover:text-slate-800 transition-colors cursor-pointer ${currentLevel === 'adulto' ? 'text-slate-900 font-bold' : ''}`}
          >
            Adulto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {levels.map((lvl) => {
          const isActive = currentLevel === lvl.id;

          return (
            <button
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer relative overflow-hidden ${
                isActive
                  ? 'bg-blue-50/70 border-blue-600 ring-1 ring-blue-600 shadow-sm'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/60 shadow-2xs'
              }`}
            >
              {lvl.avatar}
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xs font-bold leading-tight ${
                      isActive ? 'text-blue-700' : 'text-slate-900'
                    }`}
                  >
                    {lvl.title}
                  </h3>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  )}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {lvl.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
