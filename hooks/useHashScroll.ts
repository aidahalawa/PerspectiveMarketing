import { useEffect, useCallback } from 'react';

export const useHashScroll = (getOffset: () => number) => {
  const smoothScrollTo = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = getOffset();
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [getOffset]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.length > 1 && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          smoothScrollTo(targetId);
          if (window.location.hash !== href) {
            try {
              const urlWithoutHash = window.location.href.split('#')[0];
              history.pushState(null, '', urlWithoutHash + href);
            } catch (error) {
              console.warn('Could not update URL hash:', error);
            }
          }
        }
      }
    };
    
    const handlePopState = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        smoothScrollTo(targetId);
      } else {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => smoothScrollTo(targetId), 100);
    }

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [smoothScrollTo]);
};