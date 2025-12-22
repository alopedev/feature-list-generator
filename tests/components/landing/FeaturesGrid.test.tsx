import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturesGrid from '@/components/landing/FeaturesGrid';

describe('FeaturesGrid Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<FeaturesGrid />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<FeaturesGrid />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<FeaturesGrid />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });
  });

  describe('Features Content', () => {
    it('should render all six features', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have at least 6 feature cards
      const featureCards = container.querySelectorAll('[class*="feature"], [class*="card"]');
      // More flexible: just check there's substantial content for 6 features
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings.length).toBeGreaterThanOrEqual(6);
    });

    it('should mention PDF/DOCX support', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/pdf|docx|document/);
    });

    it('should mention Claude AI', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/ai|claude|intelligent|smart/);
    });

    it('should mention manual editing', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/edit|refine|manual|customize/);
    });

    it('should mention export formats', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/export|excel|csv|markdown/);
    });

    it('should mention security', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/secure|privacy|safe|local/);
    });

    it('should mention speed/performance', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/fast|quick|instant|second/);
    });
  });

  describe('Grid Layout', () => {
    it('should have grid layout', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have grid classes somewhere
      const hasGrid = container.innerHTML.includes('grid');
      expect(hasGrid).toBe(true);
    });

    it('should have responsive grid classes', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have responsive breakpoint classes (sm:, md:, lg:)
      const hasResponsiveGrid =
        container.innerHTML.includes('sm:grid') ||
        container.innerHTML.includes('md:grid') ||
        container.innerHTML.includes('lg:grid') ||
        container.innerHTML.includes('grid-cols');
      expect(hasResponsiveGrid).toBe(true);
    });

    it('should have consistent gap between items', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have gap utilities
      const hasGap = container.innerHTML.includes('gap-');
      expect(hasGap).toBe(true);
    });
  });

  describe('Feature Cards', () => {
    it('should have feature card styling', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have rounded corners on cards
      const hasRounded = container.innerHTML.includes('rounded');
      expect(hasRounded).toBe(true);
    });

    it('should have visual icons or graphics', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have SVG icons or icon containers
      const hasSvg = container.querySelectorAll('svg').length > 0;
      const hasIconClasses = container.innerHTML.includes('icon');
      expect(hasSvg || hasIconClasses).toBe(true);
    });

    it('should have shadows or borders on cards', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have shadow or border classes
      const hasShadows = container.innerHTML.includes('shadow');
      const hasBorders = container.innerHTML.includes('border');
      expect(hasShadows || hasBorders).toBe(true);
    });

    it('should have hover effects', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have hover state classes
      const hasHover = container.innerHTML.includes('hover:');
      expect(hasHover).toBe(true);
    });
  });

  describe('Typography', () => {
    it('should have section title', () => {
      render(<FeaturesGrid />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should have feature headings', () => {
      render(<FeaturesGrid />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      expect(h3.length).toBeGreaterThanOrEqual(6);
    });

    it('should have descriptive text for features', () => {
      const { container } = render(<FeaturesGrid />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(6);
    });

    it('should have clear visual hierarchy', () => {
      render(<FeaturesGrid />);

      // h2 should be larger than h3
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];

      expect(h2.className).toMatch(/text-3xl|text-4xl|text-5xl/);
      expect(h3.className).toMatch(/text-lg|text-xl|text-2xl/);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<FeaturesGrid data-testid="features" />);
      const section = screen.getByTestId('features');

      // Should have responsive padding
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should stack on mobile', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have single column on mobile (grid-cols-1 or similar)
      const hasMobileStack =
        container.innerHTML.includes('grid-cols-1') ||
        container.innerHTML.includes('flex-col');
      expect(hasMobileStack).toBe(true);
    });

    it('should have 2 columns on tablet', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have 2 columns at md breakpoint
      const hasTabletLayout =
        container.innerHTML.includes('md:grid-cols-2') ||
        container.innerHTML.includes('sm:grid-cols-2');
      expect(hasTabletLayout).toBe(true);
    });

    it('should have 3 columns on desktop', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have 3 columns at lg breakpoint
      const hasDesktopLayout = container.innerHTML.includes('lg:grid-cols-3');
      expect(hasDesktopLayout).toBe(true);
    });

    it('should have max-width container', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have max-width constraint
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });
  });

  describe('Visual Styling', () => {
    it('should have background styling', () => {
      render(<FeaturesGrid data-testid="features" />);
      const section = screen.getByTestId('features');

      // Should have background color or gradient
      expect(section.className).toMatch(/bg-/);
    });

    it('should have consistent color scheme', () => {
      const { container } = render(<FeaturesGrid />);

      // Should use design system colors
      const hasDesignColors =
        container.innerHTML.includes('gold') ||
        container.innerHTML.includes('blue') ||
        container.innerHTML.includes('gray');
      expect(hasDesignColors).toBe(true);
    });

    it('should have visual polish', () => {
      const { container } = render(<FeaturesGrid />);

      // Should have rounded corners and shadows for polish
      const hasPolish =
        (container.innerHTML.includes('rounded') && container.innerHTML.includes('shadow')) ||
        container.innerHTML.includes('backdrop-blur');
      expect(hasPolish).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have semantic HTML structure', () => {
      render(<FeaturesGrid />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      render(<FeaturesGrid />);

      // Should have h2 for section, h3 for features
      const h2 = screen.getAllByRole('heading', { level: 2 });
      const h3 = screen.getAllByRole('heading', { level: 3 });

      expect(h2.length).toBeGreaterThanOrEqual(1);
      expect(h3.length).toBeGreaterThanOrEqual(6);
    });

    it('should have accessible icon descriptions', () => {
      const { container } = render(<FeaturesGrid />);
      const svgs = container.querySelectorAll('svg');

      // SVGs should have aria-hidden or aria-label
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
      render(<FeaturesGrid className="custom-class" data-testid="features" />);
      const section = screen.getByTestId('features');
      expect(section).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<FeaturesGrid data-testid="test-section" />);
      expect(screen.getByTestId('test-section')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<FeaturesGrid aria-label="Features section" data-testid="features" />);
      const section = screen.getByTestId('features');
      expect(section).toHaveAttribute('aria-label', 'Features section');
    });
  });

  describe('Content Quality', () => {
    it('should have compelling feature descriptions', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent || '';

      // Should have substantial content (at least 300 chars total)
      expect(content.length).toBeGreaterThan(300);
    });

    it('should emphasize value propositions', () => {
      const { container } = render(<FeaturesGrid />);
      const content = container.textContent?.toLowerCase() || '';

      // Should mention benefits
      const hasBenefits =
        content.includes('save') ||
        content.includes('automat') ||
        content.includes('easy') ||
        content.includes('fast') ||
        content.includes('simple');
      expect(hasBenefits).toBe(true);
    });
  });
});
