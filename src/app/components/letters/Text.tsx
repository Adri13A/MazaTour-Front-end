'use client';

import React from 'react';

interface TextBodyProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
  className?: string;
}

const TextBody = ({ children, as: Tag = 'p', className = '' }: TextBodyProps) => {
  const baseClasses = 'text-gray-500 text-sm md:text-base leading-normal md:leading-normal';
  return <Tag className={`${baseClasses} ${className}`}>{children}</Tag>;
};

export default TextBody;
