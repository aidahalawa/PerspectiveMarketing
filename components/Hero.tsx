import React from 'react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import { COMPANY_JOBS_URL } from '../constants';
import TrustBadges from './ui/TrustBadges';

const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden scroll-mt-24">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_10%_-20%,#fde68a40,transparent_60%),radial-gradient(1200px_circle_at_80%_-10%,#7dd3fc30,transparent_60%)]" />
    <Container className="flex flex-col items-center gap-6 py-20 text-center md:py-28">
      <Badge>Trabajo con propósito</Badge>
      <h1 className="max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
        Conecta, Inspira y Genera un Impacto Positivo
      </h1>
      <p className="max-w-2xl text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
        Únete a nuestro equipo de profesionales y desarrolla tu carrera en un entorno dinámico. Ofrecemos formación continua, estabilidad contractual y un atractivo sistema de comisiones. Crece con nosotros mientras representas a organizaciones líderes en el sector social.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a 
          href={COMPANY_JOBS_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 dark:bg-white dark:text-slate-900">
          Ver Ofertas ↗
        </a>
        <a href="#mission" className="rounded-xl border border-black/5 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200">
          Conocer la Cultura
        </a>
      </div>
      <TrustBadges />
    </Container>
  </section>
);

export default Hero;