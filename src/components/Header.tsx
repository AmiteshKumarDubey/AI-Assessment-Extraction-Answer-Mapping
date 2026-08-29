'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Bell, 
  Settings, 
  Key, 
  Download, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  SlidersHorizontal,
  X,
  ShieldCheck
} from 'lucide-react';
import { AssessmentData } from '@/types/assessment';
import { NavTab } from './Sidebar';

interface HeaderProps {
  onLoadDemo: () => void;
  onReset: () => void;
  hasData: boolean;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
  assessmentData?: AssessmentData | null;
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onLoadDemo,
  onReset,
  hasData,
  apiKey,
  onSaveApiKey,
  assessmentData,
  activeTab,
  onSelectTab,
}) => {
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
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

  const breadcrumbLabels: Record<NavTab, string> = {
    exams: 'Exams',
    home: 'Home',
    classroom: 'My Classroom',
    assignments: 'Assignments',
    library: 'My Library',
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-3 shadow-xs flex items-center justify-between">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-3">
        {hasData && activeTab === 'exams' && (
          <button
            onClick={onReset}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            title="Back to Upload"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span 
            onClick={() => onSelectTab('exams')}
            className="hover:text-slate-900 cursor-pointer"
          >
            {breadcrumbLabels[activeTab]}
          </span>
          <span>/</span>
          <span className="font-bold text-slate-900">
            {activeTab === 'exams' 
              ? (hasData ? assessmentData?.summary.assessmentTitle || 'Physics Mid-Term' : 'Assessment Mapping')
              : 'Overview'}
          </span>
        </div>
      </div>

      {/* Right: Actions + Teacher Profile */}
      <div className="flex items-center gap-3 relative">
        {/* Export Grade Report */}
        {hasData && activeTab === 'exams' && (
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

        {/* Upload New Button */}
        {hasData && activeTab === 'exams' && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Upload New</span>
          </button>
        )}

        {/* Teacher-Facing AI Settings Button */}
        <button
          onClick={() => setShowKeyModal(true)}
          className={`p-2 rounded-xl border transition-colors ${
            apiKey
              ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
              : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          title="AI Engine Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Notification Bell Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
          </button>

          {/* Notifications Dropdown Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-4 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-extrabold text-xs text-slate-900">Notifications</span>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-orange-50/60 border border-orange-100">
                  <p className="font-bold text-slate-900">Physics Answer Sheets Ready</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Alex Rivera's submission is ready for review.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-800">Chemistry Mid-Term Scheduled</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Scheduled for Class 11B on Monday.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-5 w-px bg-slate-200 mx-0.5" />

        {/* Teacher Profile Card */}
        <div className="flex items-center gap-2.5 pl-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-orange-100">
            MR
          </div>
          <div className="hidden sm:block text-left">
            <h4 className="font-bold text-xs text-slate-900 leading-tight">Madhur Rastogi</h4>
            <p className="text-[10px] text-slate-500 font-medium">Physics Teacher</p>
          </div>
        </div>
      </div>

      {/* Teacher-Facing AI Engine Settings Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">AI Engine Preferences</h3>
                <p className="text-xs text-slate-500">
                  Configure automated grading &amp; vision evaluation model
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  AI Vision Engine Key (Optional)
                </label>
                <input
                  type="password"
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="Enter key or leave blank for built-in engine"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500 font-mono"
                />
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Active Provider: VedaAI Built-in Vision Model
                </span>
                <p className="text-slate-500">
                  Leave key blank to automatically run VedaAI's pre-configured engine for instant question extraction &amp; answer mapping.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
