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
  CheckCircle2,
  X
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
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fade-in">
      {/* Teacher Avatar Illustration Circle (Figma Design) */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="w-20 h-20 rounded-full bg-orange-100 border-4 border-white shadow-lg flex items-center justify-center relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white font-extrabold text-xl shadow-inner">
            MR
          </div>
          <span className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-900 text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </span>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Upload <span className="text-orange-500">Question Paper &amp; Answer Sheets</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
            Upload both files to get started
          </p>
        </div>
      </div>

      {/* Prominent Demo 1-Click Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-orange-50 text-orange-500 border border-orange-200">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Want 1-Click Evaluation?</h3>
            <p className="text-xs text-slate-500">
              Pre-loaded with Physics exam, sub-parts 11(a)/11(b), multi-page answers, and out-of-order responses.
            </p>
          </div>
        </div>

        <button
          onClick={onLoadDemo}
          disabled={isProcessing}
          className="whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
        >
          <span>Try Pre-Loaded Demo Paper</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Upload Form */}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question Paper Dropzone */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-orange-500" />
                Upload Question Paper
              </span>
              <a
                href="/samples/Question_Paper.pdf"
                download="Question_Paper.pdf"
                className="text-[11px] font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1 hover:underline"
              >
                <Download className="w-3 h-3" /> Sample PDF
              </a>
            </div>

            <div className="relative border-2 border-dashed border-slate-300 hover:border-orange-400 rounded-2xl p-6 text-center transition-all bg-slate-50/60 group">
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={handleQpChange}
                disabled={isProcessing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="space-y-2 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs group-hover:border-orange-300 text-orange-500 flex items-center justify-center transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                {qpFiles.length > 0 ? (
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                      <FileCheck className="w-4 h-4" />
                      <span>{qpFiles.length} File(s) Ready</span>
                    </div>
                    <p className="text-[10px] text-slate-400">{qpFiles.map(f => f.name).join(', ')}</p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-bold text-slate-700">
                      Upload <span className="text-orange-500">Question Paper</span>
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">PDF or Images (Max 10MB)</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Student Answer Sheet Dropzone */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-orange-500" />
                Upload Answer Sheet
              </span>
              <a
                href="/samples/Student_Answer_Sheet.pdf"
                download="Student_Answer_Sheet.pdf"
                className="text-[11px] font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1 hover:underline"
              >
                <Download className="w-3 h-3" /> Sample PDF
              </a>
            </div>

            <div className="relative border-2 border-dashed border-slate-300 hover:border-orange-400 rounded-2xl p-6 text-center transition-all bg-slate-50/60 group">
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={handleAnsChange}
                disabled={isProcessing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="space-y-2 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs group-hover:border-orange-300 text-orange-500 flex items-center justify-center transition-colors">
                  <Upload className="w-6 h-6" />
                </div>
                {ansFiles.length > 0 ? (
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                      <FileCheck className="w-4 h-4" />
                      <span>{ansFiles.length} File(s) Ready</span>
                    </div>
                    <p className="text-[10px] text-slate-400">{ansFiles.map(f => f.name).join(', ')}</p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-bold text-slate-700">
                      Upload <span className="text-orange-500">Answer Sheet</span>
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">Handwritten Pages (Max 10MB)</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Processing Progress Loader */}
        {isProcessing && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-inner">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-orange-500 animate-spin" />
                {progress.message}
              </span>
              <span className="font-mono font-extrabold text-orange-500">{progress.progress}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 ease-out"
                style={{ width: `${progress.progress}%` }}
              />
            </div>
            <div className="grid grid-cols-4 text-[10px] text-slate-500 font-semibold text-center pt-1">
              <span className={progress.progress >= 20 ? 'text-orange-600 font-bold' : ''}>1. Ingest Files</span>
              <span className={progress.progress >= 40 ? 'text-orange-600 font-bold' : ''}>2. Extract Questions</span>
              <span className={progress.progress >= 70 ? 'text-orange-600 font-bold' : ''}>3. OCR Handwriting</span>
              <span className={progress.progress >= 95 ? 'text-orange-600 font-bold' : ''}>4. Map &amp; Grade</span>
            </div>
          </div>
        )}

        {/* Start Mapping Primary Button (Figma Design) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-slate-400">
            Once both files are uploaded, you'll be able to map answers with questions.
          </p>
          <button
            type="submit"
            disabled={qpFiles.length === 0 || ansFiles.length === 0 || isProcessing}
            className={`w-full sm:w-auto px-8 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
              qpFiles.length > 0 && ansFiles.length > 0 && !isProcessing
                ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Start Mapping</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
