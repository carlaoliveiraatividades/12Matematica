import React from 'react';
import { MathTopic, SubTopic, AgeLevel } from '../types/math';
import { AgeSelector } from './AgeSelector';
import {
  ChevronRight,
  BookOpen,
  Sliders,
  Layers,
  GraduationCap,
  Sparkles,
  Search,
} from 'lucide-react';

interface HeaderProps {
  currentTopic: MathTopic;
  currentSubtopic: SubTopic;
  currentLevel: AgeLevel;
  activeTab: 'learn' | 'simulator' | 'matrix' | 'curriculum';
  onSelectTab: (tab: 'learn' | 'simulator' | 'matrix' | 'curriculum') => void;
  onSelectLevel: (level: AgeLevel) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTopic,
  currentSubtopic,
  currentLevel,
  activeTab,
  onSelectTab,
  onSelectLevel,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-blue-100/80 shadow-xs">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo & Breadcrumb */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('curriculum')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center text-white font-black text-base shadow-sm shadow-blue-500/25 group-hover:scale-105 transition-transform">
                Δ
              </div>
              <div>
                <span className="font-display font-bold text-slate-900 text-lg tracking-tight block leading-none group-hover:text-blue-600 transition-colors">
                  PRISMA 12
                </span>
                <span className="text-[10px] font-mono uppercase text-blue-600 font-semibold tracking-wider">
                  Matemática 12.º Ano
                </span>
              </div>
            </button>

            {/* Breadcrumbs */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl ml-2">
              <span className="text-slate-400 font-medium">Matemática</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <button
                onClick={() => onSelectTab('curriculum')}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors truncate max-w-[140px] cursor-pointer"
              >
                {currentTopic.title}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-blue-600 font-semibold truncate max-w-[200px] bg-blue-50 px-2 py-0.5 rounded-md">
                {currentSubtopic.title}
              </span>
            </div>
          </div>

          {/* Header Level Selector */}
          <div className="flex items-center gap-3 self-end md:self-center">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-medium block">
                Nível de Explicação
              </span>
            </div>
            <AgeSelector
              currentLevel={currentLevel}
              onSelectLevel={onSelectLevel}
              compact={true}
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectTab('learn')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'learn'
                ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Aprender & Compreender</span>
          </button>

          <button
            onClick={() => onSelectTab('simulator')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-blue-600" />
            <span>Simulador Interativo</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-700 font-semibold">
              Live
            </span>
          </button>

          <button
            onClick={() => onSelectTab('matrix')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Comparar 5 Níveis</span>
          </button>

          <button
            onClick={() => onSelectTab('curriculum')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'curriculum'
                ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Índice do Programa</span>
          </button>
        </div>
      </div>
    </header>
  );
};
