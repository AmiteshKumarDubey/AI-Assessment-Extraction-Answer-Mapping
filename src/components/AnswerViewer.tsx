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
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      {/* Custom Viewport Toolbar */}
      <div className="h-12 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-20 shadow-xs">
        {/* Toggle Mode Control */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('answer_sheet')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'answer_sheet'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Answer Sheet (Canvas Overlay)</span>
          </button>

          <button
            onClick={() => setViewMode('question_paper')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'question_paper'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
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
            className="p-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-bold text-slate-700 px-1">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            className="p-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Multi-page Region Jumps */}
        {activeAnswer?.multiPageRegions && activeAnswer.multiPageRegions.length > 1 && viewMode === 'answer_sheet' && (
          <div className="hidden md:flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-xl border border-purple-200">
            <span className="text-[11px] text-purple-700 font-bold flex items-center gap-1">
              <Layers className="w-3 h-3" /> Multi-page Span:
            </span>
            {activeAnswer.multiPageRegions.map((region) => (
              <button
                key={region.pageIndex}
                onClick={() => setCurrentPage(region.pageIndex)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold transition-all ${
                  currentPage === region.pageIndex
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-purple-50'
                }`}
              >
                Page {region.pageIndex + 1}
              </button>
            ))}
          </div>
        )}

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
            className="p-1 rounded-lg text-slate-600 hover:text-slate-900"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          <span className="text-[11px] font-mono font-bold text-slate-700 px-1 min-w-[36px] text-center">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button
            onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.15))}
            className="p-1 rounded-lg text-slate-600 hover:text-slate-900"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setZoomLevel(1)}
            className="p-1 rounded-lg text-slate-600 hover:text-slate-900"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Synchronized Custom Canvas Scroll Workspace */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto p-6 flex items-start justify-center relative bg-[#f8fafc] custom-scrollbar"
      >
        {activeDocSrc ? (
          <div 
            className="relative transition-transform duration-200 ease-out origin-top shadow-xl rounded-2xl border border-slate-200 bg-white inline-block overflow-hidden"
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
                      className={`absolute rounded-2xl border-2 transition-all duration-300 pointer-events-auto ${
                        isActive
                          ? 'border-orange-500 bg-orange-500/15 ring-4 ring-orange-500/25 shadow-lg z-30 animate-pulse'
                          : 'border-orange-400/40 bg-orange-500/5 hover:border-orange-500 hover:bg-orange-500/10 z-10'
                      }`}
                      style={{
                        left: `${box.x}%`,
                        top: `${box.y}%`,
                        width: `${box.width}%`,
                        height: `${box.height}%`,
                      }}
                    >
                      {/* Bounding Box Badges Flex Wrapper (Side-by-side without overlapping) */}
                      <div className="absolute -top-3.5 left-2 z-40 flex flex-row items-center gap-1.5 whitespace-nowrap pointer-events-none">
                        <span className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] shadow-sm flex items-center gap-1 ${
                          isActive
                            ? 'bg-slate-900 text-white ring-2 ring-orange-400'
                            : 'bg-white text-slate-800 border border-slate-200'
                        }`}>
                          <Sparkles className="w-3 h-3 text-orange-400" />
                          {ans.detectedQuestionLabel}
                          {ans.status === 'graded' && ` • ${ans.score}/${ans.maxScore}`}
                        </span>

                        {ans.isOutOfOrder && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white font-mono font-extrabold text-[10px] uppercase shadow-xs">
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
            <p className="text-sm font-medium text-slate-500">No document page image available.</p>
          </div>
        )}
      </div>
    </div>
  );
};
