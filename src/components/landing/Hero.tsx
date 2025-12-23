'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Hero Section - Japanese Minimalist Aesthetic
 *
 * Principles:
 * - Ma (間): Negative space as intentional design element
 * - Kanso (簡素): Simplicity - every element serves a purpose
 * - Shibui (渋い): Subtle elegance, refined beauty
 * - Seijaku (静寂): Tranquility through calm design
 * - Shizen (自然): Naturalness - typography IS the design
 *
 * NO gradients. NO decorations. NO effects.
 * Pure white. Pure typography. Pure intent.
 */

export default function Hero(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="banner"
      className="relative min-h-screen bg-white flex items-center justify-center py-32 md:py-48 px-6"
      {...props}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full"
      >
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtle eyebrow - Small, unassuming */}
        <p className="text-sm font-sans text-gray-500 mb-12 tracking-wider uppercase">
          Feature List Generator
        </p>

        {/* Headline - Typography IS the hero */}
        <h1 className="font-serif font-light text-5xl md:text-7xl text-black tracking-tight leading-[1.1] mb-12">
          From Technical
          <br />
          Documents to
          <br />
          Structured Lists
        </h1>

        {/* Horizontal divider - Shibui (subtle elegance) */}
        <div className="mx-auto mb-12 w-24 border-t border-gray-300" />

        {/* Value proposition - Clear, concise, calm */}
        <p className="text-lg md:text-xl text-gray-600 max-w-prose mx-auto mb-16 leading-relaxed font-serif">
          Extract features automatically from technical proposals with AI precision.
          Review, refine, and export to your preferred format.
        </p>

        {/* Single CTA - Minimal, intentional */}
        <Link
          href="/webapp"
          className="inline-flex items-center gap-2 border-2 border-black px-8 py-3 text-base font-sans font-medium text-black hover:bg-black hover:text-white transition-colors duration-250"
        >
          Try for Free
          <span aria-hidden="true">→</span>
        </Link>
      </div>
      </motion.div>
    </section>
  );
}
