
import React from 'react';
import { classNames } from '../../utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={classNames("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

export default Container;
