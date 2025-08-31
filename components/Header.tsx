import React, { useState } from 'react';
import Container from './ui/Container';
import { classNames } from '../utils';
import { COMPANY_JOBS_URL, icons } from '../constants';
import { useScrollPosition } from '../hooks/useScrollPosition';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeId: string | null;
}

const navLinks = [
  { href: '#testimonials', label: 'Equipo' },
  { href: '#mission', label: 'Valores' },
  { href: '#benefits', label: 'Beneficios' },
  { href: '#jobs', label: 'Ofertas' },
  { href: '#contact', label: 'Contacto' },
];

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, activeId }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isScrolled = useScrollPosition();

    // Fix: Add a return statement with JSX to render the component UI. This resolves the error "Type 'void' is not assignable to type 'ReactNode'".
    return (
        <header className={classNames(
            "sticky top-0 z-40 w-full flex-none transition-all duration-300",
            isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-900/80" : "bg-transparent"
        )}>
            <Container>
                <div className="relative flex items-center justify-between h-20">
                    <a href="#home" className="flex-shrink-0">
                        <img src="https://i.ibb.co/SXN4PsJN/logo-Aida-01-sin-fondo.png" alt="Perspective Marketing Logo" className="h-10 w-auto" />
                    </a>
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={classNames(
                                    "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                                    activeId === link.href.substring(1)
                                        ? "text-slate-900 dark:text-white"
                                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                                )}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                         <a href={COMPANY_JOBS_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 dark:bg-white dark:text-slate-900">
                           Aplicar ↗
                        </a>
                        <button onClick={onToggleTheme} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10" aria-label="Toggle theme">
                            {theme === 'dark' ? <span>☀️</span> : <span>🌙</span>}
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10" aria-label="Open menu">
                            {isMenuOpen ? icons.x : icons.menu}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={classNames(
                                        "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                                        activeId === link.href.substring(1)
                                            ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href={COMPANY_JOBS_URL} target="_blank" rel="noreferrer" className="mt-2 rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-700 dark:bg-white dark:text-slate-900">
                                Aplicar ↗
                            </a>
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
};

// Fix: Add a default export to make the component importable in other files.
export default Header;
