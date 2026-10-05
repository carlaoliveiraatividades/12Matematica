import React, { useState } from 'react';
import { AgeLevel, LevelExperience, SubTopic, DiagnosticOption, ProgressiveExercise } from '../types/math';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Award,
  ChevronRight,
  TrendingUp,
  Globe2,
  FileCheck2,
  Check,
  Compass,
  ArrowRight,
  Target,
  BrainCircuit,
} from 'lucide-react';

interface ConceptExplanationViewProps {
  subtopic: SubTopic;
  level: AgeLevel;
}

export const ConceptExplanationView: React.FC<ConceptExplanationViewProps> = ({
  subtopic,
  level,
}) => {
  const exp: LevelExperience = subtopic.experiences[level];

  // State for user interactions
  const [predictionAnswer, setPredictionAnswer] = useState<string | null>(null);
  const [tryItAnswer, setTryItAnswer] = useState<string | null>(null);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [examAnswer, setExamAnswer] = useState<string | null>(null);
  const [showStepByStep, setShowStepByStep] = useState(false);
  const [showVerificationWhatIf, setShowVerificationWhatIf] = useState(false);
  const [userOwnWords, setUserOwnWords] = useState('');
  const [showOwnWordsFeedback, setShowOwnWordsFeedback] = useState(false);

  if (!exp) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
        Nenhuma experiência configurada para este nível.
      </div>
    );
  }

  const handlePracticeSelect = (exerciseId: string, optionId: string) => {
    setPracticeAnswers((prev) => ({ ...prev, [exerciseId]: optionId }));
  };

  return (
    <div className="space-y-6">
      {/* 1. DESPERTAR A CURIOSIDADE (Curiosity Hook) */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-sky-50/70 border border-blue-100 rounded-2xl p-6 relative overflow-hidden shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded-md font-bold">
            1. Despertar a Curiosidade
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">
          {exp.curiosityHook.question}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
          {exp.curiosityHook.scenario}
        </p>
        <div className="p-3.5 rounded-xl bg-blue-600/10 border border-blue-200 text-blue-900 text-xs sm:text-sm font-medium flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span>{exp.curiosityHook.spark}</span>
        </div>
      </section>

      {/* 2. PORQUE É QUE ISTO EXISTE? (Why It Exists) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-md font-bold">
            2. Porque é que isto existe no mundo real?
          </span>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
          {exp.whyItExists.problemItSolves}
        </p>

        {exp.whyItExists.realWorldContexts && exp.whyItExists.realWorldContexts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {exp.whyItExists.realWorldContexts.map((ctx, idx: number) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600"
              >
                <span className="text-blue-700 font-mono font-bold block mb-1">
                  {ctx.area}
                </span>
                <span className="leading-relaxed">{ctx.example}</span>
              </div>
            ))}
          </div>
        )}

        <div className="p-3.5 rounded-xl bg-blue-50/60 border-l-4 border-blue-500 text-xs sm:text-sm text-blue-900 italic font-medium">
          “{exp.whyItExists.ahaQuote}”
        </div>
      </section>

      {/* 3. INTUIÇÃO & METÁFORA VISUAL (Intuition) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md font-bold">
            3. Construção da Intuição
          </span>
        </div>
        <h4 className="text-lg font-display font-bold text-slate-900">
          {exp.intuition.headline}
        </h4>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {exp.intuition.storyOrAnalogy}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100">
            <span className="text-[10px] font-mono uppercase text-teal-800 block mb-1 font-bold">
              Ideia-Chave Intuitiva
            </span>
            <p className="text-xs sm:text-sm text-teal-950 font-semibold">
              {exp.intuition.keyTakeaway}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
            <span className="text-[10px] font-mono uppercase text-blue-800 block mb-1 font-bold">
              Metáfora Visual
            </span>
            <p className="text-xs sm:text-sm text-blue-950">
              {exp.intuition.visualMetaphor}
            </p>
          </div>
        </div>
      </section>

      {/* 4. PREVISÃO & TESTE NO SIMULADOR (Prediction Challenge) */}
      <section className="bg-white border border-blue-200 rounded-2xl p-6 space-y-4 shadow-xs ring-1 ring-blue-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded-md font-bold">
              4. Desafio: Prevê antes de Experimentar!
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Ver → Prever → Testar
          </span>
        </div>

        <p className="text-slate-800 text-sm sm:text-base font-semibold">
          {exp.predictionChallenge.question}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {exp.predictionChallenge.options.map((opt) => {
            const isPicked = predictionAnswer === opt.id;
            let optStyle =
              'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white text-slate-700';
            if (predictionAnswer) {
              if (opt.isCorrect) {
                optStyle =
                  'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold shadow-xs';
              } else if (isPicked && !opt.isCorrect) {
                optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
              } else {
                optStyle =
                  'bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => setPredictionAnswer(opt.id)}
                disabled={!!predictionAnswer}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optStyle}`}
              >
                <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold shrink-0 mt-0.5">
                  {opt.id.toUpperCase()}
                </span>
                <span className="leading-snug">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Prediction Feedback */}
        {predictionAnswer && (
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-2 animate-in fade-in">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-mono uppercase text-blue-800 font-bold">
                Instrução para testar no Simulador:
              </span>
            </div>
            <p className="text-slate-800 font-mono text-xs bg-white p-3 rounded-lg border border-blue-200 shadow-xs">
              {exp.predictionChallenge.simulatorInstruction}
            </p>
            {(() => {
              const opt = exp.predictionChallenge.options.find(
                (o) => o.id === predictionAnswer
              );
              return opt ? (
                <div
                  className={`p-3 rounded-lg mt-2 text-xs sm:text-sm leading-relaxed ${
                    opt.isCorrect
                      ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300 font-medium'
                      : 'bg-rose-100/70 text-rose-900 border border-rose-300'
                  }`}
                >
                  <span className="font-bold block mb-0.5">
                    {opt.isCorrect ? '✅ Resposta correta!' : '💡 Repara no resultado:'}
                  </span>
                  {opt.explanationAfterTest}
                </div>
              ) : null;
            })()}
          </div>
        )}
      </section>

      {/* 5. DESCOBERTA (Patterns Observed & Aha Moment) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-md font-bold">
            5. O que descobrimos ao mexer no simulador?
          </span>
        </div>
        <ul className="space-y-2">
          {exp.discovery.patternsObserved.map((pat: string, idx: number) => (
            <li
              key={idx}
              className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100"
            >
              <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>{pat}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 via-blue-50 to-white border border-indigo-200 text-indigo-950 text-xs sm:text-sm font-medium flex items-start gap-2.5">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono uppercase text-indigo-700 font-bold block mb-0.5">
              Momento Eureka / Aha!
            </span>
            <span>{exp.discovery.ahaMoment}</span>
          </div>
        </div>
      </section>

      {/* 6. FORMALIZAÇÃO (Definitions, Formulas & Common Mistakes) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-5 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md font-bold">
            6. Formalização Matemática & Símbolos
          </span>
        </div>
        <h4 className="text-lg font-display font-bold text-slate-900">
          {exp.formalization.title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed">
          {exp.formalization.explanation}
        </p>

        {/* Formulas table */}
        {exp.formalization.formulas && exp.formalization.formulas.length > 0 && (
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-mono uppercase text-slate-500 block font-bold">
              Notação e Significado em Português Claro:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {exp.formalization.formulas.map((form, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <code className="text-blue-700 font-mono text-sm font-bold bg-white px-2 py-1 rounded border border-blue-100">
                    {form.symbol}
                  </code>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {form.meaningInPlainPortuguese}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Mistakes */}
        {exp.formalization.commonMistakes && exp.formalization.commonMistakes.length > 0 && (
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 space-y-2 mt-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-rose-800 font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-600" /> Erros Frequentes a Evitar
            </div>
            <ul className="space-y-1.5">
              {exp.formalization.commonMistakes.map((mis: string, idx: number) => (
                <li
                  key={idx}
                  className="text-xs text-rose-900 flex items-start gap-2"
                >
                  <span className="text-rose-600 font-bold shrink-0">⚠️</span>
                  <span>{mis}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 7. EXEMPLO RESOLVIDO PASSO A PASSO (Solved Example) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md font-bold">
              7. Exemplo Resolvido Passo a Passo
            </span>
          </div>
          <button
            onClick={() => setShowStepByStep(!showStepByStep)}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100"
          >
            <span>{showStepByStep ? 'Ocultar Passos' : 'Ver Resolução Completa'}</span>
            <ChevronRight
              className={`w-3.5 h-3.5 transition-transform ${
                showStepByStep ? 'rotate-90' : ''
              }`}
            />
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1 font-semibold">
            Enunciado do Problema:
          </span>
          <p className="text-sm font-semibold text-slate-900">
            {exp.solvedExample.problemStatement}
          </p>
        </div>

        {showStepByStep && (
          <div className="space-y-3 pt-1 animate-in fade-in">
            {exp.solvedExample.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 shadow-xs"
              >
                <div className="flex items-center justify-between text-slate-500">
                  <span className="font-mono font-bold text-blue-700">
                    Passo {step.stepNumber}: {step.title}
                  </span>
                </div>
                <div className="font-mono text-slate-900 text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-semibold">
                  {step.mathExpression}
                </div>
                <p className="text-slate-600 text-[11px] italic">
                  💡 Porquê: {step.intuitiveWhy}
                </p>
              </div>
            ))}

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold">
              Conclusão Final: {exp.solvedExample.finalConclusion}
            </div>
          </div>
        )}
      </section>

      {/* 8. TENTA TU (Diagnostic Practice) */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded-md font-bold">
            8. Tenta Tu — Feedback Diagnóstico
          </span>
        </div>

        <p className="text-slate-900 text-sm sm:text-base font-semibold">
          {exp.tryItYourself.prompt}
        </p>

        <div className="space-y-2.5">
          {exp.tryItYourself.options.map((opt: DiagnosticOption) => {
            const isPicked = tryItAnswer === opt.id;
            let optStyle =
              'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white text-slate-700';
            if (tryItAnswer) {
              if (opt.isCorrect) {
                optStyle =
                  'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold';
              } else if (isPicked && !opt.isCorrect) {
                optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
              } else {
                optStyle =
                  'bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => setTryItAnswer(opt.id)}
                disabled={!!tryItAnswer}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optStyle}`}
              >
                <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold shrink-0">
                  {opt.id.toUpperCase()}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {tryItAnswer && (() => {
          const opt = exp.tryItYourself.options.find((o) => o.id === tryItAnswer);
          if (!opt) return null;

          return (
            <div
              className={`p-4 rounded-xl border text-xs space-y-2 animate-in fade-in ${
                opt.isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 text-sm">
                {opt.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Resposta Correta!
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    Diagnóstico do Teu Raciocínio:
                  </>
                )}
              </div>
              <p className="leading-relaxed">{opt.whyWrongOrRight}</p>
              <div className="pt-1 text-xs text-slate-700 font-mono bg-white p-2.5 rounded-lg border border-slate-200">
                🧠 Como pensar: {opt.howToThink}
              </div>
            </div>
          );
        })()}
      </section>

      {/* 9. PRÁTICA PROGRESSIVA (Tiered Exercises) */}
      {exp.practiceExercises && exp.practiceExercises.length > 0 && (
        <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md font-bold">
              9. Prática Progressiva (Base → Intermédio → Exame)
            </span>
          </div>

          <div className="space-y-6">
            {exp.practiceExercises.map((ex: ProgressiveExercise) => {
              const selected = practiceAnswers[ex.id];
              const chosen = ex.options.find((o) => o.id === selected);

              return (
                <div
                  key={ex.id}
                  className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-200 font-bold">
                      Nível: {ex.tier}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Dica: {ex.hint}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900">
                    {ex.question}
                  </p>

                  <div className="space-y-2">
                    {ex.options.map((opt: DiagnosticOption) => {
                      const isPicked = selected === opt.id;
                      let optStyle =
                        'bg-white border-slate-200 hover:border-blue-400 text-slate-700';
                      if (selected) {
                        if (opt.isCorrect) {
                          optStyle =
                            'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold';
                        } else if (isPicked && !opt.isCorrect) {
                          optStyle =
                            'bg-rose-50 border-rose-400 text-rose-900';
                        } else {
                          optStyle =
                            'bg-white/50 border-slate-200/50 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handlePracticeSelect(ex.id, opt.id)}
                          disabled={!!selected}
                          className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${optStyle}`}
                        >
                          <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-bold shrink-0">
                            {opt.id.toUpperCase()}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {chosen && (
                    <div
                      className={`p-3.5 rounded-lg text-xs leading-relaxed mt-2 border ${
                        chosen.isCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-rose-50 border-rose-300 text-rose-900'
                      }`}
                    >
                      <div className="font-bold mb-1">
                        {chosen.isCorrect ? '✅ Resposta Certa!' : '❌ Diagnóstico:'}
                      </div>
                      <p>{chosen.whyWrongOrRight}</p>
                      <p className="text-[11px] text-slate-700 mt-1 font-mono">
                        Como pensar: {chosen.howToThink}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 10. DESAFIO & EXAME NACIONAL (Exam Challenge) */}
      {exp.examChallenge && (
        <section className="bg-gradient-to-br from-blue-50/60 via-white to-sky-50/40 border border-blue-300 rounded-2xl p-6 space-y-4 shadow-sm ring-1 ring-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-300 px-2.5 py-0.5 rounded-md font-bold">
                10. Desafio & Exame Nacional
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-600 text-white font-bold">
              {exp.examChallenge.contextTag}
            </span>
          </div>

          <p className="text-slate-900 text-sm sm:text-base font-bold leading-relaxed">
            {exp.examChallenge.problem}
          </p>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 font-medium">
            🎯 Dica de Estratégia de Exame: {exp.examChallenge.strategyTip}
          </div>

          <div className="space-y-2.5">
            {exp.examChallenge.options.map((opt: DiagnosticOption) => {
              const isPicked = examAnswer === opt.id;
              let optStyle =
                'bg-white border-slate-200 hover:border-blue-400 text-slate-700';
              if (examAnswer) {
                if (opt.isCorrect) {
                  optStyle =
                    'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs';
                } else if (isPicked && !opt.isCorrect) {
                  optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                } else {
                  optStyle =
                    'bg-white/50 border-slate-200/50 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => setExamAnswer(opt.id)}
                  disabled={!!examAnswer}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optStyle}`}
                >
                  <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-bold shrink-0">
                    {opt.id.toUpperCase()}
                  </span>
                  <span className="leading-snug">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {examAnswer && (() => {
            const opt = exp.examChallenge.options.find((o) => o.id === examAnswer);
            if (!opt) return null;

            return (
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 animate-in fade-in ${
                  opt.isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}
              >
                <div className="font-bold text-sm">
                  {opt.isCorrect ? '🏆 Critério Cumprido na Totalidade!' : '⚠️ Correção de Exame:'}
                </div>
                <p>{opt.whyWrongOrRight}</p>
                <p className="text-xs text-slate-700 font-mono bg-white p-2.5 rounded-lg border border-slate-200">
                  Estratégia de Resolução: {opt.howToThink}
                </p>
              </div>
            );
          })()}
        </section>
      )}

      {/* 11. VERIFICAÇÃO PROFUNDA (Method, What-If & Own Words) */}
      {exp.verification && (
        <section className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md font-bold">
              11. Verificação Profunda do Domínio
            </span>
          </div>

          {/* Method criteria check */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 block">
              {exp.verification.methodQuestion}
            </span>
            <div className="space-y-1.5">
              {exp.verification.methodCriteria.map((crit: string, idx: number) => (
                <div
                  key={idx}
                  className="text-xs text-slate-700 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What-if scenario */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">
                Cenário Contrafatual: {exp.verification.whatIfQuestion}
              </span>
              <button
                onClick={() => setShowVerificationWhatIf(!showVerificationWhatIf)}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold cursor-pointer bg-white px-2 py-0.5 rounded border border-blue-200"
              >
                {showVerificationWhatIf ? 'Ocultar Resposta' : 'Revelar'}
              </button>
            </div>
            {showVerificationWhatIf && (
              <p className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 animate-in fade-in">
                {exp.verification.whatIfAnswer}
              </p>
            )}
          </div>

          {/* Own words synthesis */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-800 block">
              {exp.verification.ownWordsPrompt}
            </span>
            <textarea
              rows={3}
              placeholder="Escreve aqui em 2 ou 3 frases o conceito com as tuas palavras..."
              value={userOwnWords}
              onChange={(e) => setUserOwnWords(e.target.value)}
              className="w-full p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={() => setShowOwnWordsFeedback(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer transition-colors shadow-xs"
            >
              Verificar Ideias-Chave da Minha Síntese
            </button>

            {showOwnWordsFeedback && (
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs space-y-2 animate-in fade-in">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">
                  A tua síntese deve conter estas ideias essenciais:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.verification.keyIdeasToInclude.map((idea: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium"
                    >
                      ✓ {idea}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
