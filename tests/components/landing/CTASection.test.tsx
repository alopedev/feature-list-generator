import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from '@/components/landing/CTASection';

describe('CTASection Component - Japanese Minimalism', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<CTASection />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<CTASection />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<CTASection />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should have pure white or gray-50 background', () => {
      render(<CTASection data-testid="cta" />);
      const section = screen.getByTestId('cta');
      // Japanese minimalism: white or subtle off-white
      expect(section.className).toMatch(/bg-white|bg-gray-50/);
    });

    it('should NOT have gradient backgrounds', () => {
      const { container } = render(<CTASection />);
      // Should NOT have inline gradient styles
      const hasGradients = container.innerHTML.includes('linear-gradient') ||
                          container.innerHTML.includes('radial-gradient');
      expect(hasGradients).toBe(false);
    });
  });

  describe('Content (Minimal Zen)', () => {
    it('should have main heading (h2)', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should use serif font for heading', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      // Noto Serif JP for heading
      expect(h2.className).toMatch(/font-serif/);
    });

    it('should have text-4xl or text-5xl heading size', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      expect(h2.className).toMatch(/text-4xl|text-5xl/);
    });

    it('should have simple question or statement as headline', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';
      // Simple, direct question
      const hasSimpleHeadline =
        content.includes('ready') ||
        content.includes('start') ||
        content.includes('try') ||
        content.includes('begin');
      expect(hasSimpleHeadline).toBe(true);
    });

    it('should have minimal or no supporting text', () => {
      const { container } = render(<CTASection />);
      const paragraphs = container.querySelectorAll('p');
      // Should have 0-1 paragraphs (NOT 2-3 like before)
      expect(paragraphs.length).toBeLessThanOrEqual(1);
    });
  });

  describe('CTA Button (Minimal Border Style)', () => {
    it('should have primary CTA button', () => {
      const { container } = render(<CTASection />);
      const links = container.querySelectorAll('a');
      expect(links.length).toBeGreaterThanOrEqual(1);
    });

    it('should have link to /webapp', () => {
      const { container } = render(<CTASection />);
      const webappLink = Array.from(container.querySelectorAll('a')).find(
        (link) => link.getAttribute('href') === '/webapp'
      );
      expect(webappLink).toBeInTheDocument();
    });

    it('should have clear button text', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent || '';
      const hasButtonText =
        content.includes('Try') ||
        content.includes('Start') ||
        content.includes('Get') ||
        content.includes('Begin') ||
        content.includes('Launch');
      expect(hasButtonText).toBe(true);
    });

    it('should have simple border styling (NOT gradient)', () => {
      const { container } = render(<CTASection />);
      const links = container.querySelectorAll('a');
      // Should have border-2 black button
      const hasSimpleBorder = Array.from(links).some((link) =>
        link.className.includes('border')
      );
      expect(hasSimpleBorder).toBe(true);
    });

    it('should NOT have gradient button background', () => {
      const { container } = render(<CTASection />);
      // NO gradient buttons
      const hasGradientButton = container.innerHTML.includes('linear-gradient');
      expect(hasGradientButton).toBe(false);
    });

    it('should have hover:bg transition', () => {
      const { container } = render(<CTASection />);
      const content = container.innerHTML;
      // Should have hover:bg-black or similar
      const hasHoverFill =
        content.includes('hover:bg-black') ||
        content.includes('hover:bg-');
      expect(hasHoverFill).toBe(true);
    });
  });

  describe('NO Decorative Elements (Kanso)', () => {
    it('should NOT have glassmorphism badges', () => {
      const { container } = render(<CTASection />);
      // NO "Ready to Get Started?" badge
      const hasGlassmorphismBadge = container.innerHTML.includes('backdrop-blur');
      expect(hasGlassmorphismBadge).toBe(false);
    });

    it('should NOT have floating decorative blobs', () => {
      const { container } = render(<CTASection />);
      // NO decorative blobs
      const hasBlobs =
        (container.innerHTML.includes('absolute') && container.innerHTML.includes('blur')) ||
        container.innerHTML.includes('radial-gradient');
      expect(hasBlobs).toBe(false);
    });

    it('should NOT have noise texture overlay', () => {
      const { container } = render(<CTASection />);
      // NO noise textures
      const hasNoise = container.innerHTML.includes('feTurbulence');
      expect(hasNoise).toBe(false);
    });

    it('should NOT have arrow icons in button', () => {
      const { container } = render(<CTASection />);
      const svgs = container.querySelectorAll('svg');
      // Should have 0 SVG icons
      expect(svgs.length).toBe(0);
    });

    it('should NOT have shine effect animation', () => {
      const { container } = render(<CTASection />);
      // NO shine effect with translate-x
      const hasShine =
        container.innerHTML.includes('shine') ||
        container.innerHTML.includes('translate-x-full');
      expect(hasShine).toBe(false);
    });

    it('should NOT have hover glow enhancement', () => {
      const { container } = render(<CTASection />);
      const content = container.innerHTML;
      // Should NOT have dramatic box-shadow on hover
      const hasGlow =
        content.includes('hover:shadow-2xl') ||
        content.includes('glow') ||
        (content.includes('opacity-0') && content.includes('boxShadow'));
      expect(hasGlow).toBe(false);
    });

    it('should NOT have trust badges with checkmark icons', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';
      // NO "No credit card required" trust badge
      const hasTrustBadge =
        content.includes('no credit card') ||
        content.includes('instant access') ||
        content.includes('cancel anytime');
      expect(hasTrustBadge).toBe(false);
    });

    it('should NOT have gradient text masking', () => {
      const { container } = render(<CTASection />);
      // NO WebkitBackgroundClip gradient text
      const hasGradientText =
        container.innerHTML.includes('WebkitBackgroundClip') ||
        container.innerHTML.includes('backgroundClip: \'text\'');
      expect(hasGradientText).toBe(false);
    });
  });

  describe('Typography Hierarchy (Minimal)', () => {
    it('should have clear heading', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      // Should be large but not dramatic
      expect(h2.className).toMatch(/text-4xl|text-5xl/);
    });

    it('should use serif typography', () => {
      const { container } = render(<CTASection />);
      const content = container.innerHTML;
      // Should use serif font
      expect(content).toMatch(/font-serif/);
    });

    it('should have black text color', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      expect(h2.className).toMatch(/text-black|text-gray-900/);
    });
  });

  describe('Spacing (Ma Principle)', () => {
    it('should have generous padding (py-32)', () => {
      render(<CTASection data-testid="cta" />);
      const section = screen.getByTestId('cta');
      // Generous vertical padding
      expect(section.className).toMatch(/py-24|py-28|py-32/);
    });

    it('should have max-width container', () => {
      const { container } = render(<CTASection />);
      // Should have max-width constraint
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });

    it('should have centered layout', () => {
      const { container } = render(<CTASection />);
      // Should have centering classes
      const hasCentering =
        container.innerHTML.includes('text-center') ||
        container.innerHTML.includes('items-center') ||
        container.innerHTML.includes('justify-center') ||
        container.innerHTML.includes('mx-auto');
      expect(hasCentering).toBe(true);
    });
  });

  describe('Animation (Minimal)', () => {
    it('should have simple fade-in or no animation', () => {
      const { container } = render(<CTASection />);
      const content = container.innerHTML;
      // May have simple fade-in, but NO complex animations
      const hasComplexAnimations =
        content.includes('scale') ||
        content.includes('rotate') ||
        content.includes('bounce');
      expect(hasComplexAnimations).toBe(false);
    });

    it('should have simple transition on button hover', () => {
      const { container } = render(<CTASection />);
      // Should have transition class on button
      const hasTransition = container.innerHTML.includes('transition');
      expect(hasTransition).toBe(true);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<CTASection data-testid="cta" />);
      const section = screen.getByTestId('cta');
      // Should have responsive padding
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should adapt for mobile devices', () => {
      const { container } = render(<CTASection />);
      // Should have responsive breakpoint classes
      const hasResponsive =
        container.innerHTML.includes('sm:') ||
        container.innerHTML.includes('md:') ||
        container.innerHTML.includes('lg:');
      expect(hasResponsive).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have semantic HTML structure', () => {
      render(<CTASection />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      render(<CTASection />);
      // Should have h2 for section
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should have accessible links', () => {
      const { container } = render(<CTASection />);
      const links = container.querySelectorAll('a');
      // Links should have href
      links.forEach((link) => {
        expect(link.hasAttribute('href')).toBe(true);
      });
    });

    it('should have high contrast text', () => {
      const { container } = render(<CTASection />);
      const content = container.innerHTML;
      // Should use high-contrast colors
      expect(content).toMatch(/text-black|text-gray-900/);
    });
  });

  describe('Props', () => {
    it('should accept custom className', () => {
      render(<CTASection className="custom-class" data-testid="cta" />);
      const section = screen.getByTestId('cta');
      expect(section).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<CTASection data-testid="test-section" />);
      expect(screen.getByTestId('test-section')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<CTASection aria-label="CTA section" data-testid="cta" />);
      const section = screen.getByTestId('cta');
      expect(section).toHaveAttribute('aria-label', 'CTA section');
    });
  });

  describe('Content Quality', () => {
    it('should have concise headline', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent || '';
      // Should be brief, NOT verbose
      expect(content.length).toBeLessThan(100);
    });

    it('should be direct and simple', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';
      // Should have simple, direct language
      const hasDirect =
        content.includes('ready') ||
        content.includes('start') ||
        content.includes('try');
      expect(hasDirect).toBe(true);
    });
  });
});
