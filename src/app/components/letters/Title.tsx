'use client';

import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  className?: string;
}

const Title = ({ children, as: Tag = 'h1', className = '' }: TitleProps) => {
  const baseClasses =
    'font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase text-black leading-tight';
  return <Tag className={`${baseClasses} ${className}`}>{children}</Tag>;
};

export default Title;
