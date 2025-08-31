import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useHashScroll } from './hooks/useHashScroll';
import { useScrollSpy } from './hooks/useScrollSpy';
import { JOBS } from './constants';
import type { Job, Review } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialsSection from './components/TestimonialsSection';
import ValuesSection from './components/ValuesSection';
import BenefitsSection from './components/BenefitsSection';
import OurImpact from './components/OurImpact';
import JobsSection from './components/JobsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Modal from './components/ui/Modal';
import JobDetails from './components/JobDetails';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

const SECTION_IDS = ['home', 'testimonials', 'mission', 'benefits', 'jobs', 'contact'];
const JOBS_PER_PAGE = 5;

export default function App() {
  const [theme, setTheme] = useTheme();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState({ location: 'all', type: 'all' });
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  
  const getHeaderHeight = useCallback(() => {
      const header = document.querySelector('header');
      return (header?.offsetHeight || 0) + 8;
  }, []);

  useHashScroll(getHeaderHeight);
  const activeId = useScrollSpy(SECTION_IDS, getHeaderHeight);

  useEffect(() => {
    const fetchReviews = async () => {
      setReviewsLoading(true);
      try {
        const airtableUrl = 'https://api.airtable.com/v0/appgv65PMJpBwVzOp/Hoja%201';
        const proxyUrl = `https://cors.trigox.workers.dev/?url=${encodeURIComponent(airtableUrl)}`;
        const response = await fetch(proxyUrl, {
          headers: {
            'Authorization': 'Bearer patiPyc8xpnZrYQif.6da8ce9d355d90fe1d27280129e3ead9c6e5b81538c1841c38d905c12f00c6bc'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const formattedReviews: Review[] = data.records
          .map((record: any) => {
            const fields = record.fields;
            if (fields['Nombre'] && fields['Puntuación'] && fields['Cuéntanos tu experiencia']) {
              return {
                id: record.id,
                author: `${fields['Nombre'] || ''} ${fields['Apellidos'] || ''}`.trim(),
                role: fields['Tu Puesto'] || 'Miembro del equipo',
                rating: parseInt(fields['Puntuación'], 10) || 5,
                text: fields['Cuéntanos tu experiencia'],
              };
            }
            return null;
          })
          .filter((review: Review | null): review is Review => review !== null)
          .sort(() => 0.5 - Math.random()); // Randomize order

        setReviews(formattedReviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const locations = useMemo(() => ['all', ...Array.from(new Set(JOBS.map(j => j.location)))], []);
  const types = useMemo(() => ['all', ...Array.from(new Set(JOBS.map(j => j.type)))], []);

  const filteredJobs = useMemo(() => {
    return JOBS.filter(j =>
      (filters.location === 'all' || j.location === filters.location) &&
      (filters.type === 'all' || j.type === filters.type)
    );
  }, [filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  return (
    <>
      <Header 
        theme={theme} 
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        activeId={activeId}
      />
      <main>
        <Hero />
        <TestimonialsSection reviews={reviews} isLoading={reviewsLoading} />
        <ValuesSection />
        <BenefitsSection />
        <OurImpact />
        <JobsSection
          filters={filters}
          setFilters={setFilters}
          locations={locations}
          types={types}
          jobs={currentJobs}
          setSelectedJob={setSelectedJob}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <ContactSection />
        <Modal open={!!selectedJob} onClose={() => setSelectedJob(null)} title={selectedJob?.details.title || ''}>
          {selectedJob && <JobDetails job={selectedJob} />}
        </Modal>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}