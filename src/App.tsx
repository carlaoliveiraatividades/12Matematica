import React, { useState } from 'react';
import { AgeLevel, MathTopic, SubTopic } from './types/math';
import { CURRICULUM_TOPICS, MATH_CURRICULUM } from './data/curriculum';
import { Sidebar } from './components/Sidebar';
import { TopicsListSidebar } from './components/TopicsListSidebar';
import { TopNavbar } from './components/TopNavbar';
import { ConceptHero } from './components/ConceptHero';
import { AgeLearningSelector } from './components/AgeLearningSelector';
import { StepTabs, StepTabId } from './components/StepTabs';
import { MainInteractiveArea } from './components/MainInteractiveArea';
import { BottomActionCards } from './components/BottomActionCards';
import { InteractiveModal } from './components/InteractiveModal';
import { StepContentRenderer } from './components/StepContentRenderer';

export default function App() {
  // Navigation State
  const [activeNav, setActiveNav] = useState<string>('matematica');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('funcoes');
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>('derivas-aplicacoes');
  const [currentLevel, setCurrentLevel] = useState<AgeLevel>('18');
  const [activeStep, setActiveStep] = useState<StepTabId>('ideia-principal');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active modal state
  const [modalAction, setModalAction] = useState<'real-world' | 'guided-example' | 'try-yourself' | 'exam-exercises' | null>(null);

  // Derive active Topic & Subtopic
  const currentTopic: MathTopic =
    CURRICULUM_TOPICS.find((t) => t.id === selectedTopicId) ||
    CURRICULUM_TOPICS[0];

  const currentSubtopic: SubTopic =
    currentTopic.subtopics.find((s) => s.id === selectedSubtopicId) ||
    currentTopic.subtopics[0];

  // Topic/Subtopic switch handler
  const handleSelectTopicAndSubtopic = (topicId: string, subtopicId: string) => {
    setSelectedTopicId(topicId);
    setSelectedSubtopicId(subtopicId);
    setActiveStep('ideia-principal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex font-sans antialiased">
      {/* 1. Left Primary Dark Sidebar */}
      <Sidebar activeNav={activeNav} onSelectNav={setActiveNav} />

      {/* 2. Secondary Topics Sidebar (Conteúdos do 12.º ano) */}
      <TopicsListSidebar
        curriculum={MATH_CURRICULUM}
        selectedTopicId={selectedTopicId}
        selectedSubtopicId={selectedSubtopicId}
        onSelectTopicAndSubtopic={handleSelectTopicAndSubtopic}
      />

      {/* 3. Main Central Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <TopNavbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Content Container */}
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">
          {/* Concept Hero (Breadcrumb + Title card + 'Porque é importante?' card) */}
          <ConceptHero
            topic={currentTopic}
            subtopic={currentSubtopic}
          />

          {/* 'Como queres aprender?' 5-Age Avatar Selector */}
          <AgeLearningSelector
            currentLevel={currentLevel}
            onSelectLevel={setCurrentLevel}
          />

          {/* 8-Step Navigation Tabs */}
          <StepTabs
            activeStep={activeStep}
            onSelectStep={setActiveStep}
          />

          {/* Conditional Step View Rendering */}
          {activeStep === 'ideia-principal' || activeStep === 'explora' ? (
            <>
              {/* Main Interactive Simulator & Exploration Area */}
              <MainInteractiveArea
                level={currentLevel}
                onSelectLevel={setCurrentLevel}
                onOpenActionModal={setModalAction}
              />

              {/* Bottom 4 Action Cards */}
              <BottomActionCards
                onOpenModal={(action) => setModalAction(action)}
              />
            </>
          ) : (
            /* Dedicated Step Content for other tabs (Aprende, Exemplo resolvido, Tenta tu, Pratica, Desafio, Exame) */
            <StepContentRenderer
              step={activeStep}
              subtopic={currentSubtopic}
              level={currentLevel}
            />
          )}
        </main>
      </div>

      {/* Interactive Detail Modal */}
      <InteractiveModal
        actionType={modalAction}
        subtopic={currentSubtopic}
        level={currentLevel}
        onClose={() => setModalAction(null)}
      />
    </div>
  );
}
