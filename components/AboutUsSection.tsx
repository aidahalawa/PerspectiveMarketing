import React from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import AnimateOnScroll from './ui/AnimateOnScroll';

const AboutUsSection: React.FC = () => (
  <section id="about" className="py-20 scroll-mt-24">
    <Container>
      <SectionTitle 
        title="Nuestra Historia" 
        subtitle="Más que un trabajo, una misión compartida." 
      />
      <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <AnimateOnScroll>
          <img 
            src="https://media.istockphoto.com/id/871460910/es/foto/otro-lugar-mejor-productividad.jpg?s=612x612&w=0&k=20&c=hpdmCIsEPRvCuJ3D7hFoUhu9QVfcuGQ3UEQ9tVzCquc=$0"
            alt="Equipo colaborando en un ambiente positivo y corporativo"
            className="rounded-2xl object-cover shadow-xl aspect-video"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Desde nuestra fundación en <strong>2019</strong>, hemos tenido un doble propósito: apoyar a las <strong>ONGs más importantes del mundo</strong> en su labor vital y, al mismo tiempo, ofrecer a nuestro equipo un camino de crecimiento profesional y personal.
            </p>
            <p>
              Creemos en el poder de la formación continua para desarrollar no solo habilidades laborales, sino también sociales. Fomentamos un <strong>ambiente de trabajo excepcional</strong>, positivo y colaborativo, donde cada persona se siente valorada y motivada.
            </p>
            <p>
              Este enfoque nos ha permitido expandirnos con éxito, abriendo docenas de equipos en las <strong>8 ciudades más grandes de España</strong>. Somos una familia que crece junta, unida por el objetivo de generar un impacto real y positivo en la sociedad.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </Container>
  </section>
);

export default AboutUsSection;