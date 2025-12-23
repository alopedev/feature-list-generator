'use client';

import Link from 'next/link';

/**
 * Footer - Japanese Minimalist Aesthetic
 *
 * Principles:
 * - Kanso (簡素): Clean, functional, NO decorations
 * - Ma (間): Generous spacing between sections
 * - Professional utility over visual flair
 *
 * NO icons. NO gradients. NO decorations.
 * Pure typography. Pure structure. Pure function.
 */

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Updates', href: '/updates' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Guides', href: '/guides' },
    { label: 'Support', href: '/support' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:hello@example.com' },
  ],
};

export default function Footer(props?: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      role="contentinfo"
      className="relative border-t border-gray-200 bg-white py-16 px-6"
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-black mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-black mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-black mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-sm font-sans font-semibold text-black mb-4">
              Social
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © 2025{' '}
            <span className="font-serif">Feature List Generator</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
