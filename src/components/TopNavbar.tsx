import React from 'react';
import { Search, Bell, Sun, Moon, ChevronDown } from 'lucide-react';

interface TopNavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-6 flex items-center justify-between gap-4 sticky top-0 z-30">
      {/* Search bar */}
      <div className="relative flex-1 max-w-lg">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="O que queres aprender hoje?"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[#f8fafc] border border-slate-200 rounded-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
        />
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Dark/Light toggle pill */}
        <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
          <button className="p-1 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 rounded-full bg-slate-800 text-white shadow-xs cursor-pointer">
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer relative">
          <Bell className="w-4 h-4" />
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full absolute top-1.5 right-1.5" />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            LM
          </div>
          <span className="text-xs font-semibold text-slate-800 hidden sm:inline">
            Olá, Leandro!
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
};
