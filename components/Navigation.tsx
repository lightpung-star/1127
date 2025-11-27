import React from 'react';
import { SectionId, NavItem } from '../types';
import { LayoutDashboard, GitMerge, Coins, Flag, Zap } from 'lucide-react';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const navItems: NavItem[] = [
    { id: SectionId.DRIVERS, label: '变革驱动', icon: <Zap size={18} /> },
    { id: SectionId.FRAMEWORK, label: '组织架构', icon: <LayoutDashboard size={18} /> },
    { id: SectionId.INCENTIVES, label: '考核激励', icon: <Coins size={18} /> },
    { id: SectionId.RESULTS, label: '成效与挑战', icon: <GitMerge size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Flag className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight hidden sm:block">智慧油田变革试点</span>
            </div>
          </div>
          <div className="flex space-x-1 sm:space-x-4 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
