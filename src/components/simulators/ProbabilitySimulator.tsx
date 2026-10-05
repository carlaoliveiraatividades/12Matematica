import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { RotateCcw, Dices } from 'lucide-react';

interface ProbabilitySimulatorProps {
  level: AgeLevel;
}

interface ConvergencePoint {
  n: number;
  freq: number;
}

export const ProbabilitySimulator: React.FC<ProbabilitySimulatorProps> = ({ level }) => {
  const [totalFlips, setTotalFlips] = useState<number>(0);
  const [headsCount, setHeadsCount] = useState<number>(0);
  const [history, setHistory] = useState<ConvergencePoint[]>([]);

  const runFlips = (count: number) => {
    let currentHeads = headsCount;
    let newN = totalFlips;
    const newHistory = [...history];

    const stepSize = Math.max(1, Math.floor(count / 30));

    for (let i = 1; i <= count; i++) {
      newN++;
      if (Math.random() < 0.5) currentHeads++;

      if (i % stepSize === 0 || i === count) {
        newHistory.push({
          n: newN,
          freq: currentHeads / newN,
        });
      }
    }

    setTotalFlips(newN);
    setHeadsCount(currentHeads);
    setHistory(newHistory.slice(-60)); // keep last 60 points for clean plot
  };

  const resetSimulation = () => {
    setTotalFlips(0);
    setHeadsCount(0);
    setHistory([]);
  };

  const currentFreq = totalFlips > 0 ? (headsCount / totalFlips) * 100 : 50;

  // SVG Chart Dimensions
  const width = 640;
  const height = 240;
  const targetY = height / 2; // 50% line

  let pathD = '';
  if (history.length > 1) {
    const minN = history[0].n;
    const maxN = history[history.length - 1].n;

    history.forEach((pt, idx) => {
      const sx = ((pt.n - minN) / Math.max(1, maxN - minN)) * (width - 40) + 20;
      // Map frequency 0.0 to 1.0 -> height to 0
      const sy = height - pt.freq * height;
      if (idx === 0) pathD += `M ${sx} ${sy}`;
      else pathD += ` L ${sx} ${sy}`;
    });
  }

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Lançar Moedas:
          </span>
          <div className="flex gap-1.5">
            {[1, 10, 100, 1000, 5000].map((num) => (
              <button
                key={num}
                onClick={() => runFlips(num)}
                className="px-3 py-1 text-xs rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all cursor-pointer shadow-2xs"
              >
                +{num} {num === 1 ? 'vez' : 'vezes'}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={resetSimulation}
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
          title="Reiniciar"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Canvas for Law of Large Numbers Convergence */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto block select-none">
          {/* Reference theoretical 50% line (Emerald) */}
          <line
            x1={0}
            y1={targetY}
            x2={width}
            y2={targetY}
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="4 4"
          />
          <text x={width - 120} y={targetY - 8} fill="#059669" fontSize={11} fontFamily="monospace" fontWeight="bold">
            Teórico: 50.0%
          </text>

          {/* 0% and 100% boundary lines */}
          <line x1={0} y1={20} x2={width} y2={20} stroke="#f1f5f9" strokeWidth={1} />
          <line x1={0} y1={height - 20} x2={width} y2={height - 20} stroke="#f1f5f9" strokeWidth={1} />

          {/* Convergence Path */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#2563eb"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>

        {/* Counter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 pt-2 border-t border-slate-100 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-mono">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Total de Lançamentos</span>
            <span className="text-base font-bold text-slate-900">{totalFlips.toLocaleString()}</span>
          </div>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center font-mono">
            <span className="text-blue-600 block text-[10px] uppercase font-bold">Caras Obtidas</span>
            <span className="text-base font-bold text-blue-900">{headsCount.toLocaleString()}</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center font-mono">
            <span className="text-emerald-700 block text-[10px] uppercase font-bold">Frequência Relativa</span>
            <span className="text-base font-bold text-emerald-900">{currentFreq.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
