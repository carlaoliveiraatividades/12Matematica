import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { RotateCcw } from 'lucide-react';

interface FunctionsSimulatorProps {
  level: AgeLevel;
}

export const FunctionsSimulator: React.FC<FunctionsSimulatorProps> = ({ level }) => {
  const [funcFamily, setFuncFamily] = useState<'exp' | 'log'>('exp');
  const [base, setBase] = useState<number>(2.718); // e ≈ 2.718
  const [aParam, setAParam] = useState<number>(1.0);
  const [hParam, setHParam] = useState<number>(0.0);
  const [kParam, setKParam] = useState<number>(0.0);

  // Math definition: f(x) = a * base^(x - h) + k  or  a * log_base(x - h) + k
  const f = (x: number) => {
    if (funcFamily === 'exp') {
      return aParam * Math.pow(base, x - hParam) + kParam;
    } else {
      const inner = x - hParam;
      if (inner <= 0.001) return null;
      return aParam * (Math.log(inner) / Math.log(base)) + kParam;
    }
  };

  const width = 640;
  const height = 320;
  const minX = -4;
  const maxX = 6;
  const minY = -3;
  const maxY = 6;

  const toSvgX = (x: number) => ((x - minX) / (maxX - minX)) * width;
  const toSvgY = (y: number) => height - ((y - minY) / (maxY - minY)) * height;

  const pointsCount = 150;
  let pathD = '';
  let isDrawing = false;

  for (let i = 0; i <= pointsCount; i++) {
    const x = minX + (i / pointsCount) * (maxX - minX);
    const y = f(x);
    if (y !== null && !isNaN(y) && isFinite(y) && y >= minY - 2 && y <= maxY + 2) {
      const sx = toSvgX(x);
      const sy = toSvgY(y);
      if (!isDrawing) {
        pathD += `M ${sx} ${sy}`;
        isDrawing = true;
      } else {
        pathD += ` L ${sx} ${sy}`;
      }
    } else {
      isDrawing = false;
    }
  }

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Família:
          </span>
          <div className="flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs">
            <button
              onClick={() => {
                setFuncFamily('exp');
                setBase(2.718);
              }}
              className={`px-3 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                funcFamily === 'exp'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exponencial a·b^(x-h) + k
            </button>
            <button
              onClick={() => {
                setFuncFamily('log');
                setBase(2.718);
              }}
              className={`px-3 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                funcFamily === 'log'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Logarítmica a·log_b(x-h) + k
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            setBase(2.718);
            setAParam(1.0);
            setHParam(0.0);
            setKParam(0.0);
          }}
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
          title="Repor"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto block select-none"
        >
          {/* Grid lines */}
          {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((gx) => (
            <line
              key={`gx-${gx}`}
              x1={toSvgX(gx)}
              y1={0}
              x2={toSvgX(gx)}
              y2={height}
              stroke="#f1f5f9"
              strokeWidth={1}
            />
          ))}
          {[-2, -1, 0, 1, 2, 3, 4, 5].map((gy) => (
            <line
              key={`gy-${gy}`}
              x1={0}
              y1={toSvgY(gy)}
              x2={width}
              y2={toSvgY(gy)}
              stroke="#f1f5f9"
              strokeWidth={1}
            />
          ))}

          {/* Axes */}
          <line
            x1={0}
            y1={toSvgY(0)}
            x2={width}
            y2={toSvgY(0)}
            stroke="#cbd5e1"
            strokeWidth={1.5}
          />
          <line
            x1={toSvgX(0)}
            y1={0}
            x2={toSvgX(0)}
            y2={height}
            stroke="#cbd5e1"
            strokeWidth={1.5}
          />

          {/* Asymptote */}
          {funcFamily === 'exp' ? (
            <line
              x1={0}
              y1={toSvgY(kParam)}
              x2={width}
              y2={toSvgY(kParam)}
              stroke="#f59e0b"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
          ) : (
            <line
              x1={toSvgX(hParam)}
              y1={0}
              x2={toSvgX(hParam)}
              y2={height}
              stroke="#f59e0b"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
          )}

          {/* Function curve */}
          <path
            d={pathD}
            fill="none"
            stroke="#2563eb"
            strokeWidth={3.5}
            strokeLinecap="round"
          />
        </svg>

        {/* Floating equation tag */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-xs text-xs font-mono">
          <span className="text-slate-500 font-bold block mb-0.5">Expressão Atual:</span>
          <span className="text-blue-700 font-bold text-sm">
            {funcFamily === 'exp'
              ? `f(x) = ${aParam.toFixed(1)} · (${base.toFixed(2)})^(x - ${hParam.toFixed(1)}) + ${kParam.toFixed(1)}`
              : `f(x) = ${aParam.toFixed(1)} · log_${base.toFixed(2)}(x - ${hParam.toFixed(1)}) + ${kParam.toFixed(1)}`}
          </span>
          <div className="text-[11px] text-amber-700 mt-1">
            Assíntota: {funcFamily === 'exp' ? `y = ${kParam.toFixed(1)}` : `x = ${hParam.toFixed(1)}`}
          </div>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>Base b:</span>
            <span className="font-mono text-blue-700 font-bold">{base.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.3}
            max={4.0}
            step={0.1}
            value={base}
            onChange={(e) => setBase(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>Escala a:</span>
            <span className="font-mono text-blue-700 font-bold">{aParam.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={-3.0}
            max={3.0}
            step={0.2}
            value={aParam}
            onChange={(e) => setAParam(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>Translação Horiz. h:</span>
            <span className="font-mono text-blue-700 font-bold">{hParam.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={-3.0}
            max={3.0}
            step={0.2}
            value={hParam}
            onChange={(e) => setHParam(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>Translação Vert. k:</span>
            <span className="font-mono text-blue-700 font-bold">{kParam.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={-2.5}
            max={3.5}
            step={0.2}
            value={kParam}
            onChange={(e) => setKParam(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
