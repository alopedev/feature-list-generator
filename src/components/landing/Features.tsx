'use client';

import { motion } from 'framer-motion';

/**
 * Features Section - Japanese Minimalist Aesthetic
 *
 * Principles:
 * - Kanso (簡素): Vertical list, NOT grid - single focus
 * - Ma (間): 96px spacing - generous breathing room
 * - Shibui (渋い): Vermillion accent ONLY for numbers
 * - Typography IS the visual hierarchy
 *
 * NO icons. NO cards. NO decorations.
 * Pure typography. Pure white. Pure intent.
 */

interface Feature {
  number: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    number: '01',
    title: 'PDF & DOCX Support',
    description: 'Upload proposals in any format. Seamlessly process both PDF and DOCX documents with perfect text extraction.',
  },
  {
    number: '02',
    title: 'AI-Powered Extraction',
    description: 'Claude analyzes and extracts features with precision. Advanced language understanding ensures accurate identification.',
  },
  {
    number: '03',
    title: 'Manual Refinement',
    description: 'Review and customize extracted features before export. Full control to add, edit, or remove items as needed.',
  },
  {
    number: '04',
    title: 'Multiple Export Formats',
    description: 'Download as Excel, CSV, or Markdown. Choose the format that best fits your workflow and collaboration needs.',
  },
  {
    number: '05',
    title: 'Secure & Private',
    description: 'Process documents locally, your data stays private. No document storage or data retention. Complete privacy guaranteed.',
  },
  {
    number: '06',
    title: 'Lightning Fast',
    description: 'Extract hundreds of features in seconds. Save hours of manual work with automated extraction powered by Claude AI.',
  },
];

export default function FeaturesGrid(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="region"
      className="relative py-20 md:py-28 px-6 bg-white"
      {...props}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-black mb-16 text-center md:text-left"
        >
          What You Get
        </motion.h2>

        {/* Vertical List of Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="mb-24"
            >
              {/* Number - Vermillion accent */}
              <div className="text-sm font-serif font-semibold text-vermillion mb-3">
                {feature.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-black mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg font-serif font-light text-gray-600 max-w-prose leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
