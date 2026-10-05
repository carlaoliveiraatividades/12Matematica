import React from 'react';
import { FileText, Edit3, Trophy, ArrowRight } from 'lucide-react';

interface BottomActionCardsProps {
  onOpenModal: (actionType: 'real-world' | 'guided-example' | 'try-yourself' | 'exam-exercises') => void;
}

export const BottomActionCards: React.FC<BottomActionCardsProps> = ({
  onOpenModal,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Aplica no mundo real */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-all">
        <div className="flex items-start gap-3">
          {/* Car illustration / image box */}
          <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-xl shrink-0 overflow-hidden shadow-xs relative">
            {/* Realistic stylized road & car representation */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-700 flex items-center justify-center">
              <span className="text-2xl">🏎️</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              Aplica no mundo real
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              As derivadas ajudam-nos a calcular a velocidade instantânea de um carro, a otimizar custos, a prever crescimento de populações e muito mais.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenModal('real-world')}
          className="w-full py-2 px-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Ver exemplos reais</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Exercício guiado */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              Exercício guiado
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Resolve passo a passo um exercício semelhante ao do exame.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenModal('guided-example')}
          className="w-full py-2 px-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Ver exemplo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Tenta tu */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
            <Edit3 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Tenta tu</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Resolve agora um exercício.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenModal('try-yourself')}
          className="w-full py-2 px-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Começar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4. Exercícios de exame */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              Exercícios de exame
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Pratica com exercícios de exames nacionais.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenModal('exam-exercises')}
          className="w-full py-2 px-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Ver exercícios</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
