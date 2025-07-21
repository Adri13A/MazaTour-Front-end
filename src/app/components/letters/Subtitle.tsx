'use client';

import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
}

const Subtitle = ({ children, as: Tag = 'h2', className = '' }: SubtitleProps) => {
  const baseClasses = 'font-semibold text-lg sm:text-base md:text-lg text-accent2';
  return <Tag className={`${baseClasses} ${className}`}>{children}</Tag>;
};

export default Subtitle;
