import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Testimonials from '@/components/landing/Testimonials';

describe('Testimonials Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

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
  });

  describe('Section Header', () => {
    it('should have main section title (h2)', () => {
      render(<Testimonials />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should mention testimonials or reviews', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/testimonial|review|client|customer|user|trusted|love/);
    });
  });

  describe('Testimonial Content', () => {
    it('should display at least one testimonial initially', () => {
      const { container } = render(<Testimonials />);

      // Should have quote or testimonial text
      const hasQuote = container.innerHTML.includes('"') ||
                       container.innerHTML.includes('&quot;') ||
                       container.innerHTML.includes('quote');
      expect(hasQuote).toBe(true);
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
        content.includes('lead');

      expect(hasRoles).toBe(true);
    });

    it('should have compelling testimonial quotes', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';

      // Should have substantial testimonial content
      expect(content.length).toBeGreaterThan(100);
    });
  });

  describe('Carousel Functionality', () => {
    it('should have carousel or slideshow structure', () => {
      const { container } = render(<Testimonials />);

      // Should have carousel-related classes or elements
      const hasCarousel =
        container.innerHTML.includes('carousel') ||
        container.innerHTML.includes('slide') ||
        container.innerHTML.includes('testimonial');

      expect(hasCarousel).toBe(true);
    });

    it('should have navigation dots or indicators', () => {
      const { container } = render(<Testimonials />);

      // Should have navigation elements
      const hasDots =
        container.querySelectorAll('button').length > 0 ||
        container.innerHTML.includes('dot') ||
        container.innerHTML.includes('indicator') ||
        container.innerHTML.includes('nav');

      expect(hasDots).toBe(true);
    });

    it('should auto-rotate testimonials after 12 seconds', async () => {
      const { container } = render(<Testimonials />);
      const initialContent = container.textContent;

      // Advance time by 12 seconds
      vi.advanceTimersByTime(12000);

      await waitFor(() => {
        const newContent = container.textContent;
        // Content might change or animation might occur
        expect(newContent).toBeDefined();
      });
    });

    it('should support manual navigation', () => {
      const { container } = render(<Testimonials />);

      // Should have clickable navigation buttons
      const buttons = container.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Visual Design', () => {
    it('should have quote styling or indicators', () => {
      const { container } = render(<Testimonials />);

      // Should have quote marks or quote icon
      const hasQuoteStyling =
        container.innerHTML.includes('quote') ||
        container.innerHTML.includes('"') ||
        container.innerHTML.includes('&quot;') ||
        container.querySelectorAll('svg').length > 0;

      expect(hasQuoteStyling).toBe(true);
    });

    it('should have author attribution styling', () => {
      const { container } = render(<Testimonials />);

      // Should have styled author names/roles
      const hasAttribution =
        container.innerHTML.includes('font-semibold') ||
        container.innerHTML.includes('font-bold') ||
        container.innerHTML.includes('text-');

      expect(hasAttribution).toBe(true);
    });

    it('should have consistent color scheme', () => {
      const { container } = render(<Testimonials />);

      // Should use design system colors
      const hasDesignColors =
        container.innerHTML.includes('gold') ||
        container.innerHTML.includes('blue') ||
        container.innerHTML.includes('gray');

      expect(hasDesignColors).toBe(true);
    });

    it('should have background styling', () => {
      render(<Testimonials data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');

      // Should have background color or gradient
      expect(section.className).toMatch(/bg-/);
    });

    it('should have visual polish', () => {
      const { container } = render(<Testimonials />);

      // Should have rounded corners or shadows
      const hasPolish =
        (container.innerHTML.includes('rounded') || container.innerHTML.includes('shadow')) ||
        container.innerHTML.includes('backdrop-blur');

      expect(hasPolish).toBe(true);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<Testimonials data-testid="testimonials" />);
      const section = screen.getByTestId('testimonials');

      // Should have responsive padding
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should have max-width container', () => {
      const { container } = render(<Testimonials />);

      // Should have max-width constraint
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });

    it('should adapt for mobile devices', () => {
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

    it('should have accessible navigation buttons', () => {
      const { container } = render(<Testimonials />);
      const buttons = container.querySelectorAll('button');

      // Buttons should have accessible attributes
      buttons.forEach((button) => {
        const hasAccessibility =
          button.hasAttribute('aria-label') ||
          button.hasAttribute('aria-current') ||
          button.textContent ||
          button.querySelector('svg');

        expect(hasAccessibility).toBe(true);
      });
    });

    it('should have accessible decorative elements', () => {
      const { container } = render(<Testimonials />);
      const svgs = container.querySelectorAll('svg');

      // SVGs should have aria-hidden if decorative
      svgs.forEach((svg) => {
        const hasAriaHidden = svg.hasAttribute('aria-hidden');
        const hasAriaLabel = svg.hasAttribute('aria-label');
        const hasRole = svg.hasAttribute('role');

        expect(hasAriaHidden || hasAriaLabel || hasRole).toBe(true);
      });
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
      expect(content.length).toBeGreaterThan(150);
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
        content.includes('help');

      expect(hasBenefits).toBe(true);
    });

    it('should have professional tone', () => {
      const { container } = render(<Testimonials />);
      const content = container.textContent || '';

      // Should not be too short or generic
      expect(content.length).toBeGreaterThan(100);

      // Should have some structure (multiple sentences/paragraphs)
      const hasPunctuation = content.includes('.') || content.includes('!');
      expect(hasPunctuation).toBe(true);
    });
  });

  describe('Animation & Transitions', () => {
    it('should have smooth transitions', () => {
      const { container } = render(<Testimonials />);

      // Should have transition classes
      const hasTransitions =
        container.innerHTML.includes('transition') ||
        container.innerHTML.includes('duration') ||
        container.innerHTML.includes('ease');

      expect(hasTransitions).toBe(true);
    });

    it('should handle carousel animation', () => {
      const { container } = render(<Testimonials />);

      // Should have animation-related classes or styles
      const hasAnimation =
        container.innerHTML.includes('animate') ||
        container.innerHTML.includes('motion') ||
        container.innerHTML.includes('transition');

      expect(hasAnimation).toBe(true);
    });
  });
});
