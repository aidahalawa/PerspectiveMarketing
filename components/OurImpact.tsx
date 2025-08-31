import React from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

interface StatProps {
  value: string;
  label: string;
}
const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="rounded-2xl border border-black/5 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
    <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{value}</div>
    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</div>
  </div>
);

const OurImpact: React.FC = () => (
  <section className="border-y border-black/5 bg-gradient-to-b from-white to-amber-50/60 py-16 dark:border-white/10 dark:from-slate-900 dark:to-slate-900">
    <Container>
      <SectionTitle title="Nuestro Impacto" subtitle="Resultados que nos mueven todos los días." />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat value="+8.5M€" label="Recaudados en total" />
        <Stat value="Formación" label="Diaria y Continua" />
        <Stat value="Equipo" label="Diverso e Inclusivo" />
        <Stat value="Impacto" label="Real y Medible" />
      </div>
    </Container>
  </section>
);

export default OurImpact;