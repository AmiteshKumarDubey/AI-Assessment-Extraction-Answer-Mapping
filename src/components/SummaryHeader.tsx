'use client';

import React, { useState } from 'react';
import { AssessmentSummary } from '@/types/assessment';
import { 
  CheckCircle2, 
  AlertTriangle, 
  RotateCw, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp, 
  Check, 
  Sparkles,
  BarChart2
} from 'lucide-react';

interface SummaryHeaderProps {
  summary: AssessmentSummary;
  activeFilter: string;
  onSelectFilter: (filter: any) => void;
}

export const SummaryHeader: React.FC<SummaryHeaderProps> = ({
  summary,
  activeFilter,
  onSelectFilter,
}) => {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="bg-[#1E293B] border-b border-[#334155] p-4 lg:px-8 space-y-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Student & Assessment Title */}
        <div className="flex items-center gap-4">
          {/* Radial Score Gauge */}
          <div className="relative flex items-center justify-center w-14 h-14 shrink-0">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                className="text-slate-800"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={138.23}
                strokeDashoffset={138.23 - (138.23 * summary.percentage) / 100}
                className={`transition-all duration-1000 ease-out ${
                  summary.percentage >= 80 ? 'text-emerald-400' : 'text-amber-400'
                }`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-extrabold text-xs text-white">{summary.percentage}%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-base text-white tracking-tight">
                {summary.studentName}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {summary.totalMarksObtained} / {summary.totalMaxMarks} Marks
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
              <span>{summary.assessmentTitle}</span>
              <span>•</span>
              <span className="text-slate-300 font-medium">{summary.subject}</span>
            </p>
          </div>
        </div>

        {/* Status Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {/* All */}
          <button
            onClick={() => onSelectFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeFilter === 'all'
                ? 'bg-[#6366F1] text-white shadow ring-1 ring-indigo-400'
                : 'bg-[#0F172A] text-slate-300 border border-[#334155] hover:bg-slate-800'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>All ({summary.questionsCount})</span>
          </button>

          {/* Graded */}
          <button
            onClick={() => onSelectFilter('graded')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeFilter === 'graded'
                ? 'bg-emerald-600 text-white shadow'
                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Graded ({summary.answeredCount})</span>
          </button>

          {/* Unanswered */}
          <button
            onClick={() => onSelectFilter('unanswered')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeFilter === 'unanswered'
                ? 'bg-rose-600 text-white shadow'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Unanswered ({summary.unansweredCount})</span>
          </button>

          {/* Out of Order */}
          <button
            onClick={() => onSelectFilter('out_of_order')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeFilter === 'out_of_order'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Out of Order ({summary.outOfOrderCount})</span>
          </button>

          {/* Unmapped */}
          {summary.unmappedCount > 0 && (
            <button
              onClick={() => onSelectFilter('unmapped')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'unmapped'
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Unmapped ({summary.unmappedCount})</span>
            </button>
          )}

          {/* Toggle AI Insights Drawer */}
          <button
            onClick={() => setShowInsights(!showInsights)}
            className="ml-auto md:ml-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0F172A] text-indigo-300 border border-[#334155] hover:bg-slate-800 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Insights</span>
            {showInsights ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable AI Insights Panel */}
      {showInsights && (
        <div className="max-w-7xl mx-auto mt-4 bg-[#0F172A] border border-[#334155] rounded-2xl p-5 space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Executive AI Assessment Summary
          </div>

          <p className="text-xs text-slate-300 leading-relaxed bg-[#1E293B] p-3 rounded-xl border border-[#334155]">
            {summary.overallFeedback}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Strengths */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 space-y-2">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Key Strengths
              </span>
              <ul className="space-y-1.5">
                {summary.strengths.map((str, i) => (
                  <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth Areas */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 space-y-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> Recommended Focus Areas
              </span>
              <ul className="space-y-1.5">
                {summary.improvements.map((imp, i) => (
                  <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
