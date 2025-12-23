'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * CTA Section - Japanese Zen Aesthetic
 *
 * Principles:
 * - Kanso (簡素): ABSOLUTE simplicity - question + button only
 * - Ma (間): Negative space IS the design
 * - Seijaku (静寂): Tranquility - calm invitation
 * - The restraint itself creates desire
 *
 * NO decorations. NO subtext. NO badges. NO effects.
 * Pure question. Pure invitation. Pure Zen.
 */

export default function CTASection(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="region"
      className="relative py-32 md:py-40 px-6 bg-white"
      {...props}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Simple Question */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-semibold text-black mb-12"
        >
          Ready to start?
        </motion.h2>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            href="/webapp"
            className="inline-flex items-center gap-2 border-2 border-black px-8 py-3 text-base font-sans font-medium text-black hover:bg-black hover:text-white transition-colors duration-250"
          >
            Try for Free
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
