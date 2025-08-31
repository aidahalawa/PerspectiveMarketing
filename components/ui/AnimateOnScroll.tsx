
import React from 'react';
import { useInView } from '../../hooks/useInView';
import { classNames } from '../../utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, delay = 0 }) => {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={classNames(
        "transform-gpu opacity-0 translate-y-6 transition duration-700",
        visible && "opacity-100 translate-y-0"
      )}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
