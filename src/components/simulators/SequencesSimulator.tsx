import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { RotateCcw } from 'lucide-react';

interface SequencesSimulatorProps {
  level: AgeLevel;
}

export const SequencesSimulator: React.FC<SequencesSimulatorProps> = ({ level }) => {
  const [maxN, setMaxN] = useState<number>(25);
  const [seqType, setSeqType] = useState<'neper' | 'geometric' | 'oscillating'>('neper');

  // Compute terms u_n
  const computeTerm = (n: number) => {
    switch (seqType) {
      case 'neper':
        return Math.pow(1 + 1 / n, n);
      case 'geometric':
        return 3 * Math.pow(0.8, n);
      case 'oscillating':
        return 2 + (Math.pow(-1, n) * 1.5) / n;
    }
  };

  const terms: { n: number; val: number }[] = [];
  for (let n = 1; n <= maxN; n++) {
    terms.push({ n, val: computeTerm(n) });
  }

  const lastTerm = terms[terms.length - 1];

  // Plot dimensions
  const width = 640;
  const height = 260;
  const minY = seqType === 'neper' ? 1.8 : seqType === 'geometric' ? 0 : 0.5;
  const maxY = seqType === 'neper' ? 3.0 : seqType === 'geometric' ? 3.2 : 3.5;

  const toSvgX = (n: number) => ((n - 1) / Math.max(1, maxN - 1)) * (width - 60) + 30;
  const toSvgY = (y: number) => height - ((y - minY) / (maxY - minY)) * (height - 40) - 20;

  const eLimitY = toSvgY(2.71828);

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Sucessão:
          </span>
          <div className="flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs">
            <button
              onClick={() => setSeqType('neper')}
              className={`px-3 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                seqType === 'neper'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Limite Notável de Neper (1 + 1/n)ⁿ
            </button>
            <button
              onClick={() => setSeqType('geometric')}
              className={`px-3 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                seqType === 'geometric'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Geométrica 3·(0.8)ⁿ
            </button>
          </div>
        </div>

        <button
          onClick={() => setMaxN(25)}
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
          title="Repor"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto block select-none">
          {/* Neper Asymptote line */}
          {seqType === 'neper' && (
            <>
              <line
                x1={0}
                y1={eLimitY}
                x2={width}
                y2={eLimitY}
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="4 4"
              />
              <text x={width - 140} y={eLimitY - 6} fill="#059669" fontSize={11} fontFamily="monospace" fontWeight="bold">
                Limite e ≈ 2.71828
              </text>
            </>
          )}

          {/* Grid lines */}
          <line x1={30} y1={height - 20} x2={width - 30} y2={height - 20} stroke="#cbd5e1" strokeWidth={1.5} />
          <line x1={30} y1={20} x2={30} y2={height - 20} stroke="#cbd5e1" strokeWidth={1.5} />

          {/* Discrete points of sequence */}
          {terms.map((pt) => {
            const sx = toSvgX(pt.n);
            const sy = toSvgY(pt.val);
            return (
              <g key={pt.n}>
                <line x1={sx} y1={height - 20} x2={sx} y2={sy} stroke="#e2e8f0" strokeWidth={1} strokeDasharray="2 2" />
                <circle cx={sx} cy={sy} r={4.5} fill="#2563eb" stroke="#ffffff" strokeWidth={1.5} />
              </g>
            );
          })}
        </svg>

        {/* Floating values bar */}
        <div className="grid grid-cols-2 gap-3 mt-2 pt-2 border-t border-slate-100 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Termo Atual u_{maxN}</span>
            <span className="text-base font-bold text-slate-900">{lastTerm.val.toFixed(5)}</span>
          </div>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center">
            <span className="text-blue-600 block text-[10px] uppercase font-bold">Comportamento</span>
            <span className="text-base font-bold text-blue-900">
              {seqType === 'neper' ? 'Monótona Crescente & Limitada' : 'Convergente para 0'}
            </span>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="flex justify-between text-xs text-slate-700 font-medium mb-1.5">
          <span>Número de Termos Calculados (n):</span>
          <span className="font-mono text-blue-700 font-bold">n = 1 até {maxN}</span>
        </div>
        <input
          type="range"
          min={5}
          max={100}
          step={1}
          value={maxN}
          onChange={(e) => setMaxN(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};
