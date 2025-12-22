import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HowItWorks from '@/components/landing/HowItWorks';

describe('HowItWorks Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<HowItWorks />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<HowItWorks />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<HowItWorks />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });
  });

  describe('Section Header', () => {
    it('should have main section title (h2)', () => {
      render(<HowItWorks />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should have descriptive subtitle', () => {
      const { container } = render(<HowItWorks />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(1);
    });

    it('should mention process or workflow', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/how|works|process|steps|workflow|simple|easy/);
    });
  });

  describe('Steps Content', () => {
    it('should render 4 steps', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      expect(h3.length).toBeGreaterThanOrEqual(4);
    });

    it('should have step numbers visible', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent || '';

      // Should contain numbers 1-4 in some form
      expect(content).toMatch(/1|one|first/i);
      expect(content).toMatch(/2|two|second/i);
      expect(content).toMatch(/3|three|third/i);
      expect(content).toMatch(/4|four|fourth/i);
    });

    it('should mention upload step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/upload|drop|file|document|pdf/);
    });

    it('should mention AI extraction step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/extract|ai|claude|analyze|process/);
    });

    it('should mention review/edit step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/review|edit|refine|customize|modify/);
    });

    it('should mention export step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/export|download|save|excel|csv/);
    });
  });

  describe('Step Typography', () => {
    it('should have step headings (h3)', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      expect(h3.length).toBeGreaterThanOrEqual(4);
    });

    it('should have descriptive text for each step', () => {
      const { container } = render(<HowItWorks />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(4);
    });

    it('should have clear visual hierarchy', () => {
      render(<HowItWorks />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];

      // h2 should be larger than h3
      expect(h2.className).toMatch(/text-3xl|text-4xl|text-5xl/);
      expect(h3.className).toMatch(/text-lg|text-xl|text-2xl/);
    });
  });

  describe('Visual Design', () => {
    it('should have step numbers styled distinctively', () => {
      const { container } = render(<HowItWorks />);

      // Should have large styled numbers or number containers
      const hasLargeText = container.innerHTML.includes('text-5xl') ||
                          container.innerHTML.includes('text-6xl') ||
                          container.innerHTML.includes('text-7xl');
      const hasNumberStyling = container.innerHTML.includes('font-bold') ||
                              container.innerHTML.includes('font-extrabold');

      expect(hasLargeText || hasNumberStyling).toBe(true);
    });

    it('should have visual indicators or icons', () => {
      const { container } = render(<HowItWorks />);

      // Should have SVG icons or decorative elements
      const hasSvg = container.querySelectorAll('svg').length > 0;
      const hasIcons = container.innerHTML.includes('icon');

      expect(hasSvg || hasIcons).toBe(true);
    });

    it('should have consistent color scheme', () => {
      const { container } = render(<HowItWorks />);

      // Should use design system colors
      const hasDesignColors =
        container.innerHTML.includes('gold') ||
        container.innerHTML.includes('blue') ||
        container.innerHTML.includes('orange') ||
        container.innerHTML.includes('gray');

      expect(hasDesignColors).toBe(true);
    });

    it('should have background styling', () => {
      render(<HowItWorks data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');

      // Should have background color or gradient
      expect(section.className).toMatch(/bg-/);
    });
  });

  describe('Layout & Flow', () => {
    it('should have vertical or horizontal flow', () => {
      const { container } = render(<HowItWorks />);

      // Should have flex or grid layout
      const hasLayout =
        container.innerHTML.includes('flex') ||
        container.innerHTML.includes('grid');

      expect(hasLayout).toBe(true);
    });

    it('should have consistent spacing between steps', () => {
      const { container } = render(<HowItWorks />);

      // Should have gap or margin utilities
      const hasSpacing =
        container.innerHTML.includes('gap-') ||
        container.innerHTML.includes('space-y-') ||
        container.innerHTML.includes('space-x-');

      expect(hasSpacing).toBe(true);
    });

    it('should have visual connectors or progression indicators', () => {
      const { container } = render(<HowItWorks />);

      // Should have arrows, lines, or other flow indicators
      const hasConnectors =
        container.innerHTML.includes('arrow') ||
        container.innerHTML.includes('border') ||
        container.innerHTML.includes('svg') ||
        container.innerHTML.includes('::after') ||
        container.innerHTML.includes('::before');

      expect(hasConnectors).toBe(true);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<HowItWorks data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');

      // Should have responsive padding
      expect(section.className).toMatch(/p-|px-|py-/);
    });

    it('should have max-width container', () => {
      const { container } = render(<HowItWorks />);

      // Should have max-width constraint
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });

    it('should adapt layout for mobile', () => {
      const { container } = render(<HowItWorks />);

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
      render(<HowItWorks />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      render(<HowItWorks />);

      // Should have h2 for section, h3 for steps
      const h2 = screen.getAllByRole('heading', { level: 2 });
      const h3 = screen.getAllByRole('heading', { level: 3 });

      expect(h2.length).toBeGreaterThanOrEqual(1);
      expect(h3.length).toBeGreaterThanOrEqual(4);
    });

    it('should have accessible decorative elements', () => {
      const { container } = render(<HowItWorks />);
      const svgs = container.querySelectorAll('svg');

      // Decorative SVGs should have aria-hidden
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
      render(<HowItWorks className="custom-class" data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');
      expect(section).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<HowItWorks data-testid="test-section" />);
      expect(screen.getByTestId('test-section')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<HowItWorks aria-label="How it works section" data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');
      expect(section).toHaveAttribute('aria-label', 'How it works section');
    });
  });

  describe('Content Quality', () => {
    it('should have compelling step descriptions', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent || '';

      // Should have substantial content (at least 250 chars total)
      expect(content.length).toBeGreaterThan(250);
    });

    it('should emphasize simplicity and ease', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';

      // Should mention ease of use
      const hasSimplicity =
        content.includes('simple') ||
        content.includes('easy') ||
        content.includes('quick') ||
        content.includes('fast') ||
        content.includes('seconds');

      expect(hasSimplicity).toBe(true);
    });

    it('should have clear sequential progression', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent || '';

      // Numbers should appear in order
      const firstIdx = content.indexOf('1');
      const secondIdx = content.indexOf('2');
      const thirdIdx = content.indexOf('3');
      const fourthIdx = content.indexOf('4');

      expect(firstIdx).toBeLessThan(secondIdx);
      expect(secondIdx).toBeLessThan(thirdIdx);
      expect(thirdIdx).toBeLessThan(fourthIdx);
    });
  });

  describe('Visual Polish', () => {
    it('should have rounded corners', () => {
      const { container } = render(<HowItWorks />);
      const hasRounded = container.innerHTML.includes('rounded');
      expect(hasRounded).toBe(true);
    });

    it('should have shadows or depth effects', () => {
      const { container } = render(<HowItWorks />);
      const hasShadows = container.innerHTML.includes('shadow');
      expect(hasShadows).toBe(true);
    });

    it('should have visual polish', () => {
      const { container } = render(<HowItWorks />);

      // Should have rounded corners AND shadows for polish
      const hasPolish =
        (container.innerHTML.includes('rounded') && container.innerHTML.includes('shadow')) ||
        container.innerHTML.includes('backdrop-blur') ||
        container.innerHTML.includes('gradient');

      expect(hasPolish).toBe(true);
    });
  });
});
