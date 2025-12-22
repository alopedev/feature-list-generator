import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UseCaseSection from '@/components/landing/UseCaseSection';

describe('UseCaseSection Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<UseCaseSection />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<UseCaseSection />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<UseCaseSection />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });
  });

  describe('Use Cases Content', () => {
    it('should render all three use cases', () => {
      render(<UseCaseSection />);

      // Check for the three main use cases by their headings or content
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings.length).toBeGreaterThanOrEqual(3);
    });

    it('should render "Upload & Extract" use case', () => {
      render(<UseCaseSection />);
      expect(screen.getByText(/upload.*extract/i)).toBeInTheDocument();
    });

    it('should render "Review & Refine" use case', () => {
      render(<UseCaseSection />);
      expect(screen.getByText(/review.*refine/i)).toBeInTheDocument();
    });

    it('should render "Export Anywhere" use case', () => {
      render(<UseCaseSection />);
      expect(screen.getByText(/export/i)).toBeInTheDocument();
    });

    it('should include descriptive text for each use case', () => {
      render(<UseCaseSection />);
      const section = screen.getByRole('region');

      // Should have substantial content (at least 200 chars)
      expect(section.textContent!.length).toBeGreaterThan(200);
    });
  });

  describe('Layout Structure', () => {
    it('should have alternating layout structure', () => {
      const { container } = render(<UseCaseSection />);

      // Should have multiple content blocks with different layouts
      const section = container.querySelector('section');
      expect(section?.children.length).toBeGreaterThan(2);
    });

    it('should include visual media placeholders', () => {
      const { container } = render(<UseCaseSection />);

      // Should have image or video placeholders
      const hasMediaElements =
        container.querySelectorAll('img').length > 0 ||
        container.querySelectorAll('video').length > 0 ||
        container.innerHTML.includes('placeholder') ||
        container.innerHTML.includes('aspect-');

      expect(hasMediaElements).toBe(true);
    });

    it('should have grid or flex layout', () => {
      render(<UseCaseSection data-testid="use-cases" />);
      const section = screen.getByTestId('use-cases');

      // Should have layout classes
      expect(section.className).toMatch(/flex|grid/);
    });
  });

  describe('Typography', () => {
    it('should have section title', () => {
      render(<UseCaseSection />);
      const headings = screen.getAllByRole('heading', { level: 2 });
      expect(headings.length).toBeGreaterThanOrEqual(1);
    });

    it('should have headings for each use case', () => {
      render(<UseCaseSection />);
      const h3Headings = screen.getAllByRole('heading', { level: 3 });
      expect(h3Headings.length).toBeGreaterThanOrEqual(3);
    });

    it('should have descriptive paragraphs', () => {
      const { container } = render(<UseCaseSection />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<UseCaseSection data-testid="use-cases" />);
      const section = screen.getByTestId('use-cases');

      // Should have responsive padding classes
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should have responsive layout classes', () => {
      const { container } = render(<UseCaseSection />);

      // Should have responsive layout utilities (sm:, md:, lg:)
      const hasResponsive = container.innerHTML.includes('sm:') ||
                           container.innerHTML.includes('md:') ||
                           container.innerHTML.includes('lg:');
      expect(hasResponsive).toBe(true);
    });

    it('should have max-width container', () => {
      const { container } = render(<UseCaseSection />);

      // Should have max-width for content
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });
  });

  describe('Visual Styling', () => {
    it('should have background styling', () => {
      render(<UseCaseSection data-testid="use-cases" />);
      const section = screen.getByTestId('use-cases');

      // Should have background color or gradient
      expect(section.className).toMatch(/bg-/);
    });

    it('should have consistent spacing', () => {
      const { container } = render(<UseCaseSection />);

      // Should have gap or space utilities
      const hasSpacing = container.innerHTML.includes('gap-') ||
                        container.innerHTML.includes('space-');
      expect(hasSpacing).toBe(true);
    });

    it('should have rounded corners or borders', () => {
      const { container } = render(<UseCaseSection />);

      // Should have border radius utilities
      const hasRoundedCorners = container.innerHTML.includes('rounded');
      expect(hasRoundedCorners).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have semantic HTML structure', () => {
      render(<UseCaseSection />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible headings hierarchy', () => {
      render(<UseCaseSection />);

      // Should have h2 for section and h3 for use cases
      const h2 = screen.getAllByRole('heading', { level: 2 });
      const h3 = screen.getAllByRole('heading', { level: 3 });

      expect(h2.length).toBeGreaterThanOrEqual(1);
      expect(h3.length).toBeGreaterThanOrEqual(3);
    });

    it('should have alt text for images if present', () => {
      const { container } = render(<UseCaseSection />);
      const images = container.querySelectorAll('img');

      images.forEach((img) => {
        // Images should either have alt text or be decorative (alt="")
        expect(img.hasAttribute('alt')).toBe(true);
      });
    });
  });

  describe('Props', () => {
    it('should accept custom className', () => {
      render(<UseCaseSection className="custom-class" data-testid="use-cases" />);
      const section = screen.getByTestId('use-cases');
      expect(section).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<UseCaseSection data-testid="test-section" />);
      expect(screen.getByTestId('test-section')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<UseCaseSection aria-label="Use cases section" data-testid="use-cases" />);
      const section = screen.getByTestId('use-cases');
      expect(section).toHaveAttribute('aria-label', 'Use cases section');
    });
  });

  describe('Content Quality', () => {
    it('should have problem-solution narrative structure', () => {
      const { container } = render(<UseCaseSection />);
      const content = container.textContent?.toLowerCase() || '';

      // Should mention common pain points or benefits
      const hasNarrative =
        content.includes('pdf') ||
        content.includes('docx') ||
        content.includes('extract') ||
        content.includes('feature') ||
        content.includes('ai');

      expect(hasNarrative).toBe(true);
    });

    it('should emphasize key benefits', () => {
      const { container } = render(<UseCaseSection />);
      const content = container.textContent?.toLowerCase() || '';

      // Should mention speed, accuracy, or ease of use
      const hasBenefits =
        content.includes('fast') ||
        content.includes('quick') ||
        content.includes('accurate') ||
        content.includes('easy') ||
        content.includes('simple') ||
        content.includes('automat');

      expect(hasBenefits).toBe(true);
    });
  });

  describe('Visual Hierarchy', () => {
    it('should have clear visual hierarchy', () => {
      render(<UseCaseSection />);

      // h2 should be larger than h3
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];

      expect(h2.className).toMatch(/text-3xl|text-4xl|text-5xl/);
      expect(h3.className).toMatch(/text-xl|text-2xl|text-3xl/);
    });

    it('should have generous spacing between use cases', () => {
      const { container } = render(<UseCaseSection />);

      // Should have spacing utilities for vertical rhythm
      const hasVerticalSpacing = container.innerHTML.includes('space-y-') ||
                                 container.innerHTML.includes('gap-y-');
      expect(hasVerticalSpacing).toBe(true);
    });
  });
});
