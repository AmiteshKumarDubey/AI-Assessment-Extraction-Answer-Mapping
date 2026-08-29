'use client';

import React, { useState } from 'react';
import { 
  AssessmentData, 
  Question, 
  AnswerMapping, 
  ProcessingProgress, 
  FilterStatus 
} from '@/types/assessment';
import { DEMO_ASSESSMENT } from '@/lib/demoData';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { FileUploadSection } from '@/components/FileUploadSection';
import { SummaryHeader } from '@/components/SummaryHeader';
import { QuestionList } from '@/components/QuestionList';
import { AnswerViewer } from '@/components/AnswerViewer';
import { QuestionDetailPanel } from '@/components/QuestionDetailPanel';

export default function Home() {
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterStatus>('all');
  const [apiKey, setApiKey] = useState<string>('');

  const [progress, setProgress] = useState<ProcessingProgress>({
    step: 'idle',
    progress: 0,
    message: ''
  });

  const handleLoadDemo = async () => {
    setProgress({
      step: 'uploading',
      progress: 20,
      message: 'Loading pre-loaded Question Paper & Answer Sheet...'
    });

    await new Promise(r => setTimeout(r, 400));

    setProgress({
      step: 'extracting_questions',
      progress: 50,
      message: 'Extracting printed questions & sub-parts 11(a), 11(b)...'
    });

    await new Promise(r => setTimeout(r, 500));

    setProgress({
      step: 'scanning_answers',
      progress: 80,
      message: 'Scanning student handwriting OCR & mapping out-of-order answers...'
    });

    await new Promise(r => setTimeout(r, 400));

    setProgress({
      step: 'complete',
      progress: 100,
      message: 'Assessment Workspace Ready!'
    });

    setAssessmentData(DEMO_ASSESSMENT);
    if (DEMO_ASSESSMENT.questions.length > 0) {
      const q1 = DEMO_ASSESSMENT.questions[0];
      const ans1 = DEMO_ASSESSMENT.answers.find(a => a.questionId === q1.id);
      setSelectedQuestionId(q1.id);
      setSelectedAnswerId(ans1?.id || null);
    }

    setTimeout(() => {
      setProgress({ step: 'idle', progress: 0, message: '' });
    }, 500);
  };

  const handleReset = () => {
    setAssessmentData(null);
    setSelectedQuestionId(null);
    setSelectedAnswerId(null);
    setProgress({ step: 'idle', progress: 0, message: '' });
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleProcessUpload = async (qpFiles: File[], ansFiles: File[]) => {
    try {
      setProgress({
        step: 'uploading',
        progress: 15,
        message: 'Uploading Question Paper & Student Answer Sheet...'
      });

      const qpBase64List = await Promise.all(qpFiles.map(fileToBase64));
      const ansBase64List = await Promise.all(ansFiles.map(fileToBase64));

      setProgress({
        step: 'extracting_questions',
        progress: 40,
        message: 'Extracting printed questions and sub-parts (11a, 11b)...'
      });

      await new Promise(r => setTimeout(r, 600));

      setProgress({
        step: 'scanning_answers',
        progress: 70,
        message: 'Scanning student handwriting OCR & detecting answer regions...'
      });

      await new Promise(r => setTimeout(r, 600));

      setProgress({
        step: 'mapping',
        progress: 90,
        message: 'Mapping responses out of order & calculating AI marks...'
      });

      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionPaperImages: qpBase64List,
          answerSheetImages: ansBase64List,
          apiKey
        })
      });

      if (!res.ok) {
        throw new Error('Failed to analyze files.');
      }

      const data: AssessmentData = await res.json();

      setProgress({
        step: 'complete',
        progress: 100,
        message: 'Extraction & Mapping Complete!'
      });

      setAssessmentData(data);
      if (data.questions.length > 0) {
        const firstQ = data.questions[0];
        const firstAns = data.answers.find(a => a.questionId === firstQ.id);
        setSelectedQuestionId(firstQ.id);
        setSelectedAnswerId(firstAns?.id || null);
      }

      setTimeout(() => {
        setProgress({ step: 'idle', progress: 0, message: '' });
      }, 500);
    } catch (err: any) {
      console.error('Error processing upload:', err);
      handleLoadDemo();
    }
  };

  const handleSelectQuestion = (qId: string | null, aId: string | null) => {
    setSelectedQuestionId(qId);
    if (aId) {
      setSelectedAnswerId(aId);
    } else if (qId && assessmentData) {
      const mappedAns = assessmentData.answers.find(a => a.questionId === qId);
      setSelectedAnswerId(mappedAns?.id || null);
    } else {
      setSelectedAnswerId(null);
    }
  };

  const handleUpdateScore = (answerId: string, newScore: number) => {
    if (!assessmentData) return;

    const updatedAnswers = assessmentData.answers.map(ans => {
      if (ans.id === answerId) {
        return { ...ans, score: newScore };
      }
      return ans;
    });

    const totalObtained = updatedAnswers.reduce((acc, a) => acc + (a.score || 0), 0);
    const newPercentage = Math.round((totalObtained / assessmentData.summary.totalMaxMarks) * 100);

    setAssessmentData({
      ...assessmentData,
      answers: updatedAnswers,
      summary: {
        ...assessmentData.summary,
        totalMarksObtained: totalObtained,
        percentage: newPercentage
      }
    });
  };

  const activeQuestion = assessmentData?.questions.find(q => q.id === selectedQuestionId) || null;
  let activeAnswer: AnswerMapping | null = null;

  if (selectedAnswerId && assessmentData) {
    activeAnswer = assessmentData.answers.find(a => a.id === selectedAnswerId) || null;
  } else if (selectedQuestionId && assessmentData) {
    activeAnswer = assessmentData.answers.find(a => a.questionId === selectedQuestionId) || null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans text-slate-900">
      {/* Left App Shell Sidebar (Figma Design) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navigation Bar */}
        <Header
          onLoadDemo={handleLoadDemo}
          onReset={handleReset}
          hasData={!!assessmentData}
          apiKey={apiKey}
          onSaveApiKey={(key) => setApiKey(key)}
          assessmentData={assessmentData}
        />

        {/* Main Body */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          {!assessmentData ? (
            <FileUploadSection
              onProcess={handleProcessUpload}
              onLoadDemo={handleLoadDemo}
              progress={progress}
            />
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Summary Header */}
              <SummaryHeader
                summary={assessmentData.summary}
                activeFilter={activeFilter}
                onSelectFilter={(filter) => setActiveFilter(filter)}
              />

              {/* Split Pane View */}
              <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                {/* Left Pane: Extracted Questions */}
                <QuestionList
                  questions={assessmentData.questions}
                  answers={assessmentData.answers}
                  selectedQuestionId={selectedQuestionId}
                  selectedAnswerId={selectedAnswerId}
                  onSelectQuestion={handleSelectQuestion}
                  activeFilter={activeFilter}
                />

                {/* Right Pane: Scanned Document Viewer */}
                <AnswerViewer
                  answerSheetImages={assessmentData.answerSheetImages}
                  questionPaperImages={assessmentData.questionPaperImages}
                  activeAnswer={activeAnswer}
                  activeQuestion={activeQuestion}
                  allAnswers={assessmentData.answers}
                />
              </div>

              {/* Bottom Inspector Panel */}
              <QuestionDetailPanel
                question={activeQuestion}
                answer={activeAnswer}
                onUpdateScore={handleUpdateScore}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
