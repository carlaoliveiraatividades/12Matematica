import React from 'react';
import { MathTopic, SubTopic } from '../types/math';
import { Lightbulb } from 'lucide-react';

interface ConceptHeroProps {
  topic: MathTopic;
  subtopic: SubTopic;
}

export const ConceptHero: React.FC<ConceptHeroProps> = ({ topic, subtopic }) => {
  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <span>Matemática</span>
        <span className="text-slate-400">&gt;</span>
        <span>{topic.title}</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-900 font-bold">{subtopic.title}</span>
      </nav>

      {/* Hero 2-card layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left concept card */}
        <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-5 flex items-center gap-4 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0">
            <svg
              className="w-9 h-9 text-rose-500"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 34C12 34 16 14 24 14C32 14 36 34 42 34" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
              {subtopic.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              {subtopic.shortDescription ||
                'Percebe como as coisas mudam, aprende a calcular derivadas e descobre onde são utilizadas no mundo real.'}
            </p>
          </div>
        </div>

        {/* Right "Porque é importante?" card */}
        <div className="lg:col-span-4 bg-gradient-to-br from-pink-50/80 to-rose-50/40 border border-pink-100 rounded-2xl p-4 flex items-start gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-pink-100 text-rose-500 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 fill-rose-500/20 text-rose-500" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-rose-600 uppercase tracking-wide">
              Porque é importante?
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug">
              As derivadas ajudam-nos a entender e prever mudanças. São usadas em física, engenharia, economia, tecnologia e muitas outras áreas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
