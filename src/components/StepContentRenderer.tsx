import React from 'react';
import { SubTopic, AgeLevel } from '../types/math';
import { StepTabId } from './StepTabs';
import { ConceptExplanationView } from './ConceptExplanationView';

interface StepContentRendererProps {
  step: StepTabId;
  subtopic: SubTopic;
  level: AgeLevel;
}

export const StepContentRenderer: React.FC<StepContentRendererProps> = ({
  step,
  subtopic,
  level,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs animate-in fade-in">
      <ConceptExplanationView subtopic={subtopic} level={level} />
    </div>
  );
};
