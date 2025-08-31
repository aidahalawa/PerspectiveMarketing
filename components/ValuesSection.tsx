import React from 'react';
import { VALUES } from '../constants';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import IconCard from './ui/IconCard';
import AnimateOnScroll from './ui/AnimateOnScroll';

const ValuesSection: React.FC = () => (
  <section id="mission" className="py-20 scroll-mt-24">
    <Container>
      <SectionTitle title="Nuestra meta: sacar tu mejor versión" subtitle="Desatamos talentos para ayudar a quienes más lo necesitan." />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {VALUES.map((v, i) => (
          <AnimateOnScroll key={v.title} delay={i * 60}>
            <IconCard icon={v.icon} title={v.title} />
          </AnimateOnScroll>
        ))}
      </div>
    </Container>
  </section>
);

export default ValuesSection;