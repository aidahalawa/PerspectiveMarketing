import React, { useEffect } from 'react';

interface TallyEmbedProps {
  formId: string;
  height: number;
  title: string;
  options?: Record<string, string | number | boolean>;
}

const TallyEmbed: React.FC<TallyEmbedProps> = ({ formId, height, title, options = {} }) => {
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
    script.onerror = () => {
      console.error("Failed to load Tally embed script.");
    };
    document.body.appendChild(script);

    return () => {
        const scriptElement = document.getElementById(scriptId);
        if (scriptElement && scriptElement.parentElement === document.body) {
            // In a real SPA, you might want to remove the script on component unmount
            // but for this app's structure, leaving it is fine and prevents re-downloads.
        }
    };
  }, []);

  const queryParams = new URLSearchParams({
      alignLeft: "1",
      hideTitle: "1",
      transparentBackground: "1",
      dynamicHeight: "1",
      ...options,
  }).toString();
  
  const src = `https://tally.so/embed/${formId}?${queryParams}`;

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
      ></iframe>
    </div>
  );
};

export default TallyEmbed;
