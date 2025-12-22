import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from '@/components/landing/CTASection';

describe('CTASection Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<CTASection />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container} = render(<CTASection />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<CTASection />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });
  });

  describe('Content', () => {
    it('should have main heading (h2)', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should have compelling CTA headline', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';

      const hasCallToAction =
        content.includes('ready') ||
        content.includes('start') ||
        content.includes('try') ||
        content.includes('get started') ||
        content.includes('begin') ||
        content.includes('join');

      expect(hasCallToAction).toBe(true);
    });

    it('should have supporting text or subtitle', () => {
      const { container } = render(<CTASection />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(1);
    });

    it('should mention value proposition', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';

      const hasValue =
        content.includes('free') ||
        content.includes('no credit card') ||
        content.includes('instant') ||
        content.includes('save') ||
        content.includes('feature') ||
        content.includes('minutes');

      expect(hasValue).toBe(true);
    });
  });

  describe('CTA Button', () => {
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

    it('should have prominent button styling', () => {
      const { container } = render(<CTASection />);
      const links = container.querySelectorAll('a');

      // Should have button classes
      const hasButtonStyling = Array.from(links).some((link) =>
        link.className.includes('px-') || link.className.includes('py-')
      );

      expect(hasButtonStyling).toBe(true);
    });
  });

  describe('Visual Design', () => {
    it('should have background styling', () => {
      render(<CTASection data-testid="cta" />);
      const section = screen.getByTestId('cta');

      // Should have background color or gradient
      expect(section.className).toMatch(/bg-/);
    });

    it('should have consistent color scheme', () => {
      const { container } = render(<CTASection />);

      // Should use design system colors
      const hasDesignColors =
        container.innerHTML.includes('gold') ||
        container.innerHTML.includes('blue') ||
        container.innerHTML.includes('gray');

      expect(hasDesignColors).toBe(true);
    });

    it('should have visual polish', () => {
      const { container } = render(<CTASection />);

      // Should have rounded corners or shadows
      const hasPolish =
        container.innerHTML.includes('rounded') ||
        container.innerHTML.includes('shadow') ||
        container.innerHTML.includes('backdrop-blur');

      expect(hasPolish).toBe(true);
    });

    it('should have generous whitespace', () => {
      render(<CTASection data-testid="cta" />);
      const section = screen.getByTestId('cta');

      // Should have substantial padding
      expect(section.className).toMatch(/py-/);
    });
  });

  describe('Typography', () => {
    it('should have large prominent heading', () => {
      render(<CTASection />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];

      // Should be large text
      expect(h2.className).toMatch(/text-3xl|text-4xl|text-5xl|text-6xl/);
    });

    it('should have clear visual hierarchy', () => {
      const { container } = render(<CTASection />);

      // Should have different text sizes
      const hasSizeVariety =
        container.innerHTML.includes('text-xl') ||
        container.innerHTML.includes('text-2xl') ||
        container.innerHTML.includes('text-3xl');

      expect(hasSizeVariety).toBe(true);
    });

    it('should have readable text color', () => {
      const { container } = render(<CTASection />);

      // Should have text color classes
      const hasTextColor =
        container.innerHTML.includes('text-gray') ||
        container.innerHTML.includes('text-white') ||
        container.innerHTML.includes('text-black');

      expect(hasTextColor).toBe(true);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<CTASection data-testid="cta" />);
      const section = screen.getByTestId('cta');

      // Should have responsive padding
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should have max-width container', () => {
      const { container } = render(<CTASection />);

      // Should have max-width constraint
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
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
    it('should have compelling copy', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent || '';

      // Should have substantial content
      expect(content.length).toBeGreaterThan(50);
    });

    it('should create urgency or excitement', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';

      // Should have motivating language
      const hasUrgency =
        content.includes('today') ||
        content.includes('now') ||
        content.includes('free') ||
        content.includes('instant') ||
        content.includes('immediately');

      expect(hasUrgency).toBe(true);
    });

    it('should reinforce main value proposition', () => {
      const { container } = render(<CTASection />);
      const content = container.textContent?.toLowerCase() || '';

      // Should mention core benefit
      const hasValue =
        content.includes('save') ||
        content.includes('automat') ||
        content.includes('extract') ||
        content.includes('feature') ||
        content.includes('fast');

      expect(hasValue).toBe(true);
    });
  });

  describe('Animation & Effects', () => {
    it('should have smooth transitions', () => {
      const { container } = render(<CTASection />);

      // Should have transition classes
      const hasTransitions =
        container.innerHTML.includes('transition') ||
        container.innerHTML.includes('duration') ||
        container.innerHTML.includes('ease');

      expect(hasTransitions).toBe(true);
    });

    it('should have hover effects on button', () => {
      const { container } = render(<CTASection />);

      // Should have hover classes
      const hasHover = container.innerHTML.includes('hover:');
      expect(hasHover).toBe(true);
    });
  });
});
