import { MathCurriculum, MathTopic } from '../types/math';
import { functionsTopic } from './topics/functions';
import { probabilityTopic } from './topics/probability';
import { trigonometryTopic } from './topics/trigonometry';
import { complexTopic } from './topics/complex';
import { geometryTopic } from './topics/geometry';
import { sequencesTopic } from './topics/sequences';
import { calculusTopic } from './topics/calculus';

export const CURRICULUM_TOPICS: MathTopic[] = [
  functionsTopic,
  calculusTopic,
  probabilityTopic,
  trigonometryTopic,
  complexTopic,
  geometryTopic,
  sequencesTopic,
];

export const MATH_CURRICULUM: MathCurriculum = {
  grade: '12.º Ano',
  title: 'Matemática A — Programa Completo 12.º Ano',
  description: 'Plataforma interativa com aprendizagem adaptativa e multinível (6, 10, 14, 18 anos e Adulto)',
  topics: CURRICULUM_TOPICS,
};

export function findTopicById(id: string): MathTopic | undefined {
  return CURRICULUM_TOPICS.find((t) => t.id === id);
}

export function findSubtopicById(topicId: string, subtopicId: string) {
  const topic = findTopicById(topicId);
  if (!topic) return undefined;
  const subtopic = topic.subtopics.find((s) => s.id === subtopicId);
  return subtopic ? { topic, subtopic } : undefined;
}
