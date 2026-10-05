import React, { useState } from 'react';
import { Settings, Lightbulb, Target, CheckCircle2, ChevronDown, ArrowDown, ArrowUp, Sparkles, GraduationCap } from 'lucide-react';
import { AgeLevel } from '../types/math';

interface MainInteractiveAreaProps {
  level: AgeLevel;
  onSelectLevel?: (lvl: AgeLevel) => void;
  onOpenActionModal?: (actionId: 'real-world' | 'guided-example' | 'try-yourself' | 'exam-exercises') => void;
}

export const MainInteractiveArea: React.FC<MainInteractiveAreaProps> = ({
  level,
  onSelectLevel,
  onOpenActionModal,
}) => {
  // State for interactive simulation
  const [selectedFunc, setSelectedFunc] = useState<'x2' | 'x3' | 'sin' | 'exp'>('x2');
  const [pointX, setPointX] = useState<number>(1.5);
  const [showTangent, setShowTangent] = useState<boolean>(true);
  const [showDerivativeValue, setShowDerivativeValue] = useState<boolean>(true);
  const [showQuickChallengeAnswer, setShowQuickChallengeAnswer] = useState<boolean>(false);

  // Compute mathematical function values tailored by age level (preserving identical math truth)
  const computeValues = (x: number) => {
    switch (selectedFunc) {
      case 'x2': {
        const val = x * x;
        const der = 2 * x;
        const slopeStepY = (der).toFixed(1);
        let lvl6State = 'A subir ↗️ (ganha altura)';
        let lvl6MathCount = `Contagem: 1 passo para a direita ➔ sobe ${slopeStepY} passos na vertical.`;
        if (Math.abs(x) < 0.1) {
          lvl6State = 'Plano / Paragem ⏸️ (Inclinação = 0)';
          lvl6MathCount = 'Contagem: 1 passo para o lado ➔ sobe 0 passos (chão horizontal).';
        } else if (x < 0) {
          lvl6State = 'A descer ↘️ (perde altura)';
          lvl6MathCount = `Contagem: 1 passo para a direita ➔ desce ${Math.abs(der).toFixed(1)} passos.`;
        }

        return {
          fnLabel: 'f(x) = x²',
          fnValue: val,
          derivative: der,
          lvl6State,
          lvl6MathCount,
          interpretation:
            x === 0
              ? 'Ponto crítico (x = 0): a reta tangente é horizontal (f\'(0) = 0). É o mínimo da parábola.'
              : x > 0
              ? 'A derivada é positiva (+), logo a função está a crescer neste ponto.'
              : 'A derivada é negativa (-), logo a função está a decrescer neste ponto.',
        };
      }
      case 'x3': {
        const val = x * x * x - 3 * x;
        const der = 3 * x * x - 3;
        let lvl6State = 'A subir ↗️';
        let lvl6MathCount = `Contagem: inclinação instantânea de ${der > 0 ? '+' : ''}${der.toFixed(1)} passos.`;
        if (Math.abs(der) < 0.3) {
          lvl6State = 'Topo / Vale ⏸️ (Inclinação 0)';
          lvl6MathCount = 'Ponto de viragem: 1 passo à frente ➔ 0 passos de subida/descida.';
        } else if (der < 0) {
          lvl6State = 'A descer ↘️';
          lvl6MathCount = `Contagem: desce a um ritmo de ${Math.abs(der).toFixed(1)} passos.`;
        }

        return {
          fnLabel: 'f(x) = x³ - 3x',
          fnValue: val,
          derivative: der,
          lvl6State,
          lvl6MathCount,
          interpretation:
            Math.abs(der) < 0.2
              ? 'Ponto crítico! A tangente é horizontal: f\'(x) ≈ 0 (máximo ou mínimo local do 12.º ano).'
              : der > 0
              ? 'Derivada positiva: a curva está a subir neste ponto.'
              : 'Derivada negativa: a curva está a descer entre os extremos.',
        };
      }
      case 'sin': {
        const val = 2 * Math.sin(x);
        const der = 2 * Math.cos(x);
        return {
          fnLabel: 'f(x) = 2 \\sin(x)',
          fnValue: val,
          derivative: der,
          lvl6State: Math.abs(der) < 0.2 ? 'Crista da Onda ⏸️ (0 passos)' : der > 0 ? 'Onda a subir ↗️' : 'Onda a descer ↘️',
          lvl6MathCount: `Ritmo de subida/descida da onda: ${der.toFixed(1)} passos.`,
          interpretation:
            'A derivada do seno é o cosseno! No topo da crista (seno máximo), a velocidade vertical anula-se.',
        };
      }
      case 'exp': {
        const val = Math.exp(x);
        const der = Math.exp(x);
        return {
          fnLabel: 'f(x) = e^x',
          fnValue: val,
          derivative: der,
          lvl6State: 'Subida Explosiva 🚀',
          lvl6MathCount: `Ritmo: cada passo à frente multiplica a velocidade de subida (${der.toFixed(1)} passos)!`,
          interpretation:
            'Propriedade única da exponencial de Neper: a taxa de variação instantânea é igual ao próprio valor da função (f\'(x) = f(x))!',
        };
      }
    }
  };

  const currentData = computeValues(pointX);
  const fxDisplay = currentData.fnValue.toFixed(2);
  const fprimeDisplay = currentData.derivative.toFixed(2).replace(/\.00$/, '');

  // SVG coordinate transformation
  const svgWidth = 440;
  const svgHeight = 280;
  const mapX = (x: number) => ((x + 3.2) / 6.4) * svgWidth;
  const mapY = (y: number) => svgHeight - ((y + 1.5) / 6.0) * svgHeight;

  // Generate curve path
  const curvePoints: string[] = [];
  const step = 0.05;
  for (let gx = -3.0; gx <= 3.0; gx += step) {
    let gy = 0;
    if (selectedFunc === 'x2') gy = gx * gx;
    else if (selectedFunc === 'x3') gy = gx * gx * gx - 3 * gx;
    else if (selectedFunc === 'sin') gy = 2 * Math.sin(gx);
    else if (selectedFunc === 'exp') gy = Math.exp(gx);

    const px = mapX(gx);
    const py = mapY(gy);
    curvePoints.push(`${gx === -3.0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
  }
  const curvePathD = curvePoints.join(' ');

  // Compute tangent line segment around pointX
  const currentY = currentData.fnValue;
  const slope = currentData.derivative;
  const tanX1 = pointX - 1.4;
  const tanY1 = currentY - slope * 1.4;
  const tanX2 = pointX + 1.4;
  const tanY2 = currentY + slope * 1.4;

  const ptScreenX = mapX(pointX);
  const ptScreenY = mapY(currentY);

  return (
    <div className="space-y-4">
      {/* Pedagogical Zoom & Escalator Controls Bar */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-white border border-blue-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            {level === '6' && '🧒 6a'}
            {level === '10' && '👦 10a'}
            {level === '14' && '🧑 14a'}
            {level === '18' && '🎓 18a'}
            {level === 'adulto' && '🧑 Adulto'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase text-blue-700 font-bold">
                {level === '18'
                  ? 'Modo Exame Nacional (12.º Ano)'
                  : `Zoom de Explicação: ${level} anos (Rumo ao Exame)`}
              </span>
              <span className="text-[10px] bg-white border border-blue-200 text-slate-600 px-1.5 py-0.2 rounded font-sans">
                Mesmo programa curricular
              </span>
            </div>
            <p className="text-xs text-slate-700 font-medium mt-0.5">
              {level === '6' && '“Construir a ideia com contagens, quantidades e movimento sem jargão árido.”'}
              {level === '10' && '“Observar relações de velocidade de variação e padrões do quotidiano.”'}
              {level === '14' && '“Fazer a ponte entre a intuição gráfica e a escrita algébrica formal.”'}
              {level === '18' && '“Rigor analítico, teoremas, regras de derivação e critérios de exame.”'}
              {level === 'adulto' && '“Porque é que isto existe, que problema resolve e como é aplicado em IA e finanças.”'}
            </p>
          </div>
        </div>

        {/* Quick Zoom & Return to Exam Buttons */}
        {onSelectLevel && (
          <div className="flex items-center gap-2 self-end sm:self-center shrink-0 flex-wrap justify-end">
            {level === '18' ? (
              <button
                onClick={() => onSelectLevel('14')}
                className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 hover:bg-amber-50 text-amber-800 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                title="Descer temporariamente para desbloquear a intuição"
              >
                <ArrowDown className="w-3.5 h-3.5 text-amber-600" />
                <span>Não percebi? Descer para 14a</span>
              </button>
            ) : (
              <button
                onClick={() => onSelectLevel('18')}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                title="Regressar diretamente à preparação de Exame do 12.º ano"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Voltar ao Nível de Exame (18 anos)</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Grid: Simulator + Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Main Simulator (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-5 flex flex-col justify-between">
          {/* Header of Simulator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  Explora a derivada
                </h3>
                <p className="text-[11px] text-slate-500">
                  {level === '6'
                    ? 'Arrasta o ponto e mede a contagem de subida/descida a cada passo!'
                    : level === '10'
                    ? 'Compara onde a curva sobe mais depressa ou mais devagar.'
                    : 'Move o ponto na curva e observa a reta tangente e o valor da derivada.'}
                </p>
              </div>
            </div>

            {/* Function Selector Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Escolhe uma função:</span>
              <div className="relative">
                <select
                  value={selectedFunc}
                  onChange={(e) => setSelectedFunc(e.target.value as any)}
                  className="appearance-none bg-[#f8fafc] border border-slate-200 rounded-lg px-3 py-1.5 pr-7 text-xs font-semibold text-slate-800 cursor-pointer focus:outline-none focus:border-blue-500"
                >
                  <option value="x2">f(x) = x²</option>
                  <option value="x3">f(x) = x³ - 3x</option>
                  <option value="sin">f(x) = 2 sin(x)</option>
                  <option value="exp">f(x) = e^x</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Simulator Body: 2 Columns (Graph + Controls) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Coordinate Plane SVG (7 cols) */}
            <div className="md:col-span-7 bg-[#fafbfc] border border-slate-200/80 rounded-xl p-2 relative overflow-hidden flex items-center justify-center select-none min-h-[280px]">
              <svg
                className="w-full h-full max-h-[280px]"
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              >
                {/* Background Grid Lines */}
                {[-3, -2, -1, 0, 1, 2, 3].map((gx) => (
                  <line
                    key={`gx-${gx}`}
                    x1={mapX(gx)}
                    y1={0}
                    x2={mapX(gx)}
                    y2={svgHeight}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                ))}
                {[-1, 0, 1, 2, 3, 4].map((gy) => (
                  <line
                    key={`gy-${gy}`}
                    x1={0}
                    y1={mapY(gy)}
                    x2={svgWidth}
                    y2={mapY(gy)}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                ))}

                {/* Main Axes */}
                {/* X Axis */}
                <line
                  x1={0}
                  y1={mapY(0)}
                  x2={svgWidth}
                  y2={mapY(0)}
                  stroke="#64748b"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${svgWidth - 2},${mapY(0) - 3} ${svgWidth + 3},${mapY(0)} ${svgWidth - 2},${mapY(0) + 3}`}
                  fill="#64748b"
                />
                <text
                  x={svgWidth - 10}
                  y={mapY(0) - 6}
                  fontSize="10"
                  fontFamily="sans-serif"
                  fill="#64748b"
                >
                  x
                </text>

                {/* Y Axis */}
                <line
                  x1={mapX(0)}
                  y1={svgHeight}
                  x2={mapX(0)}
                  y2={0}
                  stroke="#64748b"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${mapX(0) - 3},4 ${mapX(0)},-2 ${mapX(0) + 3},4`}
                  fill="#64748b"
                />
                <text
                  x={mapX(0) + 6}
                  y={12}
                  fontSize="10"
                  fontFamily="sans-serif"
                  fill="#64748b"
                >
                  y
                </text>

                {/* Tick numbers */}
                {[-3, -2, -1, 1, 2, 3].map((gx) => (
                  <g key={`tx-${gx}`}>
                    <line
                      x1={mapX(gx)}
                      y1={mapY(0) - 2.5}
                      x2={mapX(gx)}
                      y2={mapY(0) + 2.5}
                      stroke="#475569"
                      strokeWidth="1.2"
                    />
                    <text
                      x={mapX(gx)}
                      y={mapY(0) + 12}
                      fontSize="9"
                      fontFamily="sans-serif"
                      fill="#64748b"
                      textAnchor="middle"
                    >
                      {gx}
                    </text>
                  </g>
                ))}

                {[-1, 1, 2, 3, 4].map((gy) => (
                  <g key={`ty-${gy}`}>
                    <line
                      x1={mapX(0) - 2.5}
                      y1={mapY(gy)}
                      x2={mapX(0) + 2.5}
                      y2={mapY(gy)}
                      stroke="#475569"
                      strokeWidth="1.2"
                    />
                    <text
                      x={mapX(0) - 6}
                      y={mapY(gy) + 3}
                      fontSize="9"
                      fontFamily="sans-serif"
                      fill="#64748b"
                      textAnchor="end"
                    >
                      {gy}
                    </text>
                  </g>
                ))}
                <text
                  x={mapX(0) - 6}
                  y={mapY(0) + 11}
                  fontSize="9"
                  fontFamily="sans-serif"
                  fill="#64748b"
                  textAnchor="end"
                >
                  0
                </text>

                {/* Function Curve (Blue) */}
                <path
                  d={curvePathD}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Tangent Line (Red) */}
                {showTangent && (
                  <line
                    x1={mapX(tanX1)}
                    y1={mapY(tanY1)}
                    x2={mapX(tanX2)}
                    y2={mapY(tanY2)}
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}

                {/* Interactive Point on Curve */}
                <circle
                  cx={ptScreenX}
                  cy={ptScreenY}
                  r="6"
                  fill="#2563eb"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="cursor-grab shadow-md"
                />

                {/* Tooltip / Callout box next to Point */}
                {showDerivativeValue && (
                  <g transform={`translate(${Math.min(ptScreenX + 10, svgWidth - 85)}, ${Math.max(ptScreenY - 45, 10)})`}>
                    <rect
                      width="78"
                      height="44"
                      rx="6"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                    />
                    <text x="7" y="13" fontSize="9" fill="#475569" fontFamily="sans-serif">
                      x = {pointX.toFixed(1)}
                    </text>
                    <text x="7" y="24" fontSize="9" fill="#475569" fontFamily="sans-serif">
                      f(x) = {fxDisplay}
                    </text>
                    <text x="7" y="37" fontSize="9.5" fill="#ef4444" fontWeight="bold" fontFamily="sans-serif">
                      {level === '6' ? (currentData.derivative === 0 ? 'Plano (0)' : currentData.derivative > 0 ? `+${fprimeDisplay} passos` : `${fprimeDisplay} passos`) : `f'(x) = ${fprimeDisplay}`}
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Right Controls & Analytical Readouts (5 cols) */}
            <div className="md:col-span-5 space-y-3.5">
              <div className="text-sm font-mono font-bold text-slate-900 tracking-tight">
                {currentData.fnLabel}
              </div>

              {/* Point Slider */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Mover ponto (x)</span>
                  <span className="font-mono font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-800 text-[11px]">
                    {pointX.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="-2.5"
                  max="2.5"
                  step="0.1"
                  value={pointX}
                  onChange={(e) => setPointX(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Toggle Switches */}
              <div className="space-y-2 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Mostrar reta tangente</span>
                  <button
                    onClick={() => setShowTangent(!showTangent)}
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                      showTangent ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        showTangent ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Mostrar a derivada f'(x)</span>
                  <button
                    onClick={() => setShowDerivativeValue(!showDerivativeValue)}
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                      showDerivativeValue ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        showDerivativeValue ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Level-specific Diagnostic Card */}
              {level === '6' ? (
                <div className="bg-pink-50/70 border border-pink-200/80 rounded-xl p-3">
                  <span className="text-[10px] text-pink-700 font-bold uppercase block">
                    {currentData.lvl6State}
                  </span>
                  <p className="text-[11px] text-slate-800 font-medium mt-1">
                    {currentData.lvl6MathCount}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    💡 A inclinação mede exatamente quantos passos a curva sobe por cada passo horizontal.
                  </p>
                </div>
              ) : (
                <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-3">
                  <span className="text-[10px] text-slate-500 block">
                    Valor da derivada:
                  </span>
                  <div className="text-sm font-extrabold text-rose-600 font-mono tracking-tight">
                    f'(x) = {fprimeDisplay}
                  </div>
                </div>
              )}

              {/* Interpretation Green Card */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 block">
                    Interpretação:
                  </span>
                  <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                    {currentData.interpretation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Widgets (4 cols) */}
        <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
          {/* Widget 1: "O que podes explorar?" */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-900">
              O que podes explorar?
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-xs text-slate-600">
                <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="leading-snug">
                  Move o ponto e vê como muda a inclinação da reta tangente.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-600">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="leading-snug">
                  Observa como a derivada é positiva, negativa ou zero.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-600">
                <div className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="leading-snug">Experimenta outras funções.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-600">
                <div className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="leading-snug">
                  Tenta encontrar os pontos de máximo e mínimo.
                </span>
              </li>
            </ul>
          </div>

          {/* Widget 2: "Desafio rápido" */}
          <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-purple-200/80 rounded-2xl p-4.5 shadow-xs space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-purple-900">Desafio rápido</h4>
                <p className="text-xs text-slate-700 font-medium mt-1 leading-snug">
                  Em que pontos a inclinação da reta tangente é zero?
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Dica: Move o ponto e observa.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={() => setShowQuickChallengeAnswer(!showQuickChallengeAnswer)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {showQuickChallengeAnswer ? 'Ocultar resposta' : 'Ver resposta'}
              </button>
            </div>

            {showQuickChallengeAnswer && (
              <div className="p-3 bg-white/90 border border-purple-200 rounded-xl text-xs text-slate-700 space-y-1 animate-in fade-in">
                <span className="font-bold text-purple-900 block">
                  Resposta Correta:
                </span>
                <p>
                  Para a função <code className="font-mono bg-purple-50 px-1 rounded">f(x) = x²</code>, a inclinação é zero exatamente em <strong className="text-blue-600 font-mono">x = 0</strong> (o vértice mínimo).
                </p>
                <p className="text-[11px] text-slate-500">
                  Nos pontos onde a tangente é horizontal, a derivada anula-se (<code className="font-mono">f'(x) = 0</code>).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
