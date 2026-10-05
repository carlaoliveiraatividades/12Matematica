import React from 'react';
import {
  Lightbulb,
  Sliders,
  BookOpen,
  FileText,
  Edit3,
  Target,
  Trophy,
  FileCheck,
} from 'lucide-react';

export type StepTabId =
  | 'ideia-principal'
  | 'explora'
  | 'aprende'
  | 'exemplo-resolvido'
  | 'tenta-tu'
  | 'pratica'
  | 'desafio'
  | 'exame';

interface StepTabsProps {
  activeStep: StepTabId;
  onSelectStep: (step: StepTabId) => void;
}

export const StepTabs: React.FC<StepTabsProps> = ({
  activeStep,
  onSelectStep,
}) => {
  const steps: { id: StepTabId; label: string; icon: React.ReactNode }[] = [
    {
      id: 'ideia-principal',
      label: '1. Ideia principal',
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      id: 'explora',
      label: '2. Explora (Simulador)',
      icon: <Sliders className="w-4 h-4" />,
    },
    {
      id: 'aprende',
      label: '3. Aprende',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: 'exemplo-resolvido',
      label: '4. Exemplo resolvido',
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: 'tenta-tu',
      label: '5. Tenta tu',
      icon: <Edit3 className="w-4 h-4" />,
    },
    {
      id: 'pratica',
      label: '6. Pratica',
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: 'desafio',
      label: '7. Desafio',
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: 'exame',
      label: '8. Exame',
      icon: <FileCheck className="w-4 h-4" />,
    },
  ];

  return (
    <div className="border-b border-slate-200/90 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-1 sm:gap-4 min-w-max">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              className={`py-3 px-2 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                isActive
                  ? 'border-blue-600 text-blue-600 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              <span className={isActive ? 'text-blue-600' : 'text-slate-400'}>
                {step.icon}
              </span>
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
