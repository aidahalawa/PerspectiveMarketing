import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;