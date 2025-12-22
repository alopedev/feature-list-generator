'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Testimonials Carousel - Editorial Luxury Aesthetic
 *
 * Auto-rotating testimonials with massive decorative quote marks,
 * elegant serif typography, and smooth cross-fade transitions.
 */

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This tool saves me hours on every project proposal review. The AI extraction is spot-on, and I can customize the output exactly how I need it. Game changer for technical consultants.",
    author: "Marcus Chen",
    role: "Senior Technical Consultant",
    gradient: "linear-gradient(135deg, #fcdc71 0%, #f2a25c 100%)",
  },
  {
    quote: "The accuracy of Claude's feature extraction is remarkable. What used to take me half a day now takes minutes. The export options make it seamless to integrate into our workflow.",
    author: "Sarah Rodriguez",
    role: "Project Manager, Enterprise Solutions",
    gradient: "linear-gradient(135deg, #607caa 0%, #4a6b8a 100%)",
  },
  {
    quote: "I love how easy it is to refine and customize the extracted features. The interface is intuitive, and the quality of output is consistently excellent. Highly recommend for any consultant.",
    author: "James Patterson",
    role: "Lead Business Analyst",
    gradient: "linear-gradient(135deg, #98816e 0%, #7a6b5d 100%)",
  },
  {
    quote: "Fast, accurate, and incredibly useful. The ability to export to Excel, CSV, or Markdown means I can work with any team's preferred format. This is now part of my standard toolkit.",
    author: "Emily Nakamura",
    role: "Solutions Architect",
    gradient: "linear-gradient(135deg, #f2a25c 0%, #d88a4a 100%)",
  },
];

export default function Testimonials(props?: React.HTMLAttributes<HTMLElement>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      role="region"
      className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 overflow-hidden bg-white"
      {...props}
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-[20%] right-[8%] w-[250px] h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(96, 124, 170, 0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full"
            style={{
              background: 'rgba(252, 220, 113, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(252, 220, 113, 0.2)',
            }}
          >
            <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
              Trusted by Consultants
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            What Consultants Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Join hundreds of technical consultants who save hours every week with automated feature extraction.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative min-h-[400px] sm:min-h-[450px] flex items-center justify-center">
          {/* Giant decorative quote mark background */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 pointer-events-none select-none"
            style={{
              fontSize: '20rem',
              lineHeight: 1,
              background: currentTestimonial.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.08,
              fontFamily: 'Georgia, serif',
            }}
          >
            "
          </div>

          {/* Testimonial Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-w-4xl mx-auto text-center px-4"
            >
              {/* Quote Text */}
              <blockquote className="mb-10">
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-relaxed italic mb-8"
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>

              {/* Author Attribution */}
              <div className="flex flex-col items-center gap-4">
                {/* Avatar Circle with Gradient */}
                <div
                  className="w-16 h-16 rounded-full"
                  style={{
                    background: currentTestimonial.gradient,
                    boxShadow: `
                      0 4px 16px rgba(0, 0, 0, 0.12),
                      inset 0 1px 0 rgba(255, 255, 255, 0.4)
                    `,
                  }}
                />

                <div>
                  <cite className="not-italic">
                    <div
                      className="text-lg sm:text-xl font-semibold text-gray-900 mb-1"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {currentTestimonial.author}
                    </div>
                    <div className="text-base text-gray-600">
                      {currentTestimonial.role}
                    </div>
                  </cite>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
              className="group relative p-2 transition-all duration-300"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: currentIndex === index ? 1.2 : 1,
                  opacity: currentIndex === index ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: currentIndex === index
                    ? testimonials[index].gradient
                    : '#9ca3af',
                }}
              />

              {/* Hover effect */}
              {currentIndex !== index && (
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-2.5 h-2.5 rounded-full mx-auto mt-2"
                    style={{
                      background: testimonials[index].gradient,
                      opacity: 0.6,
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full"
          style={{ width: '20%', opacity: 0.3 }}
        />
      </div>
    </section>
  );
}
