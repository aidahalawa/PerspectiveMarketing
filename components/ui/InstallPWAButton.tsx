import React from 'react';
import { useInstallPrompt } from '../../hooks/useInstallPrompt';

const InstallPWAButton: React.FC = () => {
  const { showInstallButton, handleInstall } = useInstallPrompt();

  if (!showInstallButton) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <img src="https://i.ibb.co/SXN4PsJN/logo-Aida-01-sin-fondo.png" alt="Logo" className="h-10 w-10 rounded-lg"/>
                <div>
                    <p className="font-bold text-slate-800 dark:text-white">Instalar App</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Acceso rápido y experiencia mejorada.</p>
                </div>
            </div>
            <button
                onClick={handleInstall}
                className="flex-shrink-0 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 dark:bg-white dark:text-slate-900"
            >
                Instalar
            </button>
        </div>
    </div>
  );
};

export default InstallPWAButton;
