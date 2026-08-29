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
      <div className="bg-white border-t border-slate-200 p-6 text-center text-slate-400 text-xs font-semibold">
        Select a question from the left sidebar to view extraction mapping &amp; AI evaluation details.
      </div>
    );
  }

  const isUnanswered = answer?.status === 'unanswered' || (!answer && question);

  return (
    <div className="bg-white border-t border-slate-200 p-4 lg:p-6 text-slate-900 max-h-[380px] overflow-y-auto custom-scrollbar shadow-xs">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header Row: Question Label + Status + Marks Override */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-xl bg-orange-500 font-mono font-extrabold text-sm text-white shadow-xs">
              {question ? `Q ${question.numberLabel}` : answer?.detectedQuestionLabel}
            </span>

            {/* Evaluation Status Badge */}
            {answer?.evaluation === 'correct' && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Correct Answer
              </span>
            )}
            {answer?.evaluation === 'partial' && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> Partial Credit
              </span>
            )}
            {answer?.evaluation === 'incorrect' && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-600" /> Incorrect
              </span>
            )}
            {isUnanswered && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Left Unanswered by Student
              </span>
            )}
            {answer?.isOutOfOrder && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-amber-600" /> Out of Printed Order
              </span>
            )}
          </div>

          {/* Marks & Teacher Override Input */}
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-slate-500 font-semibold">Marks:</span>
            {answer && onUpdateScore ? (
              <input
                type="number"
                step="0.5"
                min="0"
                max={question?.maxMarks || answer.maxScore}
                value={answer.score}
                onChange={(e) => onUpdateScore(answer.id, parseFloat(e.target.value) || 0)}
                className="w-14 px-1.5 py-0.5 rounded-md bg-white border border-slate-300 text-xs font-mono font-extrabold text-emerald-700 focus:outline-none focus:border-orange-500 text-center shadow-xs"
              />
            ) : (
              <span className="text-xs font-mono font-extrabold text-emerald-700">
                {answer?.score || 0}
              </span>
            )}
            <span className="text-xs text-slate-500 font-mono font-semibold">/ {question?.maxMarks || answer?.maxScore || 5}</span>
          </div>
        </div>

        {/* Content Grid: Question vs Extracted Student Answer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Question Text */}
          {question && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-orange-500" /> Printed Question
              </span>
              <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                {question.text}
              </p>
              {question.sampleSolution && (
                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700">Sample Solution Criteria: </span>
                  {question.sampleSolution}
                </div>
              )}
            </div>
          )}

          {/* Student Extracted Answer */}
          <div className={`bg-slate-50 border rounded-2xl p-4 space-y-2 ${
            isUnanswered 
              ? 'border-rose-200 bg-rose-50/50' 
              : 'border-slate-200/80'
          }`}>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Extracted Student Handwriting (OCR)
            </span>
            <p className={`text-xs leading-relaxed font-medium ${
              isUnanswered ? 'text-rose-700 italic font-bold' : 'text-slate-800 italic font-mono'
            }`}>
              "{answer?.extractedText || 'No student answer recorded for this question.'}"
            </p>
          </div>
        </div>

        {/* AI Feedback & Key Concepts Analysis */}
        {answer && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-orange-600 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-orange-500" />
              AI Evaluation &amp; Feedback
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {answer.feedback}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Concepts Found */}
              {answer.keyConceptsFound?.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" /> Key Concepts Mastered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {answer.keyConceptsFound.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Concepts Missing */}
              {answer.keyConceptsMissing?.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-rose-700 flex items-center gap-1">
                    <XCircle className="w-3 h-3 text-rose-600" /> Concepts Missed / Mistakes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {answer.keyConceptsMissing.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] bg-rose-50 text-rose-800 border border-rose-200 font-semibold">
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
