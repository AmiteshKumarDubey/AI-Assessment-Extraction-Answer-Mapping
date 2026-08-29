'use client';

import React, { useState } from 'react';
import { Sparkles, Key, RotateCcw, Settings, FileText, Download, CheckCircle2 } from 'lucide-react';
import { AssessmentData } from '@/types/assessment';

interface HeaderProps {
  onLoadDemo: () => void;
  onReset: () => void;
  hasData: boolean;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
  assessmentData?: AssessmentData | null;
}

export const Header: React.FC<HeaderProps> = ({
  onLoadDemo,
  onReset,
  hasData,
  apiKey,
  onSaveApiKey,
  assessmentData,
}) => {
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [inputKey, setInputKey] = useState(apiKey);
  const [downloaded, setDownloaded] = useState(false);

  const handleSave = () => {
    onSaveApiKey(inputKey);
    setShowKeyModal(false);
  };

  const handleExportJSON = () => {
    if (!assessmentData) return;
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(assessmentData, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `VedaAI_Grade_Report_${assessmentData.summary.studentName.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E293B]/95 backdrop-blur-md border-b border-[#334155] text-white px-4 lg:px-8 py-2.5 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#818cf8] flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base tracking-tight text-white">
                VedaAI Assessment Workspace
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Vision Engine 2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Automated Question Extraction, Answer Mapping &amp; Evaluation
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Export Report JSON */}
          {hasData && (
            <button
              onClick={handleExportJSON}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Report Exported!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Export Grade Report</span>
                </>
              )}
            </button>
          )}

          {/* New Test / Upload View */}
          {hasData && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0F172A] border border-[#334155] text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Upload New Test</span>
            </button>
          )}

          {/* Subtle API Settings */}
          <button
            onClick={() => setShowKeyModal(true)}
            className={`p-2 rounded-xl border transition-colors ${
              apiKey
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-[#0F172A] border-[#334155] text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            title="Configure Vision Engine Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Vision Model Settings</h3>
                <p className="text-xs text-slate-400">
                  Optional custom Google Gemini Vision API Key
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Gemini API Key
              </label>
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#0F172A] border border-[#334155] text-white text-xs focus:outline-none focus:border-[#6366F1] font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#6366F1] hover:bg-indigo-500 text-white shadow-md"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
