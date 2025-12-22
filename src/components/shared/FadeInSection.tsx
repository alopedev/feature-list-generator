'use client';

import { useEffect, useRef, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { FadeInSectionProps } from '@/types';

/**
 * FadeInSection Component
 *
 * Triggers a fade-in animation when the element scrolls into view.
 * Uses Intersection Observer for efficient scroll detection.
 *
 * @example
 * <FadeInSection>
 *   <h2>Content that fades in on scroll</h2>
 * </FadeInSection>
 *
 * @example
 * <FadeInSection threshold={0.5} duration={1}>
 *   <p>Custom threshold and duration</p>
 * </FadeInSection>
 */
const FadeInSection = forwardRef<HTMLDivElement, FadeInSectionProps>(
  (
    {
      threshold = 0.1,
      rootMargin = '0px',
      duration = 0.6,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);

    // Use forwarded ref if provided, otherwise use internal ref
    const ref = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing (one-time animation)
            observer.unobserve(element);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);

      // Cleanup
      return () => {
        observer.disconnect();
      };
    }, [ref, threshold, rootMargin]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 40,
        }}
        transition={{
          duration,
          ease: 'easeOut',
        }}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeInSection.displayName = 'FadeInSection';

export default FadeInSection;
