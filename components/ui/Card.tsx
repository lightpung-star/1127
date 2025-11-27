import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", title }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 transition-all duration-300 hover:shadow-md ${className}`}>
      {title && <h3 className="text-lg font-bold text-slate-800 mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export const Badge: React.FC<{ children: ReactNode; color?: 'blue' | 'green' | 'amber' | 'red' }> = ({ children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-emerald-100 text-emerald-800',
    amber: 'bg-amber-100 text-amber-800',
    red: 'bg-rose-100 text-rose-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {children}
    </span>
  );
};
