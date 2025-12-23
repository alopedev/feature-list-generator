'use client';

import { motion } from 'framer-motion';

/**
 * Testimonials Section - Japanese Minimalist Aesthetic (SocialProof)
 *
 * Principles:
 * - Kanso (簡素): NO decorations, NO carousel complexity
 * - Ma (間): Generous spacing between cards
 * - Shibui (渋い): Subtle elegance through refined typography
 * - Typography IS the trust signal
 *
 * NO avatars. NO carousel. NO animations. NO decorations.
 * Pure typography. Pure testimonials. Pure credibility.
 */

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Excellent tool for technical proposals. Saves me hours every week.',
    author: 'Sarah Chen',
    role: 'Lead Consultant',
  },
  {
    quote: 'The AI extraction is remarkably accurate. Game changer for my workflow.',
    author: 'Mark Wilson',
    role: 'PM, Acme Inc',
  },
  {
    quote: 'Fast, intuitive, and incredibly useful. Now part of my standard toolkit.',
    author: 'Lisa Park',
    role: 'Solutions Architect',
  },
  {
    quote: 'Export options are perfect. Works seamlessly with any team\'s format.',
    author: 'James Taylor',
    role: 'Business Analyst',
  },
];

export default function Testimonials(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="region"
      className="relative py-20 md:py-28 px-6 bg-gray-50"
      {...props}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-black mb-16 text-center"
        >
          Client Feedback
        </motion.h2>

        {/* Static 2x2 Grid - All testimonials visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
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
              className="border border-gray-300 p-8"
            >
              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-base font-serif italic text-gray-800 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Attribution */}
              <cite className="not-italic text-sm font-sans text-gray-600">
                — {testimonial.author}, {testimonial.role}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
