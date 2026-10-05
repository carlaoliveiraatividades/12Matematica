export type AgeLevel = '6' | '10' | '14' | '18' | 'adulto';

export type SimulatorType =
  | 'derivatives'
  | 'limits'
  | 'functions'
  | 'trigonometry'
  | 'probability'
  | 'sequences'
  | 'complex'
  | 'geometry';

export interface AgeLevelMeta {
  id: AgeLevel;
  badge: string;
  label: string;
  quote: string;
  subtitle: string;
  focusDescription: string;
  pedagogicalGoal: string;
  simComplexityLabel: string;
}

export interface DiagnosticOption {
  id: string;
  text: string;
  isCorrect: boolean;
  whyWrongOrRight: string;
  howToThink: string;
}

export interface SolvedStep {
  stepNumber: number;
  title: string;
  mathExpression: string;
  intuitiveWhy: string;
}

export interface ProgressiveExercise {
  id: string;
  tier: 'Base' | 'Intermédio' | 'Exame / Desafio' | 'Desafio / Mundo Real';
  question: string;
  hint: string;
  options: DiagnosticOption[];
}

export interface VerificationCheck {
  methodQuestion: string;
  methodCriteria: string[];
  whatIfQuestion: string;
  whatIfAnswer: string;
  ownWordsPrompt: string;
  keyIdeasToInclude: string[];
}

export interface LevelExperience {
  level: AgeLevel;
  /** 1. DESPERTAR A CURIOSIDADE */
  curiosityHook: {
    question: string;
    scenario: string;
    spark: string;
  };
  /** Especialmente para Adulto (e disponível para todos): "Porque é que isto existe?" */
  whyItExists: {
    problemItSolves: string;
    realWorldContexts: { area: string; example: string }[];
    ahaQuote: string;
  };
  /** 2. INTUIÇÃO */
  intuition: {
    headline: string;
    storyOrAnalogy: string;
    keyTakeaway: string;
    visualMetaphor: string;
  };
  /** 3. EXPLORAÇÃO & PREVISÃO (VER -> EXPERIMENTAR -> PREVER -> TESTAR) */
  predictionChallenge: {
    question: string;
    options: {
      id: string;
      label: string;
      isCorrect: boolean;
      explanationAfterTest: string;
    }[];
    simulatorInstruction: string;
  };
  /** 4. DESCOBERTA */
  discovery: {
    patternsObserved: string[];
    ahaMoment: string;
  };
  /** 5. FORMALIZAÇÃO */
  formalization: {
    title: string;
    explanation: string;
    formulas: {
      symbol: string;
      meaningInPlainPortuguese: string;
    }[];
    commonMistakes?: string[];
  };
  /** 6. EXEMPLO RESOLVIDO PASSO A PASSO */
  solvedExample: {
    problemStatement: string;
    steps: SolvedStep[];
    finalConclusion: string;
  };
  /** 7 & 8. TENTA TU + FEEDBACK DIAGNÓSTICO */
  tryItYourself: {
    prompt: string;
    options: DiagnosticOption[];
  };
  /** 9. PRÁTICA PROGRESSIVA */
  practiceExercises: ProgressiveExercise[];
  /** 10. DESAFIO & EXAME NACIONAL */
  examChallenge: {
    contextTag: string;
    problem: string;
    strategyTip: string;
    options: DiagnosticOption[];
  };
  /** 11. VERIFICAÇÃO PROFUNDA */
  verification: VerificationCheck;
}

export interface SubTopic {
  id: string;
  title: string;
  shortDescription: string;
  simulatorType: SimulatorType;
  simulatorDefaultPreset: string;
  coreIdeaInOneSentence: string;
  progressionRoadmap: {
    level: AgeLevel;
    summary: string;
  }[];
  experiences: Record<AgeLevel, LevelExperience>;
}

export interface MathTopic {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  curriculumTag: string;
  realWorldHook: string;
  subtopics: SubTopic[];
}

export interface MathCurriculum {
  grade: string;
  title: string;
  description: string;
  topics: MathTopic[];
}
