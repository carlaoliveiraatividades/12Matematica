import React from 'react';
import {
  Home,
  Clock,
  Zap,
  FileText,
  Star,
  Dices,
  User,
  Sparkles,
  Rocket,
} from 'lucide-react';

interface SidebarProps {
  activeNav: string;
  onSelectNav: (nav: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeNav, onSelectNav }) => {
  const menuItems = [
    { id: 'matematica', label: 'Matemática', icon: Home },
    { id: 'progresso', label: 'O meu progresso', icon: Clock },
    { id: 'desafios', label: 'Desafios', icon: Zap },
    { id: 'exames', label: 'Exames', icon: FileText },
    { id: 'favoritos', label: 'Favoritos', icon: Star },
    { id: 'simuladores', label: 'Simuladores', icon: Dices },
    { id: 'perfil', label: 'Perfil', icon: User },
  ];

  return (
    <aside className="w-60 bg-[#131b2e] text-slate-300 flex flex-col justify-between shrink-0 min-h-screen p-4 select-none border-r border-slate-800">
      <div className="space-y-6">
        {/* MATHVERSE Brand */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Brain icon representation */}
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-extrabold text-white tracking-wider font-sans leading-tight">
              MATHVERSE
            </h1>
            <p className="text-[11px] text-cyan-400 font-medium tracking-tight">
              Explora. Experimenta. Aprende.
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectNav(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/90 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Rocket Highlight Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1e2942] to-[#151d30] border border-slate-700/50 p-4 text-left shadow-lg">
        <div className="absolute top-2 right-2 opacity-20">
          <Sparkles className="w-12 h-12 text-cyan-400" />
        </div>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-lg mb-2.5 shadow-md shadow-rose-500/20">
          🚀
        </div>
        <p className="text-xs font-semibold text-slate-100 leading-snug">
          A tua jornada na Matemática mais visual, mais interativa, mais tua.
        </p>
      </div>
    </aside>
  );
};
