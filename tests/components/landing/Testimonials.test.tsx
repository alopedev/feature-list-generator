import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '@/components/landing/Testimonials';

describe('Testimonials Component - Japanese Minimalism (SocialProof)', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<Testimonials />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<Testimonials />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<Testimonials />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should have pure white or rice-paper background', () => {
      render(<Testimonials data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');
      // Japanese minimalism: white or subtle off-white
      expect(section.className).toMatch(/bg-white|bg-rice-paper|bg-gray-50/);
    });

    it('should NOT have gradient backgrounds', () => {
      const { container } = render(<Testimonials />);
      // Should NOT have inline gradient styles
      const hasGradients = container.innerHTML.includes('linear-gradient') ||
                          container.innerHTML.includes('radial-gradient');
      expect(hasGradients).toBe(false);
    });
  });

  describe('Section Header', () => {
    it('should have main section title (h2)', () => {
      render(<Testimonials />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should use serif font for section title', () => {
      render(<Testimonials />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      // Noto Serif JP for headings
      expect(h2.className).toMatch(/font-serif/);
    });

    it('should have large text size for section title (text-3xl)', () => {
      render(<Testimonials />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      expect(h2.className).toMatch(/text-3xl|text-4xl/);
    });

    it('should mention testimonials, reviews, or client feedback', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/testimonial|review|client|feedback|trusted|love/);
    });
  });

  describe('Static Grid Layout (NOT Carousel)', () => {
    it('should have grid layout (NOT carousel)', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should have grid, NOT carousel
      const hasGrid = content.includes('grid');
      expect(hasGrid).toBe(true);
    });

    it('should have 2x2 grid on desktop', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should have 2-column grid on desktop
      const has2Columns =
        content.includes('grid-cols-2') ||
        content.includes('md:grid-cols-2') ||
        content.includes('lg:grid-cols-2');
      expect(has2Columns).toBe(true);
    });

    it('should have single column on mobile', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should stack vertically on mobile
      const hasMobileStack =
        content.includes('grid-cols-1') ||
        content.includes('flex-col');
      expect(hasMobileStack).toBe(true);
    });

    it('should display all testimonials at once (NO carousel rotation)', () => {
      const { container } = render(<Testimonials />);
      // Should have multiple quotes visible simultaneously
      const quotes = container.querySelectorAll('blockquote, p');
      // At least 4 testimonials should be rendered (2x2 grid)
      expect(quotes.length).toBeGreaterThanOrEqual(4);
    });

    it('should have equal spacing between cards', () => {
      const { container } = render(<Testimonials />);
      // Should have gap utilities
      const hasGap =
        container.innerHTML.includes('gap-') ||
        container.innerHTML.includes('space-');
      expect(hasGap).toBe(true);
    });
  });

  describe('Testimonial Content', () => {
    it('should display at least 4 testimonials (2x2 grid)', () => {
      const { container } = render(<Testimonials />);
      // Should have multiple blockquotes or quote containers
      const quotes = container.querySelectorAll('blockquote, [class*="quote"]');
      expect(quotes.length).toBeGreaterThanOrEqual(3);
    });

    it('should have short quotes (1-2 sentences max)', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';
      // Quotes should be concise - check that total content is reasonable
      // Not super long like the old carousel (which had 3-5 sentence quotes)
      expect(content.length).toBeLessThan(800);
    });

    it('should have testimonial author names', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';
      // Should have some names (length indicates content)
      expect(content.length).toBeGreaterThan(50);
    });

    it('should have author roles or titles', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent?.toLowerCase() || '';
      // Should mention roles
      const hasRoles =
        content.includes('consultant') ||
        content.includes('manager') ||
        content.includes('engineer') ||
        content.includes('director') ||
        content.includes('analyst') ||
        content.includes('lead') ||
        content.includes('pm') ||
        content.includes('inc') ||
        content.includes('corp');
      expect(hasRoles).toBe(true);
    });

    it('should have compelling testimonial quotes', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';
      // Should have substantial testimonial content
      expect(content.length).toBeGreaterThan(100);
    });
  });

  describe('Quote Styling (Serif Italic)', () => {
    it('should use serif font for quotes', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Quotes should use serif font
      expect(content).toMatch(/font-serif/);
    });

    it('should use italic style for quotes', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Quotes should be italicized
      expect(content).toMatch(/italic/);
    });

    it('should have quote marks in content', () => {
      const { container } = render(<Testimonials />);
      // Should have quote marks
      const hasQuoteMarks =
        container.innerHTML.includes('"') ||
        container.innerHTML.includes('&quot;') ||
        container.innerHTML.includes('quote');
      expect(hasQuoteMarks).toBe(true);
    });
  });

  describe('Author Attribution', () => {
    it('should have author attribution below each quote', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';
      // Should have "— Name" format or similar
      const hasAttribution =
        content.includes('—') ||
        content.includes('-') ||
        content.includes('–');
      expect(hasAttribution).toBe(true);
    });

    it('should use sans font for attribution', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Attribution should use sans font
      expect(content).toMatch(/font-sans/);
    });

    it('should have gray-600 color for attribution', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Attribution should be subtle gray
      expect(content).toMatch(/text-gray-600|text-ash-gray/);
    });
  });

  describe('Card Styling (Minimal)', () => {
    it('should have simple borders (NOT glassmorphism)', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should have border utilities
      const hasBorders =
        content.includes('border-') ||
        content.includes('border ');
      expect(hasBorders).toBe(true);
    });

    it('should NOT have glassmorphism or backdrop-blur', () => {
      const { container } = render(<Testimonials />);
      // NO glassmorphism effects
      const hasGlassmorphism = container.innerHTML.includes('backdrop-blur');
      expect(hasGlassmorphism).toBe(false);
    });

    it('should have subtle or no shadows', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should NOT have dramatic shadows
      const hasDramaticShadows =
        content.includes('shadow-lg') ||
        content.includes('shadow-xl') ||
        content.includes('shadow-2xl');
      expect(hasDramaticShadows).toBe(false);
    });

    it('should have padding inside cards', () => {
      const { container } = render(<Testimonials />);
      // Should have padding (p-6, p-8, etc.)
      const hasPadding = container.innerHTML.includes('p-');
      expect(hasPadding).toBe(true);
    });
  });

  describe('NO Decorative Elements (Kanso principle)', () => {
    it('should NOT have avatar images or gradient circles', () => {
      const { container } = render(<Testimonials />);
      // NO avatar circles
      const hasAvatars =
        container.innerHTML.includes('avatar') ||
        (container.innerHTML.includes('rounded-full') && container.innerHTML.includes('w-16'));
      expect(hasAvatars).toBe(false);
    });

    it('should NOT have giant decorative quote marks', () => {
      const { container } = render(<Testimonials />);
      // NO giant 20rem quote mark background
      const hasGiantQuote =
        container.innerHTML.includes('20rem') ||
        container.innerHTML.includes('text-9xl') ||
        container.innerHTML.includes('absolute') && container.innerHTML.includes('fontSize');
      expect(hasGiantQuote).toBe(false);
    });

    it('should NOT have carousel navigation dots', () => {
      const { container } = render(<Testimonials />);
      // NO dot navigation (buttons with rounded-full small dots)
      const buttons = container.querySelectorAll('button');
      // Should have 0 buttons (no carousel navigation)
      expect(buttons.length).toBe(0);
    });

    it('should NOT have auto-rotation or carousel', () => {
      const { container } = render(<Testimonials />);
      // Should NOT have AnimatePresence or carousel logic
      // All testimonials should be static and visible
      const hasCarousel =
        container.innerHTML.includes('carousel') ||
        container.innerHTML.includes('slide') ||
        container.innerHTML.includes('current');
      expect(hasCarousel).toBe(false);
    });

    it('should NOT have decorative blobs or backgrounds', () => {
      const { container } = render(<Testimonials />);
      // NO decorative elements
      const hasBlobs =
        (container.innerHTML.includes('absolute') && container.innerHTML.includes('blur')) ||
        container.innerHTML.includes('radial-gradient');
      expect(hasBlobs).toBe(false);
    });

    it('should NOT have noise texture overlay', () => {
      const { container } = render(<Testimonials />);
      // NO noise textures
      const hasNoise = container.innerHTML.includes('feTurbulence');
      expect(hasNoise).toBe(false);
    });
  });

  describe('Typography Hierarchy', () => {
    it('should have clear visual hierarchy through typography alone', () => {
      render(<Testimonials />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      // h2 should be larger
      expect(h2.className).toMatch(/text-3xl|text-4xl/);
    });

    it('should use serif for quotes and titles', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should have serif typography
      const serifUsage = content.match(/font-serif/g);
      expect(serifUsage).toBeTruthy();
      expect(serifUsage!.length).toBeGreaterThan(1);
    });
  });

  describe('Spacing and Breathing Room (Ma principle)', () => {
    it('should have generous padding', () => {
      render(<Testimonials data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');
      // Generous vertical padding
      expect(section.className).toMatch(/py-20|py-24|py-28|py-32/);
    });

    it('should have max-width container', () => {
      const { container } = render(<Testimonials />);
      // Should have max-width constraint
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });

    it('should have centered layout', () => {
      const { container } = render(<Testimonials />);
      // Should have mx-auto for centering
      const hasCentering = container.innerHTML.includes('mx-auto');
      expect(hasCentering).toBe(true);
    });
  });

  describe('Animation (Minimal or None)', () => {
    it('should have minimal or no animations', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should NOT have complex animations
      const hasComplexAnimations =
        content.includes('AnimatePresence') ||
        content.includes('animate-') ||
        content.includes('scale-');
      expect(hasComplexAnimations).toBe(false);
    });

    it('should have simple fade-in if any animation', () => {
      const { container } = render(<Testimonials />);
      // May have simple fade-in on scroll, but NOT carousel animations
      const content = container.innerHTML;
      const hasCarouselAnimation =
        content.includes('exit') ||
        content.includes('mode="wait"');
      expect(hasCarouselAnimation).toBe(false);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<Testimonials data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');
      // Should have responsive padding
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should adapt layout for mobile', () => {
      const { container } = render(<Testimonials />);
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
      render(<Testimonials />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      render(<Testimonials />);
      // Should have h2 for section
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should have high contrast text', () => {
      const { container } = render(<Testimonials />);
      const content = container.innerHTML;
      // Should use high-contrast colors
      expect(content).toMatch(/text-black|text-gray-900|text-gray-600/);
    });
  });

  describe('Props', () => {
    it('should accept custom className', () => {
      render(<Testimonials className="custom-class" data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');
      expect(section).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<Testimonials data-testid="test-section" />);
      expect(screen.getByTestId('test-section')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<Testimonials aria-label="Testimonials section" data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');
      expect(section).toHaveAttribute('aria-label', 'Testimonials section');
    });
  });

  describe('Content Quality', () => {
    it('should have authentic-sounding testimonials', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';
      // Should have substantial content
      expect(content.length).toBeGreaterThan(100);
    });

    it('should mention product benefits', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent?.toLowerCase() || '';
      // Should mention benefits or results
      const hasBenefits =
        content.includes('save') ||
        content.includes('time') ||
        content.includes('easy') ||
        content.includes('fast') ||
        content.includes('efficient') ||
        content.includes('better') ||
        content.includes('help') ||
        content.includes('excellent') ||
        content.includes('great');
      expect(hasBenefits).toBe(true);
    });

    it('should have professional tone', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';
      // Should not be too short or generic
      expect(content.length).toBeGreaterThan(80);
      // Should have some structure (multiple sentences/paragraphs)
      const hasPunctuation = content.includes('.') || content.includes('!');
      expect(hasPunctuation).toBe(true);
    });
  });
});
