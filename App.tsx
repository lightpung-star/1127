import React, { useState } from 'react';
import { SectionDrivers } from './components/SectionDrivers';
import { SectionFramework } from './components/SectionFramework';
import { SectionIncentives } from './components/SectionIncentives';
import { SectionOutcome } from './components/SectionOutcome';
import { Navigation } from './components/Navigation';
import { SectionId } from './types';
import { FileText, Calendar, Layers } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.DRIVERS);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.DRIVERS:
        return <SectionDrivers />;
      case SectionId.FRAMEWORK:
        return <SectionFramework />;
      case SectionId.INCENTIVES:
        return <SectionIncentives />;
      case SectionId.RESULTS:
        return <SectionOutcome />;
      default:
        return <SectionDrivers />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        
        {/* Header/Hero Context */}
        <div className="mb-12 text-center sm:text-left sm:flex sm:items-end sm:justify-between border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">
              案例总结 (3)
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              智慧油田事业部<br className="sm:hidden"/>平台型组织变革
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              构建适应不确定性环境的敏捷组织形态，从经验决策向数据决策转移。
            </p>
          </div>

          <div className="mt-6 sm:mt-0 flex flex-wrap gap-4 text-sm text-slate-500">
             <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-100">
                <Layers className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-slate-700">173</span> 在建项目
             </div>
             <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-100">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-slate-700">13</span> 敏捷产品线
             </div>
             <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-100">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-slate-700">2025</span> 试点年份
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderSection()}
        </div>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">智慧油田事业部平台型组织变革试点案例总结</p>
          <p className="text-xs mt-2 opacity-50">Generated for Demonstration Purposes</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
