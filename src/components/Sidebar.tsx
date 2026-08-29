'use client';

import React from 'react';
import { 
  Home, 
  Users, 
  FileCheck, 
  BookOpen, 
  Library, 
  Zap,
  GraduationCap
} from 'lucide-react';

export type NavTab = 'exams' | 'home' | 'classroom' | 'assignments' | 'library';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'classroom', label: 'My Classroom', icon: <Users className="w-4 h-4" /> },
    { id: 'assignments', label: 'Assignments', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'exams', label: 'Exams', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'library', label: 'My Library', icon: <Library className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-screen sticky top-0 z-30 shrink-0 select-none shadow-xs hidden lg:flex">
      {/* Top Brand + Toolkit Button */}
      <div className="p-4 space-y-5">
        {/* Brand Logo */}
        <div 
          onClick={() => onSelectTab('exams')}
          className="flex items-center gap-2.5 px-2 pt-1 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-lg shadow-xs">
            V
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            Veda<span className="text-orange-500">AI</span>
          </span>
        </div>

        {/* AI Teacher's Toolkit Pill */}
        <button 
          onClick={() => onSelectTab('exams')}
          className="w-full py-2.5 px-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Zap className="w-4 h-4 text-orange-400 fill-orange-400" />
          <span>AI Teacher's Toolkit</span>
        </button>

        {/* Navigation Items */}
        <nav className="space-y-1 pt-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                  isActive
                    ? 'font-bold bg-orange-50 text-orange-600 border-l-4 border-orange-500 shadow-xs'
                    : 'font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'
                }`}
              >
                <span className={isActive ? 'text-orange-500' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
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
