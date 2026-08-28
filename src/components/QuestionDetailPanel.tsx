'use client';

import React from 'react';
import { Question, AnswerMapping } from '@/types/assessment';
import { 
  CheckCircle2, 
  AlertTriangle, 
  RotateCw, 
  Award, 
  Sparkles, 
  FileText,
  XCircle,
  Check
} from 'lucide-react';

interface QuestionDetailPanelProps {
  question: Question | null;
  answer: AnswerMapping | null;
  onUpdateScore?: (answerId: string, newScore: number) => void;
}

export const QuestionDetailPanel: React.FC<QuestionDetailPanelProps> = ({
  question,
  answer,
  onUpdateScore,
}) => {
  if (!question && !answer) {
    return (
      <div className="bg-[#1E293B] border-t border-[#334155] p-6 text-center text-slate-500 text-xs">
        Select a question from the left sidebar to view extraction mapping &amp; AI evaluation details.
      </div>
    );
  }

  const isUnanswered = answer?.status === 'unanswered' || (!answer && question);

  return (
    <div className="bg-[#1E293B] border-t border-[#334155] p-4 lg:p-6 text-white max-h-[380px] overflow-y-auto custom-scrollbar shadow-2xl">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header Row: Question Label + Status + Marks Override */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#334155]">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-xl bg-[#6366F1] font-mono font-extrabold text-sm text-white shadow-md">
              {question ? `Q ${question.numberLabel}` : answer?.detectedQuestionLabel}
            </span>

            {/* Evaluation Status Badge */}
            {answer?.evaluation === 'correct' && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Correct Answer
              </span>
            )}
            {answer?.evaluation === 'partial' && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Partial Credit
              </span>
            )}
            {answer?.evaluation === 'incorrect' && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5" /> Incorrect
              </span>
            )}
            {isUnanswered && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Left Unanswered by Student
              </span>
            )}
            {answer?.isOutOfOrder && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5" /> Out of Printed Order
              </span>
            )}
          </div>

          {/* Marks & Teacher Override Input */}
          <div className="flex items-center gap-2 bg-[#0F172A] px-3 py-1.5 rounded-xl border border-[#334155]">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-xs text-slate-400 font-medium">Marks:</span>
            {answer && onUpdateScore ? (
              <input
                type="number"
                step="0.5"
                min="0"
                max={question?.maxMarks || answer.maxScore}
                value={answer.score}
                onChange={(e) => onUpdateScore(answer.id, parseFloat(e.target.value) || 0)}
                className="w-14 px-1.5 py-0.5 rounded bg-[#1E293B] border border-[#334155] text-xs font-mono font-bold text-emerald-400 focus:outline-none focus:border-[#6366F1] text-center"
              />
            ) : (
              <span className="text-xs font-mono font-bold text-emerald-400">
                {answer?.score || 0}
              </span>
            )}
            <span className="text-xs text-slate-500 font-mono">/ {question?.maxMarks || answer?.maxScore || 5}</span>
          </div>
        </div>

        {/* Content Grid: Question vs Extracted Student Answer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Question Text */}
          {question && (
            <div className="bg-[#0F172A] border border-[#334155] rounded-2xl p-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Printed Question
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {question.text}
              </p>
              {question.sampleSolution && (
                <div className="pt-2 border-t border-[#334155] text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Sample Solution Criteria: </span>
                  {question.sampleSolution}
                </div>
              )}
            </div>
          )}

          {/* Student Extracted Answer */}
          <div className={`bg-[#0F172A] border rounded-2xl p-4 space-y-2 ${
            isUnanswered 
              ? 'border-rose-500/30 bg-rose-500/5' 
              : 'border-[#334155]'
          }`}>
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Extracted Student Handwriting (OCR)
            </span>
            <p className={`text-xs leading-relaxed ${
              isUnanswered ? 'text-rose-400 italic' : 'text-slate-200 italic font-mono'
            }`}>
              "{answer?.extractedText || 'No student answer recorded for this question.'}"
            </p>
          </div>
        </div>

        {/* AI Feedback & Key Concepts Analysis */}
        {answer && (
          <div className="bg-[#0F172A] border border-[#334155] rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              AI Evaluation &amp; Feedback
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {answer.feedback}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Concepts Found */}
              {answer.keyConceptsFound?.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Key Concepts Mastered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {answer.keyConceptsFound.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Concepts Missing */}
              {answer.keyConceptsMissing?.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1">
                    <XCircle className="w-3 h-3" /> Concepts Missed / Mistakes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {answer.keyConceptsMissing.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] bg-rose-500/10 text-rose-300 border border-rose-500/20">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
