import React, { useState } from 'react';
import { AgeLevel } from '../../types/math';
import { RotateCcw, RotateCw } from 'lucide-react';

interface ComplexSimulatorProps {
  level: AgeLevel;
}

export const ComplexSimulator: React.FC<ComplexSimulatorProps> = ({ level }) => {
  const [realA, setRealA] = useState<number>(2.0);
  const [imagB, setImagB] = useState<number>(1.5);
  const [powerN, setPowerN] = useState<number>(1);

  // Modulus r and argument theta
  const modulus = Math.sqrt(realA * realA + imagB * imagB);
  const argRad = Math.atan2(imagB, realA);
  const argDeg = (argRad * 180) / Math.PI;

  // Power z^n via De Moivre formula
  const modPow = Math.pow(modulus, powerN);
  const argPowRad = argRad * powerN;
  const powReal = modPow * Math.cos(argPowRad);
  const powImag = modPow * Math.sin(argPowRad);

  // SVG dimensions
  const width = 640;
  const height = 300;
  const cx = width / 2;
  const cy = height / 2;
  const scale = 35; // 35 pixels per unit

  const toSvgX = (r: number) => cx + r * scale;
  const toSvgY = (i: number) => cy - i * scale;

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">
            Potência de Moivre (zⁿ):
          </span>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setPowerN(n)}
                className={`px-3 py-1 text-xs rounded-lg font-mono font-medium cursor-pointer transition-colors ${
                  powerN === n
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                z^{n}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setRealA(2.0);
            setImagB(1.5);
            setPowerN(1);
          }}
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shadow-2xs"
          title="Repor"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Canvas for Argand Plane */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto block select-none">
          {/* Real and Imaginary Axes */}
          <line x1={0} y1={cy} x2={width} y2={cy} stroke="#cbd5e1" strokeWidth={1.5} />
          <line x1={cx} y1={0} x2={cx} y2={height} stroke="#cbd5e1" strokeWidth={1.5} />

          <text x={width - 50} y={cy - 8} fill="#64748b" fontSize={11} fontFamily="monospace" fontWeight="bold">
            Re (Eixo Real)
          </text>
          <text x={cx + 8} y={20} fill="#64748b" fontSize={11} fontFamily="monospace" fontWeight="bold">
            Im (Eixo Imaginário)
          </text>

          {/* Reference circles */}
          {[1, 2, 3, 4].map((r) => (
            <circle
              key={r}
              cx={cx}
              cy={cy}
              r={r * scale}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={1}
            />
          ))}

          {/* Base Vector z */}
          <line
            x1={cx}
            y1={cy}
            x2={toSvgX(realA)}
            y2={toSvgY(imagB)}
            stroke="#2563eb"
            strokeWidth={3.5}
            strokeLinecap="round"
          />
          <circle cx={toSvgX(realA)} cy={toSvgY(imagB)} r={6} fill="#2563eb" stroke="#ffffff" strokeWidth={2} />

          {/* Power Vector z^n if n > 1 */}
          {powerN > 1 && (
            <>
              <line
                x1={cx}
                y1={cy}
                x2={toSvgX(powReal)}
                y2={toSvgY(powImag)}
                stroke="#059669"
                strokeWidth={3}
                strokeDasharray="4 2"
                strokeLinecap="round"
              />
              <circle cx={toSvgX(powReal)} cy={toSvgY(powImag)} r={6} fill="#059669" stroke="#ffffff" strokeWidth={2} />
            </>
          )}
        </svg>

        {/* Floating values bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 pt-2 border-t border-slate-100 text-xs font-mono">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
            <span className="text-blue-600 block text-[10px] uppercase font-bold">Forma Algébrica</span>
            <span className="text-sm font-bold text-blue-900">
              z = {realA.toFixed(2)} + {imagB.toFixed(2)}i
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <span className="text-emerald-700 block text-[10px] uppercase font-bold">Forma Trigonométrica</span>
            <span className="text-sm font-bold text-emerald-900">
              z = {modulus.toFixed(2)} · e^(i · {argDeg.toFixed(1)}°)
            </span>
          </div>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>Parte Real (a):</span>
            <span className="font-mono text-blue-700 font-bold">{realA.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={-3.5}
            max={3.5}
            step={0.1}
            value={realA}
            onChange={(e) => setRealA(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
            <span>Parte Imaginária (b):</span>
            <span className="font-mono text-blue-700 font-bold">{imagB.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={-3.0}
            max={3.0}
            step={0.1}
            value={imagB}
            onChange={(e) => setImagB(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
