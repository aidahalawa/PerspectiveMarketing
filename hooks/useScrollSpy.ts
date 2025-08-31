import { useState, useEffect, useCallback, useRef } from 'react';

export const useScrollSpy = (
  ids: string[],
  getOffset: () => number
): string | null => {
  const [activeId, setActiveId] = useState<string | null>(ids[0] || null);
  const timeoutRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    const offset = getOffset();
    const currentPosition = window.scrollY + offset;
    
    let currentActiveId = null;
    for (const id of ids) {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= currentPosition) {
        currentActiveId = id;
      }
    }
    
    setActiveId(currentActiveId);
  }, [ids, getOffset]);

  const debouncedHandler = useCallback(() => {
      if (timeoutRef.current) {
          window.cancelAnimationFrame(timeoutRef.current);
      }
      timeoutRef.current = window.requestAnimationFrame(handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandler, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', debouncedHandler);
      if (timeoutRef.current) {
        window.cancelAnimationFrame(timeoutRef.current);
      }
    };
  }, [debouncedHandler, handleScroll]);

  return activeId;
};
