import React from 'react';
import { MathCurriculum, MathTopic, SubTopic } from '../types/math';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TopicsListSidebarProps {
  curriculum: MathCurriculum;
  selectedTopicId: string;
  selectedSubtopicId: string;
  onSelectTopicAndSubtopic: (topicId: string, subtopicId: string) => void;
}

export const TopicsListSidebar: React.FC<TopicsListSidebarProps> = ({
  curriculum,
  selectedTopicId,
  selectedSubtopicId,
  onSelectTopicAndSubtopic,
}) => {
  // Topic color configuration matching the image
  const getTopicStyle = (id: string, isSelected: boolean) => {
    switch (id) {
      case 'probabilidades':
        return {
          iconBg: 'bg-purple-100 text-purple-600',
          activeHeaderBg: 'bg-purple-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: (
            <div className="flex items-end justify-center gap-0.5 w-4 h-4">
              <span className="w-1 h-2 bg-current rounded-xs" />
              <span className="w-1 h-3.5 bg-current rounded-xs" />
              <span className="w-1 h-2.5 bg-current rounded-xs" />
            </div>
          ),
        };
      case 'funcoes':
        return {
          iconBg: 'bg-blue-100 text-blue-600',
          activeHeaderBg: 'bg-blue-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 17c3.5 0 5.5-10 9-10s5.5 10 9 10" />
            </svg>
          ),
        };
      case 'calculo-diferencial':
        return {
          iconBg: 'bg-emerald-100 text-emerald-600',
          activeHeaderBg: 'bg-emerald-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: <span className="font-serif italic font-bold text-sm leading-none">∫</span>,
        };
      case 'trigonometria':
        return {
          iconBg: 'bg-orange-100 text-orange-600',
          activeHeaderBg: 'bg-orange-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 12c2.5-4 5.5-4 8 0s5.5 4 8 0 4-4 4-4" />
            </svg>
          ),
        };
      case 'complexos':
        return {
          iconBg: 'bg-rose-100 text-rose-600',
          activeHeaderBg: 'bg-rose-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: <span className="font-mono font-bold text-xs">z²</span>,
        };
      case 'geometria':
        return {
          iconBg: 'bg-amber-100 text-amber-600',
          activeHeaderBg: 'bg-amber-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
        };
      case 'sucessoes':
        return {
          iconBg: 'bg-cyan-100 text-cyan-600',
          activeHeaderBg: 'bg-cyan-600 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: (
            <div className="flex gap-1 items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </div>
          ),
        };
      default:
        return {
          iconBg: 'bg-slate-100 text-slate-600',
          activeHeaderBg: 'bg-slate-700 text-white',
          inactiveBg: 'bg-[#f1f3f9] hover:bg-[#e7eaf3] text-slate-700',
          icon: <span>•</span>,
        };
    }
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200/80 p-4 shrink-0 flex flex-col gap-3 min-h-screen">
      <h2 className="text-sm font-bold text-slate-900 px-1 tracking-tight">
        Conteúdos do 12.º ano
      </h2>

      <div className="space-y-2.5 overflow-y-auto">
        {curriculum.topics.map((topic) => {
          const isCurrentTopic = topic.id === selectedTopicId;
          const style = getTopicStyle(topic.id, isCurrentTopic);

          return (
            <div key={topic.id} className="space-y-1.5">
              {/* Topic Header Button */}
              <button
                onClick={() => {
                  const defaultSub = topic.subtopics[0];
                  if (defaultSub) {
                    onSelectTopicAndSubtopic(topic.id, defaultSub.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrentTopic
                    ? `${style.activeHeaderBg} shadow-sm`
                    : style.inactiveBg
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isCurrentTopic ? 'bg-white/20 text-white' : style.iconBg
                    }`}
                  >
                    {style.icon}
                  </div>
                  <span className="text-left font-semibold">{topic.title}</span>
                </div>
                {isCurrentTopic ? (
                  <ChevronUp className="w-4 h-4 text-white/90" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {/* Subtopic list when expanded */}
              {isCurrentTopic && (
                <div className="pl-3 pr-1 py-1 space-y-1 animate-in fade-in">
                  {topic.subtopics.map((sub: SubTopic) => {
                    const isSelected = sub.id === selectedSubtopicId;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTopicAndSubtopic(topic.id, sub.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/80 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isSelected ? 'bg-blue-600' : 'bg-slate-400'
                          }`}
                        />
                        <span className="truncate">{sub.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
