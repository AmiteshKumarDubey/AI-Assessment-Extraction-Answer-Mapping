'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnswerMapping, Question, BoundingBox } from '@/types/assessment';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';

interface AnswerViewerProps {
  answerSheetImages: string[];
  questionPaperImages: string[];
  activeAnswer: AnswerMapping | null;
  activeQuestion: Question | null;
  allAnswers: AnswerMapping[];
}

export const AnswerViewer: React.FC<AnswerViewerProps> = ({
  answerSheetImages,
  questionPaperImages,
  activeAnswer,
  activeQuestion,
  allAnswers,
}) => {
  const [viewMode, setViewMode] = useState<'answer_sheet' | 'question_paper'>('answer_sheet');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Automatically switch page when active answer selection changes
  useEffect(() => {
    if (activeAnswer && viewMode === 'answer_sheet') {
      const targetPage = activeAnswer.pageIndex;
      if (targetPage >= 0 && targetPage < (answerSheetImages.length || 1)) {
        setCurrentPage(targetPage);
      }
    }
  }, [activeAnswer, viewMode, answerSheetImages]);

  const currentImages = viewMode === 'answer_sheet' ? answerSheetImages : questionPaperImages;
  const totalPages = currentImages.length || 1;

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Filter answers present on current page
  const pageAnswers = allAnswers.filter((ans) => {
    if (ans.pageIndex === currentPage) return true;
    if (ans.multiPageRegions?.some((r) => r.pageIndex === currentPage)) return true;
    return false;
  });

  const activeDocSrc = currentImages[currentPage] || currentImages[0];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0F172A] text-white relative overflow-hidden">
      {/* Custom Viewport Toolbar */}
      <div className="h-12 bg-[#1E293B] border-b border-[#334155] px-4 flex items-center justify-between z-20 shadow-sm">
        {/* Toggle Mode Control */}
        <div className="flex items-center gap-1 bg-[#0F172A] p-1 rounded-lg border border-[#334155]">
          <button
            onClick={() => setViewMode('answer_sheet')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'answer_sheet'
                ? 'bg-[#6366F1] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Answer Sheet (Canvas Overlay)</span>
          </button>

          <button
            onClick={() => setViewMode('question_paper')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'question_paper'
                ? 'bg-[#6366F1] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Question Paper</span>
          </button>
        </div>

        {/* Page Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="p-1 rounded-md bg-[#0F172A] border border-[#334155] text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-bold text-slate-300 px-1">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            className="p-1 rounded-md bg-[#0F172A] border border-[#334155] text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Multi-page Region Jumps */}
        {activeAnswer?.multiPageRegions && activeAnswer.multiPageRegions.length > 1 && viewMode === 'answer_sheet' && (
          <div className="hidden md:flex items-center gap-1.5 bg-[#0F172A] px-2.5 py-1 rounded-lg border border-purple-500/30">
            <span className="text-[11px] text-purple-300 font-semibold flex items-center gap-1">
              <Layers className="w-3 h-3" /> Multi-page Span:
            </span>
            {activeAnswer.multiPageRegions.map((region) => (
              <button
                key={region.pageIndex}
                onClick={() => setCurrentPage(region.pageIndex)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  currentPage === region.pageIndex
                    ? 'bg-purple-600 text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-purple-900/50'
                }`}
              >
                Page {region.pageIndex + 1}
              </button>
            ))}
          </div>
        )}

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 bg-[#0F172A] p-1 rounded-lg border border-[#334155]">
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
            className="p-1 rounded text-slate-400 hover:text-white"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          <span className="text-[11px] font-mono font-bold text-slate-400 px-1 min-w-[36px] text-center">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button
            onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.15))}
            className="p-1 rounded text-slate-400 hover:text-white"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setZoomLevel(1)}
            className="p-1 rounded text-slate-400 hover:text-white"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Synchronized Custom Canvas Scroll Workspace */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto p-6 flex items-start justify-center relative bg-[#0F172A] custom-scrollbar"
      >
        {activeDocSrc ? (
          <div 
            className="relative transition-transform duration-200 ease-out origin-top shadow-2xl rounded-xl border border-[#334155] bg-white inline-block overflow-hidden"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Render document page clean image without raw browser PDF toolbar */}
            <img
              src={activeDocSrc}
              alt=""
              className="max-w-[780px] w-full h-auto block select-none"
            />

            {/* Synchronized SVG Bounding Box Overlays */}
            {viewMode === 'answer_sheet' && (
              <div className="absolute inset-0 pointer-events-none">
                {pageAnswers.map((ans) => {
                  const isActive = activeAnswer?.id === ans.id;
                  
                  let box: BoundingBox = ans.boundingBox;
                  if (ans.multiPageRegions && ans.multiPageRegions.length > 0) {
                    const pageRegion = ans.multiPageRegions.find((r) => r.pageIndex === currentPage);
                    if (pageRegion) box = pageRegion.boundingBox;
                  }

                  if (!box || (box.width === 0 && box.height === 0)) return null;

                  return (
                    <div
                      key={ans.id}
                      className={`absolute rounded-xl border-2 transition-all duration-300 pointer-events-auto ${
                        isActive
                          ? 'border-[#6366F1] bg-[#6366F1]/20 ring-4 ring-[#6366F1]/30 shadow-[0_0_25px_rgba(99,102,241,0.6)] z-30 animate-pulse'
                          : 'border-indigo-400/50 bg-indigo-500/5 hover:border-[#6366F1] hover:bg-indigo-500/10 z-10'
                      }`}
                      style={{
                        left: `${box.x}%`,
                        top: `${box.y}%`,
                        width: `${box.width}%`,
                        height: `${box.height}%`,
                      }}
                    >
                      {/* Bounding Box Badges Flex Wrapper (Side-by-side without overlapping) */}
                      <div className="absolute -top-4 left-2 z-40 flex flex-row items-center gap-1.5 whitespace-nowrap pointer-events-none">
                        <span className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] shadow-lg flex items-center gap-1 ${
                          isActive
                            ? 'bg-[#6366F1] text-white ring-2 ring-white/20'
                            : 'bg-[#1E293B] text-indigo-300 border border-[#334155]'
                        }`}>
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          {ans.detectedQuestionLabel}
                          {ans.status === 'graded' && ` • ${ans.score}/${ans.maxScore}`}
                        </span>

                        {ans.isOutOfOrder && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-mono font-extrabold text-[10px] uppercase shadow-lg">
                            OUT OF ORDER
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-500 space-y-2">
            <BookOpen className="w-12 h-12 stroke-[1.5]" />
            <p className="text-sm font-medium text-slate-400">No document page image available.</p>
          </div>
        )}
      </div>
    </div>
  );
};
