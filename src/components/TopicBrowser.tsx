import React, { useState } from 'react';
import { MathCurriculum, MathTopic, SubTopic } from '../types/math';
import {
  Search,
  BookOpen,
  TrendingUp,
  Activity,
  Compass,
  Shapes,
  Maximize2,
  Sparkles,
  ChevronRight,
  Calculator,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface TopicBrowserProps {
  curriculum: MathCurriculum;
  selectedTopicId: string;
  selectedSubtopicId: string;
  onSelectTopicAndSubtopic: (topicId: string, subtopicId: string) => void;
}

export const TopicBrowser: React.FC<TopicBrowserProps> = ({
  curriculum,
  selectedTopicId,
  selectedSubtopicId,
  onSelectTopicAndSubtopic,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping with soft pastel colors
  const getTopicMeta = (id: string) => {
    switch (id) {
      case 'funcoes':
        return {
          icon: <Activity className="w-5 h-5 text-emerald-600" />,
          badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
          gradient: 'from-emerald-500/10 to-teal-500/5',
        };
      case 'calculo-diferencial':
        return {
          icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
          badgeBg: 'bg-blue-50 border-blue-200 text-blue-800',
          gradient: 'from-blue-500/10 to-indigo-500/5',
        };
      case 'probabilidades':
        return {
          icon: <Calculator className="w-5 h-5 text-rose-600" />,
          badgeBg: 'bg-rose-50 border-rose-200 text-rose-800',
          gradient: 'from-rose-500/10 to-amber-500/5',
        };
      case 'trigonometria':
        return {
          icon: <Compass className="w-5 h-5 text-sky-600" />,
          badgeBg: 'bg-sky-50 border-sky-200 text-sky-800',
          gradient: 'from-sky-500/10 to-blue-500/5',
        };
      case 'complexos':
        return {
          icon: <Maximize2 className="w-5 h-5 text-amber-600" />,
          badgeBg: 'bg-amber-50 border-amber-200 text-amber-800',
          gradient: 'from-amber-500/10 to-orange-500/5',
        };
      case 'geometria':
        return {
          icon: <Shapes className="w-5 h-5 text-teal-600" />,
          badgeBg: 'bg-teal-50 border-teal-200 text-teal-800',
          gradient: 'from-teal-500/10 to-cyan-500/5',
        };
      case 'sucessoes':
        return {
          icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
          badgeBg: 'bg-indigo-50 border-indigo-200 text-indigo-800',
          gradient: 'from-indigo-500/10 to-purple-500/5',
        };
      default:
        return {
          icon: <BookOpen className="w-5 h-5 text-blue-600" />,
          badgeBg: 'bg-blue-50 border-blue-200 text-blue-800',
          gradient: 'from-blue-500/10 to-slate-500/5',
        };
    }
  };

  const filteredTopics: MathTopic[] = curriculum.topics
    .map((topic: MathTopic) => {
      const q = searchQuery.toLowerCase();
      const topicMatches =
        topic.title.toLowerCase().includes(q) ||
        topic.subtitle.toLowerCase().includes(q);
      const matchingSubtopics = topic.subtopics.filter(
        (sub: SubTopic) =>
          sub.title.toLowerCase().includes(q) ||
          sub.shortDescription.toLowerCase().includes(q) ||
          sub.coreIdeaInOneSentence.toLowerCase().includes(q)
      );

      if (topicMatches || matchingSubtopics.length > 0) {
        return {
          ...topic,
          subtopics: topicMatches ? topic.subtopics : matchingSubtopics,
        };
      }
      return null;
    })
    .filter((t): t is MathTopic => t !== null);

  return (
    <div className="space-y-6">
      {/* Search and Hierarchy Guide */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar matéria (ex: derivadas, limites, Neper, probabilidades)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-xs">
          <span className="text-blue-700 font-bold">1. Conteúdo</span>
          <span className="text-slate-300">→</span>
          <span className="text-teal-700 font-bold">2. Nível de Explicação</span>
          <span className="text-slate-300">→</span>
          <span className="text-indigo-700 font-bold">3. Experimentar</span>
        </div>
      </div>

      {/* Grid of Topics & Subtopics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTopics.map((topic) => {
          const isCurrentTopic = topic.id === selectedTopicId;
          const meta = getTopicMeta(topic.id);

          return (
            <div
              key={topic.id}
              className={`rounded-2xl border transition-all p-5 sm:p-6 flex flex-col justify-between ${
                isCurrentTopic
                  ? 'bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-md shadow-blue-500/10'
                  : 'bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Topic Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                      {meta.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                        Tema {topic.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 leading-snug">
                        {topic.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                  {topic.subtitle}
                </p>

                {/* Subtopic list */}
                <div className="space-y-2 border-t border-slate-100 pt-3.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Subconteúdos ({topic.subtopics.length})
                  </span>
                  {topic.subtopics.map((sub: SubTopic) => {
                    const isSelected =
                      isCurrentTopic && sub.id === selectedSubtopicId;

                    return (
                      <button
                        key={sub.id}
                        onClick={() =>
                          onSelectTopicAndSubtopic(topic.id, sub.id)
                        }
                        className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between group cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white font-bold shadow-xs shadow-blue-600/30'
                            : 'bg-slate-50/80 border border-slate-200/70 hover:border-blue-300 text-slate-700 hover:text-slate-900 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              isSelected
                                ? 'bg-white'
                                : 'bg-blue-500 group-hover:scale-125 transition-transform'
                            }`}
                          />
                          <span className="truncate">{sub.title}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 ${
                            isSelected
                              ? 'text-white'
                              : 'text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-all'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
