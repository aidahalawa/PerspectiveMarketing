import React from 'react';
import { icons } from '../../constants';

interface IconCardProps {
  icon: string;
  title: string;
  description?: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => (
  <div className="group rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-white/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-300/50 transition group-hover:scale-105">
      {icons[icon]}
    </div>
    <h4 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
    {description && (
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    )}
  </div>
);

export default IconCard;