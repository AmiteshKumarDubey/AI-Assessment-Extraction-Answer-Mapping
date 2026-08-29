'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Bell, 
  User, 
  Settings, 
  Key, 
  Download, 
  CheckCircle2, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
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
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-3 shadow-xs flex items-center justify-between">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-3">
        {hasData && (
          <button
            onClick={onReset}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            title="Back to Exams"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span>Exams</span>
          <span>/</span>
          <span className="font-bold text-slate-900">
            {hasData ? assessmentData?.summary.assessmentTitle || 'Physics Mid-Term' : 'Assessment Mapping'}
          </span>
        </div>
      </div>

      {/* Right: Actions + Teacher Profile */}
      <div className="flex items-center gap-3">
        {/* Export Grade Report */}
        {hasData && (
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-xs"
          >
            {downloaded ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Exported!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export Report</span>
              </>
            )}
          </button>
        )}

        {/* Demo Button if Workspace Active */}
        {hasData && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Upload New</span>
          </button>
        )}

        {/* Subtle Settings Gear Icon */}
        <button
          onClick={() => setShowKeyModal(true)}
          className={`p-2 rounded-xl border transition-colors ${
            apiKey
              ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
              : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          title="Configure API Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        <div className="h-5 w-px bg-slate-200 mx-1" />

        {/* Notification Icon */}
        <button className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
        </button>

        {/* Teacher Profile Card (Madhur Rastogi from Figma) */}
        <div className="flex items-center gap-2.5 pl-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-orange-100">
            MR
          </div>
          <div className="hidden sm:block text-left">
            <h4 className="font-bold text-xs text-slate-900 leading-tight">Madhur Rastogi</h4>
            <p className="text-[10px] text-slate-500 font-medium">Physics Teacher</p>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Gemini Vision API Settings</h3>
                <p className="text-xs text-slate-500">
                  Optional custom Gemini Vision API Key
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                API Key
              </label>
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500 font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-md"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
