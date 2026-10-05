import React, { useState } from 'react';
import { SubTopic, AgeLevel, DiagnosticOption } from '../types/math';
import { X, CheckCircle2, XCircle, ArrowRight, Sparkles, BookOpen, FileCheck, Trophy } from 'lucide-react';

interface InteractiveModalProps {
  actionType: 'real-world' | 'guided-example' | 'try-yourself' | 'exam-exercises' | null;
  subtopic: SubTopic;
  level: AgeLevel;
  onClose: () => void;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  actionType,
  subtopic,
  level,
  onClose,
}) => {
  if (!actionType) return null;

  const exp = subtopic.experiences[level] || subtopic.experiences['18'];
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showSolutionSteps, setShowSolutionSteps] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-[#fafbfc]">
          <div className="flex items-center gap-2.5">
            {actionType === 'real-world' && (
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-base">
                🏎️
              </div>
            )}
            {actionType === 'guided-example' && (
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            )}
            {actionType === 'try-yourself' && (
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
            )}
            {actionType === 'exam-exercises' && (
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
            )}
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {actionType === 'real-world' && 'Aplicações no Mundo Real'}
                {actionType === 'guided-example' && 'Exercício Guiado Passo a Passo'}
                {actionType === 'try-yourself' && 'Desafio — Tenta Tu'}
                {actionType === 'exam-exercises' && 'Exercícios Tipo Exame Nacional'}
              </h3>
              <p className="text-[11px] text-slate-500">{subtopic.title}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-200/70 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* REAL WORLD MODAL */}
          {actionType === 'real-world' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed">
                <p className="font-semibold text-blue-950 mb-1">
                  💡 Porque é que as derivadas moldam a tecnologia moderna?
                </p>
                <p>
                  Sempre que um velocímetro mede aceleração, um piloto automático ajusta a altitude de um avião, ou um algoritmo de inteligência artificial treina biliões de parâmetros, a derivada está a trabalhar em segundo plano para encontrar a direção da taxa de mudança ótima.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.whyItExists.realWorldContexts.map((ctx, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1"
                  >
                    <span className="font-bold text-blue-700 block">
                      {ctx.area}
                    </span>
                    <p className="text-slate-600">{ctx.example}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-white text-xs space-y-1">
                <span className="text-cyan-400 font-mono text-[10px] uppercase font-bold block">
                  Citação Fundamental:
                </span>
                <p className="italic">“{exp.whyItExists.ahaQuote}”</p>
              </div>
            </div>
          )}

          {/* GUIDED EXAMPLE MODAL */}
          {actionType === 'guided-example' && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                  Enunciado:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {exp.solvedExample.problemStatement}
                </p>
              </div>

              <div className="space-y-3">
                {exp.solvedExample.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs space-y-1.5 shadow-2xs"
                  >
                    <div className="font-bold text-blue-700">
                      Passo {step.stepNumber}: {step.title}
                    </div>
                    <div className="font-mono bg-slate-50 p-2 rounded border border-slate-200 text-slate-900 text-xs">
                      {step.mathExpression}
                    </div>
                    <p className="text-slate-500 italic text-[11px]">
                      💡 Porquê: {step.intuitiveWhy}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                ✓ Conclusão: {exp.solvedExample.finalConclusion}
              </div>
            </div>
          )}

          {/* TRY YOURSELF MODAL */}
          {actionType === 'try-yourself' && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {exp.tryItYourself.prompt}
                </p>
              </div>

              <div className="space-y-2.5">
                {exp.tryItYourself.options.map((opt) => {
                  const isPicked = selectedOpt === opt.id;
                  let btnStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-700';
                  if (selectedOpt) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold';
                    } else if (isPicked && !opt.isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-800';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOpt(opt.id)}
                      disabled={!!selectedOpt}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                    >
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0 font-bold">
                        {opt.id}
                      </span>
                      <span className="leading-snug">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {selectedOpt && (() => {
                const opt = exp.tryItYourself.options.find((o) => o.id === selectedOpt);
                if (!opt) return null;
                return (
                  <div
                    className={`p-4 rounded-xl border text-xs space-y-1.5 animate-in fade-in ${
                      opt.isCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      {opt.isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Correto!
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          Diagnóstico do Raciocínio:
                        </>
                      )}
                    </div>
                    <p>{opt.whyWrongOrRight}</p>
                    <div className="font-mono text-[11px] bg-white/80 p-2 rounded border border-slate-200/60 mt-1">
                      🧠 Como pensar: {opt.howToThink}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* EXAM EXERCISES MODAL */}
          {actionType === 'exam-exercises' && (
            <div className="space-y-4">
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">
                    {exp.examChallenge.contextTag}
                  </span>
                  <span className="text-[11px] text-amber-800 font-medium">
                    Critério IAVE
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {exp.examChallenge.problem}
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                🎯 <strong>Dica de Estratégia de Exame:</strong> {exp.examChallenge.strategyTip}
              </div>

              <div className="space-y-2.5">
                {exp.examChallenge.options.map((opt) => {
                  const isPicked = selectedOpt === opt.id;
                  let btnStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-700';
                  if (selectedOpt) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold';
                    } else if (isPicked && !opt.isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-800';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOpt(opt.id)}
                      disabled={!!selectedOpt}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                    >
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0 font-bold">
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="leading-snug">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {selectedOpt && (() => {
                const opt = exp.examChallenge.options.find((o) => o.id === selectedOpt);
                if (!opt) return null;
                return (
                  <div
                    className={`p-4 rounded-xl border text-xs space-y-1.5 animate-in fade-in ${
                      opt.isCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      {opt.isCorrect ? '🏆 Cotação Completa!' : '⚠️ Correção de Exame:'}
                    </div>
                    <p>{opt.whyWrongOrRight}</p>
                    <div className="font-mono text-[11px] bg-white/80 p-2 rounded border border-slate-200/60 mt-1">
                      Estratégia: {opt.howToThink}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-[#fafbfc] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
