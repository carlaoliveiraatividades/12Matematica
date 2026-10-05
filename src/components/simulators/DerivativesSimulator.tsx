import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { Play, RotateCcw, Eye, TrendingUp, Compass } from 'lucide-react';

interface DerivativesSimulatorProps {
  level: AgeLevel;
  preset?: string;
}

export const DerivativesSimulator: React.FC<DerivativesSimulatorProps> = ({
  level,
}) => {
  const [xVal, setXVal] = useState<number>(1.2);
  const [hStep, setHStep] = useState<number>(0.5);
  const [curveType, setCurveType] = useState<'cubic' | 'parabola' | 'sine'>('cubic');
  const [showSecant, setShowSecant] = useState<boolean>(true);
  const [showDerivativePlot, setShowDerivativePlot] = useState<boolean>(false);

  // Math definitions
  const f = (x: number) => {
    switch (curveType) {
      case 'cubic':
        return 0.2 * Math.pow(x, 3) - 0.9 * x + 1.2;
      case 'parabola':
        return -0.4 * Math.pow(x - 1, 2) + 2.5;
      case 'sine':
        return Math.sin(x * 1.5) + 1.5;
    }
  };

  const fPrime = (x: number) => {
    switch (curveType) {
      case 'cubic':
        return 0.6 * Math.pow(x, 2) - 0.9;
      case 'parabola':
        return -0.8 * (x - 1);
      case 'sine':
        return 1.5 * Math.cos(x * 1.5);
    }
  };

  // Canvas bounds mapping
  const width = 640;
  const height = 340;
  const minX = -2.5;
  const maxX = 3.5;
  const minY = -1.0;
  const maxY = 3.8;

  const toSvgX = (x: number) => ((x - minX) / (maxX - minX)) * width;
  const toSvgY = (y: number) => height - ((y - minY) / (maxY - minY)) * height;

  // Generate curve path
  const pointsCount = 120;
  let curvePathD = '';
  for (let i = 0; i <= pointsCount; i++) {
    const x = minX + (i / pointsCount) * (maxX - minX);
    const y = f(x);
    const sx = toSvgX(x);
    const sy = toSvgY(y);
    if (i === 0) curvePathD += `M ${sx} ${sy}`;
    else curvePathD += ` L ${sx} ${sy}`;
  }

  // Current values
  const currentY = f(xVal);
  const slope = fPrime(xVal);
  const secantX = xVal + hStep;
  const secantY = f(secantX);
  const secantSlope = (secantY - currentY) / hStep;

  // Tangent line segment
  const tanDx = 1.4;
  const tanX1 = xVal - tanDx;
  const tanY1 = currentY - slope * tanDx;
  const tanX2 = xVal + tanDx;
  const tanY2 = currentY + slope * tanDx;

  // Secant line segment
  const secX1 = xVal - 0.5;
  const secY1 = currentY - secantSlope * 0.5;
  const secX2 = secantX + 0.5;
  const secY2 = secantY + secantSlope * 0.5;

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
              onClick={() => setCurveType('cubic')}
              className={`px-2.5 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                curveType === 'cubic'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cúbica
            </button>
            <button
              onClick={() => setCurveType('parabola')}
              className={`px-2.5 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                curveType === 'parabola'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Parábola
            </button>
            <button
              onClick={() => setCurveType('sine')}
              className={`px-2.5 py-1 text-xs rounded-md font-medium cursor-pointer transition-colors ${
                curveType === 'sine'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Senoide
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSecant(!showSecant)}
            className={`px-3 py-1 text-xs rounded-lg border font-medium cursor-pointer transition-colors ${
              showSecant
                ? 'bg-blue-50 border-blue-300 text-blue-800 font-semibold'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Secante (h = {hStep.toFixed(2)})
          </button>

          <button
            onClick={() => {
              setXVal(1.2);
              setHStep(0.5);
            }}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
            title="Repor parâmetros"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto block select-none"
        >
          {/* Grid lines */}
          {[-2, -1, 0, 1, 2, 3].map((gx) => (
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
          {[-1, 0, 1, 2, 3].map((gy) => (
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

          {/* Main Function Curve */}
          <path
            d={curvePathD}
            fill="none"
            stroke="#2563eb"
            strokeWidth={3.5}
            strokeLinecap="round"
          />

          {/* Secant line if enabled */}
          {showSecant && (
            <>
              <line
                x1={toSvgX(secX1)}
                y1={toSvgY(secY1)}
                x2={toSvgX(secX2)}
                y2={toSvgY(secY2)}
                stroke="#93c5fd"
                strokeWidth={2}
                strokeDasharray="4 4"
              />
              <circle
                cx={toSvgX(secantX)}
                cy={toSvgY(secantY)}
                r={5}
                fill="#3b82f6"
              />
            </>
          )}

          {/* Tangent Line */}
          <line
            x1={toSvgX(tanX1)}
            y1={toSvgY(tanY1)}
            x2={toSvgX(tanX2)}
            y2={toSvgY(tanY2)}
            stroke={Math.abs(slope) < 0.1 ? '#059669' : '#d97706'}
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* Point of tangency */}
          <circle
            cx={toSvgX(xVal)}
            cy={toSvgY(currentY)}
            r={7}
            fill="#ffffff"
            stroke={Math.abs(slope) < 0.1 ? '#059669' : '#d97706'}
            strokeWidth={3.5}
          />
        </svg>

        {/* Floating Value Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-3 shadow-sm text-xs font-mono space-y-1">
            <div className="text-slate-500 font-bold">
              Ponto: <span className="text-slate-900">({xVal.toFixed(2)}, {currentY.toFixed(2)})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-700">Declive Tangente f'(x):</span>
              <span
                className={`font-bold px-1.5 py-0.5 rounded ${
                  Math.abs(slope) < 0.1
                    ? 'bg-emerald-100 text-emerald-800'
                    : slope > 0
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {slope > 0 ? `+${slope.toFixed(2)}` : slope.toFixed(2)}
              </span>
            </div>
            {showSecant && (
              <div className="text-slate-500 text-[11px] pt-1 border-t border-slate-100">
                Declive Secante TMV: <span className="text-blue-700 font-semibold">{secantSlope.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
            <span>Posição do Ponto x:</span>
            <span className="font-mono text-blue-700 font-bold">{xVal.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={-1.8}
            max={2.8}
            step={0.02}
            value={xVal}
            onChange={(e) => setXVal(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {showSecant && (
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
              <span>Passo de Aproximação h (Δx):</span>
              <span className="font-mono text-blue-700 font-bold">{hStep.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.01}
              max={1.5}
              step={0.02}
              value={hStep}
              onChange={(e) => setHStep(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
