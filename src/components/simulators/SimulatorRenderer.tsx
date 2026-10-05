import React from 'react';
import { AgeLevel, SimulatorType } from '../../types/math';
import { DerivativesSimulator } from './DerivativesSimulator';
import { LimitsSimulator } from './LimitsSimulator';
import { FunctionsSimulator } from './FunctionsSimulator';
import { TrigonometrySimulator } from './TrigonometrySimulator';
import { ProbabilitySimulator } from './ProbabilitySimulator';
import { SequencesSimulator } from './SequencesSimulator';
import { ComplexSimulator } from './ComplexSimulator';
import { GeometrySimulator } from './GeometrySimulator';

interface SimulatorRendererProps {
  type: SimulatorType;
  level: AgeLevel;
  preset?: string;
}

export const SimulatorRenderer: React.FC<SimulatorRendererProps> = ({ type, level, preset }) => {
  switch (type) {
    case 'derivatives':
      return <DerivativesSimulator level={level} preset={preset} />;
    case 'limits':
      return <LimitsSimulator level={level} />;
    case 'functions':
      return <FunctionsSimulator level={level} />;
    case 'trigonometry':
      return <TrigonometrySimulator level={level} />;
    case 'probability':
      return <ProbabilitySimulator level={level} />;
    case 'sequences':
      return <SequencesSimulator level={level} />;
    case 'complex':
      return <ComplexSimulator level={level} />;
    case 'geometry':
      return <GeometrySimulator level={level} />;
    default:
      return <DerivativesSimulator level={level} />;
  }
};
