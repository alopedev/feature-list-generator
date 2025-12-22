'use client';

import Link from 'next/link';
import AnimatedHeadline from '@/components/shared/AnimatedHeadline';

/**
 * Hero Section
 *
 * Landing page hero with animated headline and dual CTAs.
 * Inspired by diabrowser.com's warm, minimalist aesthetic.
 */
export default function Hero(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      role="banner"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdfbf7] via-white to-[#faf8f3] px-4 sm:px-6 lg:px-8"
      {...props}
    >
      {/* Decorative background elements - floating document fragments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-32 h-32 bg-gold/5 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-[20%] left-[8%] w-24 h-24 bg-blue/5 rounded-2xl -rotate-6 animate-float-delayed" />
        <div className="absolute top-[40%] left-[15%] w-16 h-16 border-2 border-gold/10 rounded-xl rotate-45 animate-float-slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center py-20 sm:py-24 space-y-12">
        {/* Eyebrow text */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 backdrop-blur-sm rounded-full border border-gold/20">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700 tracking-wide">
            AI-Powered Feature Extraction
          </span>
        </div>

        {/* Main headline with animated text */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-3">
            <span className="text-lg sm:text-xl font-semibold text-gray-600">
              Automatically
            </span>
            <AnimatedHeadline
              headlines={[
                'Extract Features',
                'Analyze Proposals',
                'Generate Reports'
              ]}
              interval={3500}
              level={1}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-[1.1] tracking-tight"
            />
            <span className="text-lg sm:text-xl font-semibold text-gray-600">
              from Technical Documents
            </span>
          </div>

          {/* Supporting subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-light px-4">
            Transform lengthy technical proposals into structured feature lists in seconds.
            Powered by Claude AI, refined by you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary CTA */}
          <Link
            href="/webapp"
            className="group relative px-8 py-4 bg-gold text-gray-900 font-semibold rounded-2xl shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:scale-105 active:scale-100 transition-all duration-200 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Try It Now
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#features"
            className="group px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border-2 border-gray-300 hover:border-blue hover:bg-white hover:text-blue transition-all duration-200 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Social proof hint */}
        <div className="pt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-orange border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-[#4a6b8a] border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brown to-[#8a7565] border-2 border-white" />
            </div>
            <span className="font-medium">Trusted by consultants</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="hidden sm:flex items-center gap-1.5">
            <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">Fast & Accurate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
