
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-amber-600 ring-1 ring-amber-300/50">
    {children}
  </span>
);

export default Badge;
