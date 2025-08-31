import React, { useState, useEffect } from 'react';
import type { Review } from '../types';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import RatingStars from './ui/RatingStars';
import AnimateOnScroll from './ui/AnimateOnScroll';
import Pagination from './ui/Pagination';

const REVIEWS_PER_PAGE = 4;

// Helper to generate initials from a name
const getInitials = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length > 1 && parts[0] && parts[parts.length - 1]) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// Helper to get a consistent color from a string
const nameToColor = (name: string): string => {
  const colors = [
    'bg-amber-500', 'bg-sky-500', 'bg-emerald-500', 
    'bg-rose-500', 'bg-indigo-500', 'bg-teal-500'
  ];
  let hash = 0;
  if (name.length === 0) return colors[0];
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
};

const ConceptualAvatar: React.FC<{ name: string }> = ({ name }) => (
    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${nameToColor(name)}`}>
        <span className="text-lg font-bold text-white">{getInitials(name)}</span>
    </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="flex h-72 flex-col rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-4">
            <ConceptualAvatar name={review.author} />
            <div>
                <div className="font-semibold text-slate-900 dark:text-white">{review.author}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{review.role}</div>
            </div>
            <div className="ml-auto">
                <RatingStars value={review.rating} />
            </div>
        </div>
        <p
          className="mt-4 text-slate-700 dark:text-slate-200"
          style={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 7,
            WebkitBoxOrient: 'vertical',
          } as React.CSSProperties}
        >
          “{review.text}”
        </p>
    </div>
);

// New Skeleton component for loading state
const ReviewCardSkeleton: React.FC = () => (
    <div className="flex h-72 flex-col rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 animate-pulse">
        <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex-shrink-0 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div>
                <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700"></div>
                <div className="mt-2 h-3 w-32 rounded bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <div className="ml-auto h-4 w-20 rounded bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <div className="mt-4 space-y-2">
            <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
            <div className="h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-700"></div>
            <div className="h-3 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
        </div>
    </div>
);


// Sub-component: TallyTestimonialFormEmbed
const TallyTestimonialFormEmbed: React.FC = () => {
    useEffect(() => {
        const scriptId = 'tally-embed-script';
        if (document.getElementById(scriptId)) {
            // @ts-ignore
            if (typeof window.Tally !== 'undefined') {
                // @ts-ignore
                window.Tally.loadEmbeds();
            }
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
             // @ts-ignore
            if (typeof window.Tally !== 'undefined') {
                // @ts-ignore
                window.Tally.loadEmbeds();
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
         <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
             <iframe
                data-tally-src="https://tally.so/embed/mVKb2g?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="401"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Deja tu Testimonio">
            </iframe>
         </div>
    );
};


interface TestimonialsSectionProps {
  reviews: Review[];
  isLoading: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ reviews, isLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
    
    const currentReviews = reviews.slice(
        (currentPage - 1) * REVIEWS_PER_PAGE,
        currentPage * REVIEWS_PER_PAGE
    );

    useEffect(() => {
        // Reset to page 1 if reviews change (e.g., after loading)
        setCurrentPage(1);
    }, [reviews]);
    
    return (
        <section id="testimonials" className="py-20 scroll-mt-24">
            <Container>
                <SectionTitle 
                    title="Lo que dice nuestro equipo" 
                    subtitle="Nadie mejor que quienes lo viven cada día." 
                />
                <div className="mt-10 grid min-h-[400px] grid-cols-1 gap-6 md:grid-cols-2">
                    {isLoading ? (
                        Array.from({ length: REVIEWS_PER_PAGE }).map((_, i) => (
                           <ReviewCardSkeleton key={i} />
                        ))
                    ) : (
                        currentReviews.map((review, i) => (
                            <AnimateOnScroll key={review.id} delay={i * 100}>
                                <ReviewCard review={review} />
                            </AnimateOnScroll>
                        ))
                    )}
                </div>

                {!isLoading && reviews.length === 0 && (
                    <div className="py-10 text-center">
                        <p className="text-slate-600 dark:text-slate-300">No hay testimonios disponibles en este momento.</p>
                    </div>
                )}

                {!isLoading && totalPages > 1 && (
                    <div className="mt-10">
                        <AnimateOnScroll>
                             <Pagination 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </AnimateOnScroll>
                    </div>
                )}

                <div className="mt-20">
                    <SectionTitle 
                        title="Comparte tu experiencia" 
                        subtitle="Tu opinión es muy importante para nosotros y para futuros compañeros." 
                    />
                    <AnimateOnScroll>
                        <TallyTestimonialFormEmbed />
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialsSection;