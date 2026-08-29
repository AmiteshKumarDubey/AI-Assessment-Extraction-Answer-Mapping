'use client';

import React from 'react';
import { 
  Users, 
  FileCheck, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Plus
} from 'lucide-react';
import { NavTab } from './Sidebar';

interface StaticPageViewsProps {
  tab: NavTab;
  onGoToExams: () => void;
}

export const StaticPageViews: React.FC<StaticPageViewsProps> = ({ tab, onGoToExams }) => {
  if (tab === 'home') {
    return (
      <div className="p-6 max-w-6xl mx-auto space-y-6 animate-fade-in">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 inline-block">
              Delhi Public School • Bokaro Steel City
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, Madhur Rastogi!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              You have 1 assessment mapping waiting for review and 2 upcoming exams.
            </p>
          </div>
          <button
            onClick={onGoToExams}
            className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Open Assessment Mapping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Active Students</span>
              <Users className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900">128</p>
            <p className="text-[11px] text-emerald-600 font-semibold">Across 3 Class Sections</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Completed Mappings</span>
              <FileCheck className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900">42</p>
            <p className="text-[11px] text-slate-500 font-semibold">Physics &amp; Science Papers</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Class Average</span>
              <BarChart3 className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900">81.4%</p>
            <p className="text-[11px] text-emerald-600 font-semibold">+3.2% from Last Term</p>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'classroom') {
    return (
      <div className="p-6 max-w-6xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">My Classrooms</h2>
            <p className="text-xs text-slate-500">Managed sections and assigned rosters</p>
          </div>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white flex items-center gap-1.5 shadow-xs">
            <Plus className="w-3.5 h-3.5" /> Add New Section
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200">
                Grade 11 - Section A
              </span>
              <span className="text-xs text-slate-500 font-semibold">42 Students</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Physics Advanced Track</h3>
            <p className="text-xs text-slate-500">Current Unit: Thermodynamics &amp; Electricity</p>
            <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-slate-700">
              <span>Next Exam: Physics Mid-Term</span>
              <button onClick={onGoToExams} className="text-orange-500 hover:underline">View Mapping →</button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Grade 11 - Section B
              </span>
              <span className="text-xs text-slate-500 font-semibold">44 Students</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Physics Regular Track</h3>
            <p className="text-xs text-slate-500">Current Unit: Mechanics &amp; Kinematics</p>
            <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-slate-700">
              <span>Next Exam: Weekly Quiz #4</span>
              <button onClick={onGoToExams} className="text-orange-500 hover:underline">View Mapping →</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'assignments') {
    return (
      <div className="p-6 max-w-6xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Assignments</h2>
            <p className="text-xs text-slate-500">Track and review student homework submissions</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-orange-50 text-orange-500 border border-orange-200">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Newton's Laws Problem Set</h4>
                <p className="text-xs text-slate-500">Physics Grade 11 • Due Yesterday</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                42/42 Submitted
              </span>
              <button onClick={onGoToExams} className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white">
                Grade Mappings
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Ohm's Law &amp; Circuit Derivations</h4>
                <p className="text-xs text-slate-500">Physics Grade 11 • Due Next Friday</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                18/44 Submitted
              </span>
              <button onClick={onGoToExams} className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tab === 'library') {
    return (
      <div className="p-6 max-w-6xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">My Library</h2>
            <p className="text-xs text-slate-500">Question banks, sample solutions, and exam templates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="p-3 rounded-xl bg-orange-50 text-orange-500 w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Physics Question Bank</h3>
            <p className="text-xs text-slate-500">145 Questions • Includes sub-parts 11(a)/11(b)</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="p-3 rounded-xl bg-purple-50 text-purple-600 w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Sample Answer Key Repository</h3>
            <p className="text-xs text-slate-500">Detailed rubrics &amp; criteria solutions</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Previous Year Exam Archives</h3>
            <p className="text-xs text-slate-500">2023 - 2025 Mid-Term Papers</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
