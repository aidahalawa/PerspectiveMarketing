import React from 'react';
import type { Job } from '../types';
import { icons } from '../constants';

interface JobDetailsProps {
  job: Job;
}

const KeyBenefit: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
    <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-800">
        <span className="text-amber-600">{icons[icon]}</span>
        <span className="font-semibold text-slate-700 dark:text-slate-200">{label}</span>
    </div>
);


const JobDetails: React.FC<JobDetailsProps> = ({ job }) => (
  <>
    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <KeyBenefit icon="contract" label="Contrato Indefinido" />
        <KeyBenefit icon="up" label="Plan de Carrera" />
        <KeyBenefit icon="money" label="Comisiones Altas" />
    </div>
    <div className="prose max-w-none prose-slate dark:prose-invert">
      <p className="text-slate-700 dark:text-slate-200">{job.details.intro}</p>
      <h4>Qué harás</h4>
      <ul>
        {job.details.whatYoullDo.map((li) => <li key={li}>{li}</li>)}
      </ul>
      <h4>Qué ofrecemos</h4>
      <ul>
        {job.details.whatWeOffer.map((li) => <li key={li}>{li}</li>)}
      </ul>
      {job.details.testimonial && (
        <blockquote>“{job.details.testimonial}”</blockquote>
      )}
      {job.details.closingStatement && <p>{job.details.closingStatement}</p>}
      <div className="not-prose mt-4">
        <a href={job.url} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-300/60 hover:bg-amber-400">Aplicar ahora ↗</a>
      </div>
    </div>
  </>
);

export default JobDetails;