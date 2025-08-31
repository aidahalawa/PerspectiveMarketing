import React, { useEffect } from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import AnimateOnScroll from './ui/AnimateOnScroll';

// Sub-component: TallyContactFormEmbed
const TallyContactFormEmbed: React.FC = () => {
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
                data-tally-src="https://tally.so/embed/n98oBG?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="276"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contacto">
            </iframe>
         </div>
    );
};


const ContactSection: React.FC = () => (
    <section id="contact" className="py-20 scroll-mt-24">
        <Container>
            <SectionTitle
                title="Ponte en contacto"
                subtitle="¿Tienes alguna pregunta? Rellena el formulario y nuestro equipo te responderá lo antes posible."
            />
            <AnimateOnScroll>
                <TallyContactFormEmbed />
            </AnimateOnScroll>
        </Container>
    </section>
);

export default ContactSection;