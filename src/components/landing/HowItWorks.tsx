'use client';

import { motion } from 'framer-motion';

/**
 * How It Works - Editorial Luxury Aesthetic
 *
 * Vertical timeline with alternating cards, dramatic gradient numbers,
 * and organic flowing connectors. Award-winning visual quality.
 */

interface Step {
  number: string;
  title: string;
  description: string;
  gradient: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Upload Document',
    description: 'Drop your PDF or DOCX file into the secure upload zone. We support multi-page technical proposals of any size.',
    gradient: 'linear-gradient(135deg, #fcdc71 0%, #f2a25c 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'AI Extraction',
    description: 'Claude 3.5 Sonnet analyzes your document with advanced language understanding, identifying and categorizing every feature automatically.',
    gradient: 'linear-gradient(135deg, #607caa 0%, #4a6b8a 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Review & Refine',
    description: 'Edit extracted features with precision. Add, remove, reorder, or customize any item. Full control over your feature list.',
    gradient: 'linear-gradient(135deg, #98816e 0%, #7a6b5d 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Export Anywhere',
    description: 'Download your feature list in Excel, CSV, or Markdown format. Seamlessly integrate into your existing workflow and tools.',
    gradient: 'linear-gradient(135deg, #f2a25c 0%, #d88a4a 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowItWorks(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="region"
      className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 0%, rgba(96, 124, 170, 0.08), transparent),
          linear-gradient(180deg, #fdfbf7 0%, #faf8f3 50%, #f5f3ed 100%)
        `,
      }}
      {...props}
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-[15%] left-[10%] w-[300px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(252, 220, 113, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          borderRadius: '50%',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
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
              Simple Process
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
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Four simple steps to transform technical proposals into structured feature lists.
            Fast, easy, and automated.
          </motion.p>
        </div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Center connecting line - organic curve */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(96, 124, 170, 0.2) 10%, rgba(96, 124, 170, 0.2) 90%, transparent 100%)',
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Number - Dramatic and Overlapping */}
                  <div className={`hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}>
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                      className="relative"
                    >
                      <div
                        className="text-8xl font-extrabold tracking-tighter"
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          background: step.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Glow effect behind number */}
                      <div
                        className="absolute inset-0 blur-2xl opacity-30"
                        style={{
                          background: step.gradient,
                          transform: 'scale(1.2)',
                          zIndex: -1,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full lg:w-auto ${isEven ? 'lg:text-right' : ''}`}>
                    <motion.div
                      whileHover={{
                        y: -4,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative p-8 sm:p-10 rounded-3xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(16px)',
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: `
                          0 4px 24px rgba(0, 0, 0, 0.06),
                          0 2px 8px rgba(0, 0, 0, 0.04),
                          inset 0 1px 0 rgba(255, 255, 255, 0.8)
                        `,
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          boxShadow: `0 8px 40px ${step.gradient.match(/#[a-f0-9]{6}/i)?.[0]}33`,
                        }}
                      />

                      {/* Mobile number */}
                      <div className="lg:hidden mb-6">
                        <div
                          className="inline-block text-6xl font-extrabold tracking-tighter"
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            background: step.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={`flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'} mb-6`}>
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: step.gradient,
                            boxShadow: `
                              0 4px 16px rgba(0, 0, 0, 0.12),
                              inset 0 1px 0 rgba(255, 255, 255, 0.4)
                            `,
                          }}
                        >
                          <div className="w-8 h-8 text-white">
                            {step.icon}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <h3
                        className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 tracking-tight"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {step.title}
                      </h3>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative corner element */}
                      <div
                        className={`absolute ${isEven ? 'left-0' : 'right-0'} bottom-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                        style={{
                          background: step.gradient,
                          filter: 'blur(40px)',
                          borderRadius: '50%',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 h-1.5 bg-gradient-to-r from-transparent via-blue to-transparent mx-auto rounded-full"
          style={{ width: '25%', opacity: 0.4 }}
        />
      </div>
    </section>
  );
}
