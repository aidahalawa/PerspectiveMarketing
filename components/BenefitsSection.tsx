import React from 'react';
import { BENEFITS } from '../constants';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import IconCard from './ui/IconCard';
import AnimateOnScroll from './ui/AnimateOnScroll';

const BenefitsSection: React.FC = () => (
  <section id="benefits" className="border-y border-black/5 bg-white/70 py-20 backdrop-blur dark:border-white/10 dark:bg-white/5 scroll-mt-24">
    <Container>
      <SectionTitle title="Te valoramos como persona" subtitle="Más que un trabajo: un camino y herramientas reales para crecer." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <AnimateOnScroll key={b.title} delay={i * 80}>
            <IconCard icon={b.icon} title={b.title} description={b.description} />
          </AnimateOnScroll>
        ))}
      </div>
    </Container>
  </section>
);

export default BenefitsSection;