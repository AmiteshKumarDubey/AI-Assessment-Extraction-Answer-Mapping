'use client';

import React, { useState } from 'react';
import { Sparkles, Key, RotateCcw, Settings, FileText } from 'lucide-react';

interface HeaderProps {
  onLoadDemo: () => void;
  onReset: () => void;
  hasData: boolean;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onLoadDemo,
  onReset,
  hasData,
  apiKey,
  onSaveApiKey,
}) => {
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [inputKey, setInputKey] = useState(apiKey);

  const handleSave = () => {
    onSaveApiKey(inputKey);
    setShowKeyModal(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E293B] border-b border-[#334155] text-white px-4 lg:px-8 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366F1] flex items-center justify-center shadow-md text-white">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-slate-100">
              VedaAI Assessment Workspace
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* New Test / Upload View */}
          {hasData && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0F172A] border border-[#334155] text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Upload New Test</span>
            </button>
          )}

          {/* Subtle API Settings */}
          <button
            onClick={() => setShowKeyModal(true)}
            className={`p-2 rounded-lg border transition-colors ${
              apiKey
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-[#0F172A] border-[#334155] text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            title="Configure API Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Vision Engine API Settings</h3>
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
                className="w-full px-3.5 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-white text-xs focus:outline-none focus:border-[#6366F1] font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#6366F1] hover:bg-indigo-500 text-white"
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
