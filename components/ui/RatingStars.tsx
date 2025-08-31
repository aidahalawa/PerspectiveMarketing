
import React from 'react';
import { classNames } from '../../utils';

interface RatingStarsProps {
  value?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ value = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className={classNames("h-4 w-4", i < value ? "fill-amber-400" : "fill-slate-300 dark:fill-slate-600")}>
        <path d="M12 17.3 6.2 21l1.6-6.8L2 9.3l7-.6L12 2l3 6.7 7 .6-5.8 4.9L17.8 21 12 17.3z" />
      </svg>
    ))}
  </div>
);

export default RatingStars;
