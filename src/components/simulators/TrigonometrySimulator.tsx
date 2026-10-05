import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { RotateCcw } from 'lucide-react';

interface TrigonometrySimulatorProps {
  level: AgeLevel;
}

export const TrigonometrySimulator: React.FC<TrigonometrySimulatorProps> = ({ level }) => {
  const [angleDeg, setAngleDeg] = useState<number>(45);

  const angleRad = (angleDeg * Math.PI) / 180;
  const sinVal = Math.sin(angleRad);
  const cosVal = Math.cos(angleRad);
  const tanVal = Math.abs(cosVal) > 0.001 ? Math.tan(angleRad) : null;

  // Circle dimensions
  const circleRadius = 100;
  const cx = 150;
  const cy = 150;

  const px = cx + circleRadius * cosVal;
  const py = cy - circleRadius * sinVal;

  // Wave dimensions
  const waveWidth = 300;
  const waveHeight = 220;
  const waveStartX = 320;
  const waveCenterY = 150;

  // Generate sine wave path
  let waveD = '';
  for (let d = 0; d <= 360; d += 4) {
    const r = (d * Math.PI) / 180;
    const wx = waveStartX + (d / 360) * waveWidth;
    const wy = waveCenterY - circleRadius * Math.sin(r);
    if (d === 0) waveD += `M ${wx} ${wy}`;
    else waveD += ` L ${wx} ${wy}`;
  }

  const markerWaveX = waveStartX + (angleDeg / 360) * waveWidth;
  const markerWaveY = waveCenterY - circleRadius * sinVal;

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Ângulo θ:
          </span>
          <div className="flex gap-1.5">
            {[0, 30, 45, 60, 90, 180, 270].map((deg) => (
              <button
                key={deg}
                onClick={() => setAngleDeg(deg)}
                className={`px-2 py-1 text-xs rounded-lg font-mono font-medium cursor-pointer transition-colors ${
                  angleDeg === deg
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {deg}°
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setAngleDeg(45)}
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
          title="Repor"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Canvas: Circle + Wave */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner p-2">
        <svg viewBox="0 0 640 300" className="w-full h-auto block select-none">
          {/* Unit Circle Axes */}
          <line x1={cx - 130} y1={cy} x2={cx + 130} y2={cy} stroke="#cbd5e1" strokeWidth={1.5} />
          <line x1={cx} y1={cy - 130} x2={cx} y2={cy + 130} stroke="#cbd5e1" strokeWidth={1.5} />

          {/* Unit Circle */}
          <circle cx={cx} cy={cy} r={circleRadius} fill="none" stroke="#93c5fd" strokeWidth={2} />

          {/* Triangle projections */}
          {/* Cosine (horizontal blue) */}
          <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#2563eb" strokeWidth={3} strokeLinecap="round" />
          {/* Sine (vertical emerald) */}
          <line x1={px} y1={cy} x2={px} y2={py} stroke="#059669" strokeWidth={3} strokeLinecap="round" />
          {/* Radius hypotenuse */}
          <line x1={cx} y1={cy} x2={px} y2={py} stroke="#475569" strokeWidth={2} strokeDasharray="3 3" />

          {/* Point on circle */}
          <circle cx={px} cy={py} r={6} fill="#2563eb" stroke="#ffffff" strokeWidth={2} />

          {/* Wave Coordinate Grid */}
          <line x1={waveStartX} y1={waveCenterY} x2={waveStartX + waveWidth} y2={waveCenterY} stroke="#cbd5e1" strokeWidth={1.5} />
          <line x1={waveStartX} y1={waveCenterY - circleRadius} x2={waveStartX + waveWidth} y2={waveCenterY - circleRadius} stroke="#f1f5f9" strokeWidth={1} />
          <line x1={waveStartX} y1={waveCenterY + circleRadius} x2={waveStartX + waveWidth} y2={waveCenterY + circleRadius} stroke="#f1f5f9" strokeWidth={1} />

          {/* Sine Wave Curve */}
          <path d={waveD} fill="none" stroke="#059669" strokeWidth={2.5} />

          {/* Connected projection line from circle to wave */}
          <line x1={px} y1={py} x2={markerWaveX} y2={markerWaveY} stroke="#94a3b8" strokeWidth={1} strokeDasharray="2 2" />

          {/* Marker on wave */}
          <circle cx={markerWaveX} cy={markerWaveY} r={6} fill="#059669" stroke="#ffffff" strokeWidth={2} />
        </svg>

        {/* Floating values bar */}
        <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-100 text-xs font-mono">
          <div className="bg-blue-50 border border-blue-200 p-2.5 rounded-xl text-blue-900 font-bold text-center">
            cos(θ) = {cosVal.toFixed(3)}
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-emerald-900 font-bold text-center">
            sin(θ) = {sinVal.toFixed(3)}
          </div>
          <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-amber-900 font-bold text-center">
            tan(θ) = {tanVal !== null ? tanVal.toFixed(3) : '∞ (assíntota)'}
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="flex justify-between text-xs text-slate-700 font-medium mb-1.5">
          <span>Arrastar Ângulo θ:</span>
          <span className="font-mono text-blue-700 font-bold">{angleDeg}° ({(angleRad).toFixed(2)} rad)</span>
        </div>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={angleDeg}
          onChange={(e) => setAngleDeg(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};
