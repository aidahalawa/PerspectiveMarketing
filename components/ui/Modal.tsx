import React from 'react';
import { icons } from '../../constants';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-black/5 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
             <img src="https://i.ibb.co/SXN4PsJN/logo-Aida-01-sin-fondo.png" alt="Perspective Marketing Logo" className="h-10 w-auto" />
             <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          </div>
          <button onClick={onClose} className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10" aria-label="Cerrar">
            {icons.x}
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
