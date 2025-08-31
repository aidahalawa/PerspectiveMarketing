import React from 'react';
import type { Job } from '../types';
import { icons } from '../constants';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import AnimateOnScroll from './ui/AnimateOnScroll';
import Badge from './ui/Badge';
import Pagination from './ui/Pagination';

// Sub-component: JobFilters
interface JobFiltersProps {
  filters: { location: string; type: string };
  onChange: (key: 'location' | 'type', value: string) => void;
  locations: string[];
  types: string[];
  onClear: () => void;
}
const JobFilters: React.FC<JobFiltersProps> = ({ filters, onChange, locations, types, onClear }) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:flex-row sm:items-end sm:justify-between">
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
      <div>
        <label className="text-xs text-slate-500 dark:text-slate-400">Ubicación</label>
        <select value={filters.location} onChange={(e) => onChange('location', e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
          {locations.map((l) => <option key={l} value={l}>{l === 'all' ? 'Todas' : l}</option>)}
        </select>
      </div>
      <div>
        <label className="text-xs text-slate-500 dark:text-slate-400">Tipo</label>
        <select value={filters.type} onChange={(e) => onChange('type', e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
          {types.map((t) => <option key={t} value={t}>{t === 'all' ? 'Todos' : t}</option>)}
        </select>
      </div>
      <div className="flex items-end">
        <button onClick={onClear} className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white">Limpiar</button>
      </div>
    </div>
  </div>
);

// Sub-component: JobItem
interface JobItemProps {
  job: Job;
  onOpen: () => void;
}
const JobItem: React.FC<JobItemProps> = ({ job, onOpen }) => (
  <div className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
    <div className="flex flex-wrap items-center gap-3">
      <Badge>{job.type}</Badge>
      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><span className="inline-flex">{icons.mapPin}</span> {job.location}</div>
      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><span className="inline-flex">{icons.briefcase}</span> {job.salary}</div>
    </div>
    <h4 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{job.details.title}</h4>
    <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{job.details.intro}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {job.details.whatWeOffer.slice(0, 3).map((chip) => (
        <span key={chip} className="rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-700 ring-1 ring-black/5 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10">{chip}</span>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-2">
      <button onClick={onOpen} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900">Ver detalles</button>
      <a href={job.url} target="_blank" rel="noreferrer" className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">Aplicar ahora ↗</a>
    </div>
  </div>
);

// Main Section Component
interface JobsSectionProps {
  filters: { location: string; type: string };
  setFilters: React.Dispatch<React.SetStateAction<{ location: string; type: string }>>;
  locations: string[];
  types: string[];
  jobs: Job[];
  setSelectedJob: (job: Job) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}
const JobsSection: React.FC<JobsSectionProps> = ({ 
  filters, 
  setFilters, 
  locations, 
  types, 
  jobs, 
  setSelectedJob,
  currentPage,
  totalPages,
  setCurrentPage
}) => (
  <section id="jobs" className="py-20 scroll-mt-24">
    <Container>
      <SectionTitle title="Oportunidades en el equipo" subtitle="Si tienes actitud, empatía y ganas de comunicar, queremos conocerte." />
      <div className="mt-10 space-y-6">
        <AnimateOnScroll>
          <JobFilters
            filters={filters}
            onChange={(key, val) => setFilters((f) => ({ ...f, [key]: val }))}
            locations={locations}
            types={types}
            onClear={() => setFilters({ location: 'all', type: 'all' })}
          />
        </AnimateOnScroll>
        <div className="grid gap-4">
          {jobs.length ? (
            jobs.map((job, i) => (
              <AnimateOnScroll key={job.id} delay={i * 50}>
                <JobItem job={job} onOpen={() => setSelectedJob(job)} />
              </AnimateOnScroll>
            ))
          ) : (
            <AnimateOnScroll>
              <div className="rounded-2xl border border-black/5 bg-white/70 p-8 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h4 className="text-lg font-semibold text-primary dark:text-white">No hay ofertas que coincidan</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Cambia o limpia filtros para ver todas las vacantes.</p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
        {totalPages > 1 && (
          <AnimateOnScroll>
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </AnimateOnScroll>
        )}
      </div>
    </Container>
  </section>
);

export default JobsSection;