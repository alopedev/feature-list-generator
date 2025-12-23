'use client';

import { motion } from 'framer-motion';

/**
 * How It Works Section - Japanese Minimalist Aesthetic
 *
 * Principles:
 * - Kanso (簡素): Simplicity - function over decoration
 * - Ma (間): Equal spacing - horizontal flow with breathing room
 * - Shibui (渋い): Subtle elegance - vermillion accent on numbers only
 * - Typography IS the visual hierarchy
 *
 * NO icons. NO cards. NO timeline. NO decorations.
 * Pure typography. Pure white. Pure process.
 */

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Upload Document',
    description: 'Drop your PDF or DOCX proposal. Fast processing begins automatically.',
  },
  {
    number: '02',
    title: 'AI Extraction',
    description: 'Claude analyzes your document and identifies all features with precision.',
  },
  {
    number: '03',
    title: 'Review & Refine',
    description: 'Customize the extracted list. Add, edit, or remove features as needed.',
  },
  {
    number: '04',
    title: 'Export Results',
    description: 'Download as Excel, CSV, or Markdown. Choose your preferred format.',
  },
];

export default function HowItWorks(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="region"
      className="relative py-20 md:py-28 px-6 bg-white"
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-black mb-16 text-center"
        >
          The Process
        </motion.h2>

        {/* Horizontal Grid - 4 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Step Number - Vermillion accent */}
                <div className="text-sm font-serif font-semibold text-vermillion mb-3">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-black mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm md:text-base font-serif font-light text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow Connector - Desktop only, between steps */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute top-0 -right-6 text-gray-300 text-2xl"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
