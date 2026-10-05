import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { RotateCcw } from 'lucide-react';

interface GeometrySimulatorProps {
  level: AgeLevel;
}

export const GeometrySimulator: React.FC<GeometrySimulatorProps> = ({ level }) => {
  const [ux, setUx] = useState<number>(3.0);
  const [uy, setUy] = useState<number>(1.0);
  const [vx, setVx] = useState<number>(1.0);
  const [vy, setVy] = useState<number>(3.0);

  // Dot product
  const dotProduct = ux * vx + uy * vy;
  const normU = Math.sqrt(ux * ux + uy * uy);
  const normV = Math.sqrt(vx * vx + vy * vy);
  const cosTheta = (normU > 0 && normV > 0) ? dotProduct / (normU * normV) : 0;
  const clampedCos = Math.max(-1, Math.min(1, cosTheta));
  const angleRad = Math.acos(clampedCos);
  const angleDeg = (angleRad * 180) / Math.PI;

  const isOrthogonal = Math.abs(dotProduct) < 0.05;

  // SVG dimensions
  const width = 640;
  const height = 280;
  const cx = width / 2;
  const cy = height / 2;
  const scale = 28;

  const toSvgX = (x: number) => cx + x * scale;
  const toSvgY = (y: number) => cy - y * scale;

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Ângulo entre Vetores:
          </span>
          <span
            className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
              isOrthogonal
                ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}
          >
            θ = {angleDeg.toFixed(1)}° {isOrthogonal ? '· Perpendiculares (u · v = 0)' : ''}
          </span>
        </div>

        <button
          onClick={() => {
            setUx(3.0);
            setUy(1.0);
            setVx(1.0);
            setVy(3.0);
          }}
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
          title="Repor"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Canvas for Vectors */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto block select-none">
          {/* Axes */}
          <line x1={0} y1={cy} x2={width} y2={cy} stroke="#cbd5e1" strokeWidth={1.5} />
          <line x1={cx} y1={0} x2={cx} y2={height} stroke="#cbd5e1" strokeWidth={1.5} />

          {/* Grid lines */}
          {[-4, -2, 2, 4].map((g) => (
            <React.Fragment key={g}>
              <line x1={toSvgX(g)} y1={0} x2={toSvgX(g)} y2={height} stroke="#f1f5f9" strokeWidth={1} />
              <line x1={0} y1={toSvgY(g)} x2={width} y2={toSvgY(g)} stroke="#f1f5f9" strokeWidth={1} />
            </React.Fragment>
          ))}

          {/* Vector u (Royal Blue) */}
          <line
            x1={cx}
            y1={cy}
            x2={toSvgX(ux)}
            y2={toSvgY(uy)}
            stroke="#2563eb"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <circle cx={toSvgX(ux)} cy={toSvgY(uy)} r={6} fill="#2563eb" stroke="#ffffff" strokeWidth={2} />
          <text x={toSvgX(ux) + 8} y={toSvgY(uy) - 6} fill="#1d4ed8" fontSize={12} fontFamily="monospace" fontWeight="bold">
            u ({ux.toFixed(1)}, {uy.toFixed(1)})
          </text>

          {/* Vector v (Emerald or Amber) */}
          <line
            x1={cx}
            y1={cy}
            x2={toSvgX(vx)}
            y2={toSvgY(vy)}
            stroke={isOrthogonal ? '#059669' : '#d97706'}
            strokeWidth={4}
            strokeLinecap="round"
          />
          <circle
            cx={toSvgX(vx)}
            cy={toSvgY(vy)}
            r={6}
            fill={isOrthogonal ? '#059669' : '#d97706'}
            stroke="#ffffff"
            strokeWidth={2}
          />
          <text
            x={toSvgX(vx) + 8}
            y={toSvgY(vy) - 6}
            fill={isOrthogonal ? '#047857' : '#b45309'}
            fontSize={12}
            fontFamily="monospace"
            fontWeight="bold"
          >
            v ({vx.toFixed(1)}, {vy.toFixed(1)})
          </text>
        </svg>

        {/* Floating values bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 pt-2 border-t border-slate-100 text-xs font-mono">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center">
            <span className="text-blue-600 block text-[10px] uppercase font-bold">Norma ||u||</span>
            <span className="text-base font-bold text-blue-900">{normU.toFixed(2)}</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
            <span className="text-amber-700 block text-[10px] uppercase font-bold">Norma ||v||</span>
            <span className="text-base font-bold text-amber-900">{normV.toFixed(2)}</span>
          </div>

          <div
            className={`p-3 rounded-xl border text-center ${
              isOrthogonal
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            <span className="block text-[10px] uppercase font-bold text-slate-500">
              Produto Escalar u · v
            </span>
            <span className="text-base font-bold">{dotProduct.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>u_x:</span>
            <span className="font-mono text-blue-700 font-bold">{ux.toFixed(1)}</span>
          </div>
          <input type="range" min={-4} max={4} step={0.2} value={ux} onChange={(e) => setUx(parseFloat(e.target.value))} className="w-full" />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>u_y:</span>
            <span className="font-mono text-blue-700 font-bold">{uy.toFixed(1)}</span>
          </div>
          <input type="range" min={-4} max={4} step={0.2} value={uy} onChange={(e) => setUy(parseFloat(e.target.value))} className="w-full" />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>v_x:</span>
            <span className="font-mono text-amber-700 font-bold">{vx.toFixed(1)}</span>
          </div>
          <input type="range" min={-4} max={4} step={0.2} value={vx} onChange={(e) => setVx(parseFloat(e.target.value))} className="w-full" />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>v_y:</span>
            <span className="font-mono text-amber-700 font-bold">{vy.toFixed(1)}</span>
          </div>
          <input type="range" min={-4} max={4} step={0.2} value={vy} onChange={(e) => setVy(parseFloat(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  );
};
