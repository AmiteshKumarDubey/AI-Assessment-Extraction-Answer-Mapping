'use client';

import React from 'react';
import { 
  Home, 
  Users, 
  FileCheck, 
  BookOpen, 
  Library, 
  Building2,
  ChevronRight,
  Zap,
  GraduationCap
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-screen sticky top-0 z-30 shrink-0 select-none shadow-xs hidden lg:flex">
      {/* Top Brand + Toolkit Button */}
      <div className="p-4 space-y-5">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 px-2 pt-1">
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-lg shadow-xs">
            V
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            Veda<span className="text-orange-500">AI</span>
          </span>
        </div>

        {/* AI Teacher's Toolkit Pill */}
        <button className="w-full py-2.5 px-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all">
          <Zap className="w-4 h-4 text-orange-400 fill-orange-400" />
          <span>AI Teacher's Toolkit</span>
        </button>

        {/* Navigation Items */}
        <nav className="space-y-1 pt-2">
          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Home className="w-4 h-4 text-slate-400" />
            <span>Home</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Users className="w-4 h-4 text-slate-400" />
            <span>My Classroom</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <FileCheck className="w-4 h-4 text-slate-400" />
            <span>Assignments</span>
          </a>

          {/* Active Menu Item: Exams */}
          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-orange-50 text-orange-600 border-l-4 border-orange-500 transition-colors shadow-xs"
          >
            <GraduationCap className="w-4 h-4 text-orange-500" />
            <span>Exams</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Library className="w-4 h-4 text-slate-400" />
            <span>My Library</span>
          </a>
        </nav>
      </div>

      {/* Bottom School Badge */}
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs">
            DPS
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-xs text-slate-900 truncate">
              Delhi Public School
            </h4>
            <p className="text-[10px] text-slate-500 truncate">Bokaro Steel City</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
