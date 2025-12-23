import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HowItWorks from '@/components/landing/HowItWorks';

describe('HowItWorks Component - Japanese Minimalism', () => {
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

    it('should have pure white or rice-paper background', () => {
      render(<HowItWorks data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');
      // Japanese minimalism: white, NO gradients
      expect(section.className).toMatch(/bg-white|bg-rice-paper/);
    });

    it('should NOT have gradient backgrounds', () => {
      const { container } = render(<HowItWorks />);
      // Should NOT have inline gradients
      const hasGradients =
        container.innerHTML.includes('linear-gradient') ||
        container.innerHTML.includes('radial-gradient');
      expect(hasGradients).toBe(false);
    });
  });

  describe('Section Header', () => {
    it('should have main section title (h2)', () => {
      render(<HowItWorks />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should use serif font for title', () => {
      render(<HowItWorks />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      expect(h2.className).toMatch(/font-serif/);
    });

    it('should have text-3xl size for title', () => {
      render(<HowItWorks />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      expect(h2.className).toMatch(/text-3xl|text-4xl/);
    });

    it('should mention process or workflow', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/process|steps|workflow|works/);
    });
  });

  describe('Horizontal Layout (Desktop)', () => {
    it('should have horizontal grid layout', () => {
      const { container } = render(<HowItWorks />);
      // Should have 4-column grid on desktop
      const hasHorizontalGrid =
        container.innerHTML.includes('grid-cols-4') ||
        container.innerHTML.includes('lg:grid-cols-4') ||
        container.innerHTML.includes('md:grid-cols-4');
      expect(hasHorizontalGrid).toBe(true);
    });

    it('should have 4-column layout on desktop', () => {
      const { container } = render(<HowItWorks />);
      // Should explicitly show 4 columns
      const has4Columns =
        container.innerHTML.includes('grid-cols-4') ||
        container.innerHTML.includes('lg:grid-cols-4');
      expect(has4Columns).toBe(true);
    });

    it('should stack vertically on mobile', () => {
      const { container } = render(<HowItWorks />);
      // Should have single column on mobile
      const hasMobileStack =
        container.innerHTML.includes('grid-cols-1') ||
        container.innerHTML.includes('flex-col');
      expect(hasMobileStack).toBe(true);
    });

    it('should have equal spacing between steps', () => {
      const { container } = render(<HowItWorks />);
      // Should have gap utilities
      const hasGap =
        container.innerHTML.includes('gap-') ||
        container.innerHTML.includes('space-x-');
      expect(hasGap).toBe(true);
    });
  });

  describe('Steps Content', () => {
    it('should render 4 steps', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      expect(h3.length).toBeGreaterThanOrEqual(4);
    });

    it('should have step numbers visible (01-04)', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent || '';
      // Should contain "01", "02", "03", "04"
      const hasNumbers = /0[1-4]/.test(content);
      expect(hasNumbers).toBe(true);
    });

    it('should mention upload step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/upload|drop|file|document/);
    });

    it('should mention AI extraction step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/extract|ai|analyze|process/);
    });

    it('should mention review/edit step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/review|refine|customize/);
    });

    it('should mention export step', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/export|download|format/);
    });
  });

  describe('Step Numbers (Vermillion Accent)', () => {
    it('should have small numbers (text-sm), NOT large', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      // Japanese minimalism: SMALL numbers, not 5xl/6xl/7xl
      const hasSmallNumbers = content.includes('text-sm') || content.includes('text-xs');
      expect(hasSmallNumbers).toBe(true);
    });

    it('should NOT have huge numbers (5xl/6xl/7xl)', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      // Should NOT have dramatic large numbers
      const hasHugeNumbers =
        content.includes('text-5xl') ||
        content.includes('text-6xl') ||
        content.includes('text-7xl') ||
        content.includes('text-8xl');
      expect(hasHugeNumbers).toBe(false);
    });

    it('should use vermillion color for numbers', () => {
      const { container } = render(<HowItWorks />);
      // Vermillion accent for step numbers
      const hasVermillion =
        container.innerHTML.includes('text-vermillion') ||
        container.innerHTML.includes('#dd4124');
      expect(hasVermillion).toBe(true);
    });
  });

  describe('Step Titles', () => {
    it('should have step headings (h3)', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      expect(h3.length).toBeGreaterThanOrEqual(4);
    });

    it('should use serif font for titles', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/font-serif/);
    });

    it('should have text-xl size for titles', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/text-xl|text-lg/);
    });

    it('should have bold weight for titles', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/font-bold|font-semibold|font-medium/);
    });

    it('should use black color for titles', () => {
      render(<HowItWorks />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/text-black|text-ink-black|text-gray-900/);
    });
  });

  describe('Step Descriptions', () => {
    it('should have descriptive text for each step', () => {
      const { container } = render(<HowItWorks />);
      const paragraphs = container.querySelectorAll('p');
      // At least 4 description paragraphs (one per step)
      expect(paragraphs.length).toBeGreaterThanOrEqual(4);
    });

    it('should use serif font for descriptions', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      // Typography-focused design
      expect(content).toMatch(/font-serif/);
    });

    it('should have small text size (text-sm)', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      // Descriptions should be compact
      expect(content).toMatch(/text-sm|text-base/);
    });

    it('should use gray-600 for description text', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      expect(content).toMatch(/text-gray-600|text-ash-gray/);
    });
  });

  describe('Arrow Connectors (Simple)', () => {
    it('should have arrow indicators between steps', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent || '';
      // Should have arrow character → or similar
      const hasArrows = content.includes('→') || content.includes('→');
      // If not in text, might be in aria-hidden span
      const hasArrowElement = container.innerHTML.includes('→');
      expect(hasArrows || hasArrowElement).toBe(true);
    });

    it('should NOT have complex SVG arrows', () => {
      const { container } = render(<HowItWorks />);
      const svgs = container.querySelectorAll('svg');
      // Japanese minimalism: simple text arrow, NOT complex SVGs
      // May have 0-1 simple SVG arrows, but NOT 3+ complex ones
      expect(svgs.length).toBeLessThan(3);
    });
  });

  describe('NO Decorative Elements (Kanso)', () => {
    it('should NOT have icon SVGs or graphics', () => {
      const { container } = render(<HowItWorks />);
      const svgs = container.querySelectorAll('svg');
      // Should have minimal SVGs (maybe arrows), not 4+ icon SVGs
      expect(svgs.length).toBeLessThan(4);
    });

    it('should NOT have card containers with shadows', () => {
      const { container } = render(<HowItWorks />);
      // NO dramatic shadows
      const hasDramaticShadows =
        container.innerHTML.includes('shadow-lg') ||
        container.innerHTML.includes('shadow-xl') ||
        container.innerHTML.includes('shadow-2xl');
      expect(hasDramaticShadows).toBe(false);
    });

    it('should NOT have backdrop-blur or glassmorphism', () => {
      const { container } = render(<HowItWorks />);
      const hasGlassmorphism = container.innerHTML.includes('backdrop-blur');
      expect(hasGlassmorphism).toBe(false);
    });

    it('should NOT have rounded card containers', () => {
      const { container } = render(<HowItWorks />);
      // May have minimal rounding, but NO rounded-2xl/3xl cards
      const hasDramaticRounding =
        container.innerHTML.includes('rounded-2xl') ||
        container.innerHTML.includes('rounded-3xl');
      expect(hasDramaticRounding).toBe(false);
    });

    it('should NOT have timeline center line', () => {
      const { container } = render(<HowItWorks />);
      // NO vertical timeline connector
      const hasTimelineLine =
        container.innerHTML.includes('absolute') &&
        (container.innerHTML.includes('left-1/2') || container.innerHTML.includes('border-l'));
      expect(hasTimelineLine).toBe(false);
    });
  });

  describe('Typography Hierarchy', () => {
    it('should have clear visual hierarchy', () => {
      render(<HowItWorks />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];

      // h2 should be larger than h3
      expect(h2.className).toMatch(/text-3xl|text-4xl/);
      expect(h3.className).toMatch(/text-lg|text-xl/);
    });

    it('should use consistent serif typography', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      // All headings should use serif
      const serifUsage = content.match(/font-serif/g);
      expect(serifUsage).toBeTruthy();
      expect(serifUsage!.length).toBeGreaterThan(2);
    });
  });

  describe('Spacing (Ma principle)', () => {
    it('should have generous padding', () => {
      render(<HowItWorks data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');
      expect(section.className).toMatch(/py-20|py-24|py-28|py-32/);
    });

    it('should have max-width container', () => {
      const { container } = render(<HowItWorks />);
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });

    it('should have centered layout', () => {
      const { container } = render(<HowItWorks />);
      const hasCentering = container.innerHTML.includes('mx-auto');
      expect(hasCentering).toBe(true);
    });
  });

  describe('Animation (Minimal)', () => {
    it('should have minimal or no animations', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      // NO complex animations
      const hasComplexAnimations =
        content.includes('animate-bounce') ||
        content.includes('animate-spin') ||
        content.includes('animate-ping');
      expect(hasComplexAnimations).toBe(false);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<HowItWorks data-testid="how-it-works" />);
      const section = screen.getByTestId('how-it-works');
      expect(section.className).toMatch(/py-/);
    });

    it('should adapt layout for mobile', () => {
      const { container } = render(<HowItWorks />);
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
      const h2 = screen.getAllByRole('heading', { level: 2 });
      const h3 = screen.getAllByRole('heading', { level: 3 });

      expect(h2.length).toBeGreaterThanOrEqual(1);
      expect(h3.length).toBeGreaterThanOrEqual(4);
    });

    it('should have high contrast text', () => {
      const { container } = render(<HowItWorks />);
      const content = container.innerHTML;
      expect(content).toMatch(/text-black|text-gray-900|text-gray-600/);
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
      // Should have substantial content
      expect(content.length).toBeGreaterThan(250);
    });

    it('should emphasize simplicity and ease', () => {
      const { container } = render(<HowItWorks />);
      const content = container.textContent?.toLowerCase() || '';
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
      // Numbers should appear in order (01, 02, 03, 04)
      const firstIdx = content.indexOf('01') || content.indexOf('1');
      const secondIdx = content.indexOf('02') || content.indexOf('2');
      expect(firstIdx).toBeGreaterThanOrEqual(0);
      expect(secondIdx).toBeGreaterThan(firstIdx);
    });
  });
});
