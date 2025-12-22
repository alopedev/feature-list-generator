'use client';

import { motion } from 'framer-motion';

/**
 * Features Grid - Editorial Luxury Aesthetic
 *
 * Premium feature showcase with glassmorphism cards,
 * custom gradient SVG icons, and orchestrated animations.
 */

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    title: 'PDF & DOCX Support',
    description: 'Upload technical proposals in any format. Seamlessly process both PDF and DOCX documents with perfect text extraction.',
    gradient: 'linear-gradient(135deg, #fcdc71 0%, #f2a25c 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          stroke="url(#gradient-doc)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient-doc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcdc71" />
            <stop offset="100%" stopColor="#f2a25c" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Claude AI Powered',
    description: 'Intelligent extraction using Claude 3.5 Sonnet. Advanced language understanding ensures accurate feature identification and categorization.',
    gradient: 'linear-gradient(135deg, #607caa 0%, #4a6b8a 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          stroke="url(#gradient-ai)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient-ai" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#607caa" />
            <stop offset="100%" stopColor="#4a6b8a" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Manual Refinement',
    description: 'Review and edit extracted features with precision. Full control to customize, reorder, add, or remove items as needed.',
    gradient: 'linear-gradient(135deg, #98816e 0%, #7a6b5d 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          stroke="url(#gradient-edit)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient-edit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#98816e" />
            <stop offset="100%" stopColor="#7a6b5d" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Multi-Format Export',
    description: 'Export to Excel, CSV, or Markdown. Choose the format that best fits your workflow and collaboration needs.',
    gradient: 'linear-gradient(135deg, #f2a25c 0%, #d88a4a 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          stroke="url(#gradient-export)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient-export" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f2a25c" />
            <stop offset="100%" stopColor="#d88a4a" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Secure & Private',
    description: 'Your data stays yours. Local processing with secure API calls. No document storage or data retention. Complete privacy guaranteed.',
    gradient: 'linear-gradient(135deg, #607caa 0%, #5a7099 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          stroke="url(#gradient-secure)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient-secure" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#607caa" />
            <stop offset="100%" stopColor="#5a7099" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Lightning Fast',
    description: 'Extract features in seconds. Powered by Claude AI for instant processing. Save hours of manual work with automated extraction.',
    gradient: 'linear-gradient(135deg, #fcdc71 0%, #e5c563 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="url(#gradient-fast)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient-fast" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcdc71" />
            <stop offset="100%" stopColor="#e5c563" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturesGrid(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="region"
      className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 overflow-hidden bg-white"
      {...props}
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(252, 220, 113, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50% 40% 60% 40%',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute bottom-[10%] left-[8%] w-[350px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(96, 124, 170, 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          borderRadius: '40% 60% 50% 50%',
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full"
            style={{
              background: 'rgba(96, 124, 170, 0.06)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(96, 124, 170, 0.15)',
            }}
          >
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">
              Powerful Features
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
            Everything you need to
            <span className="block mt-2" style={{
              background: 'linear-gradient(135deg, #607caa 0%, #fcdc71 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              extract features faster
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            A complete toolkit designed for technical consultants who value precision, speed, and control.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              className="group relative p-8 rounded-2xl cursor-default"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(45, 45, 45, 0.08)',
                boxShadow: `
                  0 1px 3px rgba(0, 0, 0, 0.05),
                  0 4px 12px rgba(0, 0, 0, 0.03),
                  inset 0 1px 0 rgba(255, 255, 255, 0.6)
                `,
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 8px 32px rgba(96, 124, 170, 0.15)',
                }}
              />

              {/* Icon container */}
              <div className="relative mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: feature.gradient,
                    boxShadow: `
                      0 4px 16px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3)
                    `,
                  }}
                >
                  <div className="w-7 h-7 text-white">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner accent */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: feature.gradient,
                  filter: 'blur(30px)',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          style={{ width: '30%', opacity: 0.3 }}
        />
      </div>
    </section>
  );
}
