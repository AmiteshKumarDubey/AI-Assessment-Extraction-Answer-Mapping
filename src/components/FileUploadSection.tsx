'use client';

import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Loader2,
  FileCheck,
  Download,
  ShieldCheck,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { ProcessingProgress } from '@/types/assessment';

interface FileUploadSectionProps {
  onProcess: (qpFiles: File[], ansFiles: File[]) => void;
  onLoadDemo: () => void;
  progress: ProcessingProgress;
}

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  onProcess,
  onLoadDemo,
  progress,
}) => {
  const [qpFiles, setQpFiles] = useState<File[]>([]);
  const [ansFiles, setAnsFiles] = useState<File[]>([]);

  const handleQpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setQpFiles(Array.from(e.target.files));
    }
  };

  const handleAnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAnsFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (qpFiles.length > 0 && ansFiles.length > 0) {
      onProcess(qpFiles, ansFiles);
    }
  };

  const isProcessing = progress.step !== 'idle' && progress.step !== 'complete' && progress.step !== 'error';

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8 animate-fade-in">
      {/* Intro Hero Section */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Automated Question Extraction &amp; Dynamic Answer Mapping
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Upload Question Paper &amp; Student Answer Sheet
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Extract printed questions (including sub-parts 11a, 11b), map handwritten responses out of order, calculate scores, and highlight exact answer sheet regions.
        </p>
      </div>

      {/* Prominent Demo Hero CTA Banner */}
      <div className="bg-gradient-to-r from-[#1E293B] via-[#1E293B] to-[#131c2e] border border-indigo-500/30 rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group">
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3.5 rounded-2xl bg-[#6366F1]/20 text-indigo-400 border border-indigo-500/30 shadow-inner">
            <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="font-extrabold text-slate-100 text-base">Want 1-Click Evaluation?</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Recommended
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Includes Physics Grade 11 exam, sub-parts 11(a)/11(b), multi-page answers, and out-of-order responses.
            </p>
          </div>
        </div>

        <button
          onClick={onLoadDemo}
          disabled={isProcessing}
          className="whitespace-nowrap px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#6366F1] to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5 relative z-10 shrink-0"
        >
          <span>Try Pre-Loaded Demo Paper</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Upload Form */}
      <form onSubmit={handleSubmit} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question Paper Dropzone */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                1. Question Paper (PDF / Images)
              </label>
              <a
                href="/samples/Question_Paper.pdf"
                download="Question_Paper.pdf"
                className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 hover:underline"
              >
                <Download className="w-3 h-3" /> Sample PDF
              </a>
            </div>

            <div className="relative border-2 border-dashed border-[#334155] hover:border-[#6366F1] rounded-2xl p-6 text-center transition-all bg-[#0F172A] group">
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={handleQpChange}
                disabled={isProcessing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="space-y-2.5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#1E293B] group-hover:bg-[#6366F1]/20 text-indigo-400 flex items-center justify-center transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                {qpFiles.length > 0 ? (
                  <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                    <FileCheck className="w-4 h-4" />
                    <span>{qpFiles.length} file(s) selected</span>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-semibold text-slate-200">
                      Drop Question Paper here or <span className="text-[#6366F1] underline">browse</span>
                    </p>
                    <p className="text-[11px] text-slate-500">Supports PDF, PNG, JPG (e.g., Q1 to Q5, Q11a/b)</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Student Answer Sheet Dropzone */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Upload className="w-4 h-4 text-purple-400" />
                2. Student Answer Sheet (PDF / Images)
              </label>
              <a
                href="/samples/Student_Answer_Sheet.pdf"
                download="Student_Answer_Sheet.pdf"
                className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 hover:underline"
              >
                <Download className="w-3 h-3" /> Sample PDF
              </a>
            </div>

            <div className="relative border-2 border-dashed border-[#334155] hover:border-purple-500/60 rounded-2xl p-6 text-center transition-all bg-[#0F172A] group">
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={handleAnsChange}
                disabled={isProcessing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="space-y-2.5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#1E293B] group-hover:bg-purple-500/20 text-purple-400 flex items-center justify-center transition-colors">
                  <Upload className="w-6 h-6" />
                </div>
                {ansFiles.length > 0 ? (
                  <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                    <FileCheck className="w-4 h-4" />
                    <span>{ansFiles.length} file(s) selected</span>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-semibold text-slate-200">
                      Drop Answer Sheet here or <span className="text-purple-400 underline">browse</span>
                    </p>
                    <p className="text-[11px] text-slate-500">Handwritten pages (supports multi-page spans)</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Processing Progress Bar & Status */}
        {isProcessing && (
          <div className="bg-[#0F172A] border border-[#334155] rounded-2xl p-5 space-y-3.5 shadow-inner">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                {progress.message}
              </span>
              <span className="font-mono font-extrabold text-[#6366F1]">{progress.progress}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#1E293B] overflow-hidden">
              <div
                className="h-full bg-[#6366F1] transition-all duration-300 ease-out"
                style={{ width: `${progress.progress}%` }}
              />
            </div>
            <div className="grid grid-cols-4 text-[11px] text-slate-400 font-semibold text-center pt-1">
              <span className={progress.progress >= 20 ? 'text-indigo-400 font-extrabold' : ''}>1. Ingest Files</span>
              <span className={progress.progress >= 40 ? 'text-indigo-400 font-extrabold' : ''}>2. Extract Questions</span>
              <span className={progress.progress >= 70 ? 'text-indigo-400 font-extrabold' : ''}>3. OCR Handwriting</span>
              <span className={progress.progress >= 95 ? 'text-indigo-400 font-extrabold' : ''}>4. Map &amp; Grade</span>
            </div>
          </div>
        )}

        {/* Submit Process Button */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-400 hidden sm:block">
            Need sample files to test? Download the sample PDFs above.
          </p>
          <button
            type="submit"
            disabled={qpFiles.length === 0 || ansFiles.length === 0 || isProcessing}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              qpFiles.length > 0 && ansFiles.length > 0 && !isProcessing
                ? 'bg-[#6366F1] hover:bg-indigo-500 text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-[#0F172A] text-slate-500 cursor-not-allowed border border-[#334155]'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Processing Files...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Process Files &amp; Map Answers</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
