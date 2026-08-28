'use client';

import React, { useState } from 'react';
import { Question, AnswerMapping, FilterStatus } from '@/types/assessment';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCw, 
  HelpCircle, 
  Layers
} from 'lucide-react';

interface QuestionListProps {
  questions: Question[];
  answers: AnswerMapping[];
  selectedQuestionId: string | null;
  selectedAnswerId: string | null;
  onSelectQuestion: (questionId: string | null, answerId: string | null) => void;
  activeFilter: FilterStatus;
}

export const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  answers,
  selectedQuestionId,
  selectedAnswerId,
  onSelectQuestion,
  activeFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const answerByQuestionId = new Map<string, AnswerMapping>();
  const unmappedAnswers: AnswerMapping[] = [];

  answers.forEach((ans) => {
    if (ans.questionId) {
      answerByQuestionId.set(ans.questionId, ans);
    } else if (ans.status === 'unmapped') {
      unmappedAnswers.push(ans);
    }
  });

  const filteredQuestions = questions.filter((q) => {
    const ans = answerByQuestionId.get(q.id);
    const matchesSearch = 
      q.numberLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.text.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === 'all') return true;
    if (activeFilter === 'graded') return ans && ans.status === 'graded';
    if (activeFilter === 'unanswered') return (!ans || ans.status === 'unanswered');
    if (activeFilter === 'out_of_order') return ans && ans.isOutOfOrder;
    if (activeFilter === 'unmapped') return false;
    return true;
  });

  const showUnmappedList = activeFilter === 'all' || activeFilter === 'unmapped';

  return (
    <div className="flex flex-col h-full bg-[#0F172A] border-r border-[#334155] text-white w-full lg:w-96 shrink-0">
      {/* Sidebar Header & Search */}
      <div className="p-4 border-b border-[#334155] space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            Extracted Questions ({questions.length})
          </h3>
          <span className="text-[11px] text-slate-400">Printed Order</span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Q1, 11(a)..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#1E293B] border border-[#334155] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#6366F1]"
          />
        </div>
      </div>

      {/* Questions Scrollable List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
        {filteredQuestions.map((q) => {
          const ans = answerByQuestionId.get(q.id);
          const isSelected = selectedQuestionId === q.id;
          const isUnanswered = !ans || ans.status === 'unanswered';
          const isSubPart = !!q.parentNumber;
          const isOutOfOrder = ans?.isOutOfOrder;

          return (
            <div
              key={q.id}
              onClick={() => onSelectQuestion(q.id, ans?.id || null)}
              className={`group p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'bg-[#1E293B] border-[#6366F1] shadow-lg ring-1 ring-[#6366F1]/50'
                  : 'bg-[#1E293B]/70 border-[#334155] hover:border-slate-500 hover:bg-[#1E293B]'
              }`}
            >
              {/* Active Selection Indicator */}
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6366F1]" />
              )}

              {/* Header row: Question Number + Marks */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Number Badge */}
                  <span className={`px-2.5 py-1 rounded-lg font-mono font-bold text-xs ${
                    isUnanswered 
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      : isSelected 
                      ? 'bg-[#6366F1] text-white shadow'
                      : 'bg-[#0F172A] text-indigo-300 border border-[#334155]'
                  }`}>
                    Q {q.numberLabel}
                  </span>

                  {/* Sub-part Tag */}
                  {isSubPart && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      Sub-part
                    </span>
                  )}

                  {/* Out of order Tag */}
                  {isOutOfOrder && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                      <RotateCw className="w-2.5 h-2.5" /> Out of Order
                    </span>
                  )}

                  {/* Unanswered Tag */}
                  {isUnanswered && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                      <AlertTriangle className="w-2.5 h-2.5" /> Unanswered
                    </span>
                  )}
                </div>

                {/* Score */}
                <div className="text-right shrink-0">
                  {ans && ans.status === 'graded' ? (
                    <span className="text-xs font-mono font-extrabold text-emerald-400">
                      {ans.score} / {q.maxMarks}
                    </span>
                  ) : (
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0 / {q.maxMarks}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text Snippet */}
              <p className="text-xs text-slate-300 line-clamp-2 pr-4 leading-relaxed">
                {q.text}
              </p>

              {/* Page Indicator Footer */}
              {ans && ans.status === 'graded' && (
                <div className="mt-2.5 pt-2 border-t border-[#334155]/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Mapped on Page {ans.pageIndex + 1}
                  </span>
                  {ans.multiPageRegions && ans.multiPageRegions.length > 1 && (
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                      Multi-page ({ans.multiPageRegions.length} pages)
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Unmapped Answers Section */}
        {showUnmappedList && unmappedAnswers.length > 0 && (
          <div className="pt-4 border-t border-[#334155] space-y-2">
            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 px-1">
              <HelpCircle className="w-3.5 h-3.5" />
              Unmapped Student Responses ({unmappedAnswers.length})
            </h4>

            {unmappedAnswers.map((uAns) => {
              const isSelected = selectedAnswerId === uAns.id;
              return (
                <div
                  key={uAns.id}
                  onClick={() => onSelectQuestion(null, uAns.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E293B] border-purple-500 text-white shadow-lg'
                      : 'bg-[#1E293B]/70 border-[#334155] text-slate-300 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {uAns.detectedQuestionLabel}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Page {uAns.pageIndex + 1}</span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 italic">
                    "{uAns.extractedText}"
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
