import React from 'react';
import { classNames } from '../../utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        Anterior
      </button>
      
      <div className="flex items-center gap-1">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={classNames(
              "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
              currentPage === number 
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
            )}
            aria-current={currentPage === number ? 'page' : undefined}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;