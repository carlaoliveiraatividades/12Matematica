import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { ZoomIn, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

interface LimitsSimulatorProps {
  level: AgeLevel;
}

const RIGHT_STEPS = [2.5, 2.1, 2.01, 2.001, 2.0001];
const LEFT_STEPS = [1.5, 1.9, 1.99, 1.999, 1.9999];

export const LimitsSimulator: React.FC<LimitsSimulatorProps> = ({ level }) => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [side, setSide] = useState<'both' | 'left' | 'right'>('both');
  const [functionType, setFunctionType] = useState<'rational' | 'continuous' | 'hole'>('hole');

  // f(x) = (x^2 - 4)/(x - 2) which equals x + 2 for x != 2 (hole at x = 2, limit is 4)
  const evalFunc = (x: number) => {
    switch (functionType) {
      case 'hole':
        if (Math.abs(x - 2) < 0.00001) return null;
        return (Math.pow(x, 2) - 4) / (x - 2);
      case 'rational':
        return 1 / (x - 2);
      case 'continuous':
        return Math.pow(x, 2);
    }
  };

  const xRight = RIGHT_STEPS[stepIndex];
  const xLeft = LEFT_STEPS[stepIndex];
  const yRight = evalFunc(xRight);
  const yLeft = evalFunc(xLeft);

  const targetLimit = functionType === 'hole' ? 4 : functionType === 'continuous' ? 4 : null;

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Função:
          </span>
          <div className="flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs">
            <button
              onClick={() => setFunctionType('hole')}
              className={`px-2.5 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                functionType === 'hole'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Indeterminação 0/0 (Com Buraco)
            </button>
            <button
              onClick={() => setFunctionType('continuous')}
              className={`px-2.5 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                functionType === 'continuous'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contínua x²
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStepIndex(0)}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
            title="Repor"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Approximation Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Approximation */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-teal-700 flex items-center gap-1">
              <ArrowRight className="w-3.5 h-3.5" /> Aproximação pela Esquerda (x → 2⁻)
            </span>
          </div>
          <div className="space-y-1 font-mono text-xs">
            {LEFT_STEPS.slice(0, stepIndex + 1).map((val, idx) => {
              const y = evalFunc(val);
              const isCurrent = idx === stepIndex;
              return (
                <div
                  key={val}
                  className={`flex justify-between p-2 rounded-lg border transition-all ${
                    isCurrent
                      ? 'bg-teal-50 border-teal-300 text-teal-950 font-bold'
                      : 'bg-slate-50 border-slate-100 text-slate-500'
                  }`}
                >
                  <span>x = {val.toFixed(4)}</span>
                  <span>f(x) = {y !== null ? y.toFixed(4) : 'Indefinido'}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Approximation */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Aproximação pela Direita (x → 2⁺)
            </span>
          </div>
          <div className="space-y-1 font-mono text-xs">
            {RIGHT_STEPS.slice(0, stepIndex + 1).map((val, idx) => {
              const y = evalFunc(val);
              const isCurrent = idx === stepIndex;
              return (
                <div
                  key={val}
                  className={`flex justify-between p-2 rounded-lg border transition-all ${
                    isCurrent
                      ? 'bg-blue-50 border-blue-300 text-blue-950 font-bold'
                      : 'bg-slate-50 border-slate-100 text-slate-500'
                  }`}
                >
                  <span>x = {val.toFixed(4)}</span>
                  <span>f(x) = {y !== null ? y.toFixed(4) : 'Indefinido'}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stepper controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="text-xs text-slate-700 font-medium">
          Passo de Zoom {stepIndex + 1} de {RIGHT_STEPS.length}:{' '}
          <span className="font-mono text-blue-700 font-bold">
            x aproxima-se de 2 com erro menor que 10⁻⁴
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
            disabled={stepIndex === 0}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium disabled:opacity-40 cursor-pointer hover:bg-slate-100 shadow-2xs"
          >
            Afastar
          </button>
          <button
            onClick={() =>
              setStepIndex((prev) =>
                Math.min(RIGHT_STEPS.length - 1, prev + 1)
              )
            }
            disabled={stepIndex === RIGHT_STEPS.length - 1}
            className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold disabled:opacity-40 cursor-pointer hover:bg-blue-700 shadow-xs"
          >
            Aproximar Mais (Zoom In)
          </button>
        </div>
      </div>
    </div>
  );
};
