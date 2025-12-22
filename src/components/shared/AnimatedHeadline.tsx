'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { AnimatedHeadlineProps } from '@/types';

/**
 * AnimatedHeadline Component
 *
 * Displays cycling animated headlines with smooth fade transitions.
 * Perfect for hero sections to showcase multiple value propositions.
 *
 * @example
 * <AnimatedHeadline
 *   headlines={['Extract Features', 'Analyze Proposals', 'Generate Reports']}
 *   interval={3000}
 * />
 */
export default function AnimatedHeadline({
  headlines,
  interval = 4000,
  level = 1,
  className,
  ...props
}: AnimatedHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Don't cycle if only one headline or no headlines
    if (headlines.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, interval);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [headlines.length, interval]);

  // Handle empty headlines array
  if (!headlines || headlines.length === 0) {
    return null;
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Responsive text sizing based on heading level
  const sizeStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
  };

  const headlineStyles = cn(
    'font-bold',
    'leading-tight',
    'text-gray-900',
    sizeStyles[level],
    className
  );

  return (
    <Tag className={headlineStyles} {...props}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          data-testid="animated-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          {headlines[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </Tag>
  );
}
