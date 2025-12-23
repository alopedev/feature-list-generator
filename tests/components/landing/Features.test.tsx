import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from '@/components/landing/Features';

describe('Features Component - Japanese Minimalism', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<Features />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render as section element', () => {
      const { container } = render(<Features />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have accessible section role', () => {
      render(<Features />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should have pure white or rice-paper background (Ma principle)', () => {
      render(<Features data-testid="features" />);
      const section = screen.getByTestId('features');
      // Japanese minimalism: white or subtle off-white, NO gradients
      expect(section.className).toMatch(/bg-white|bg-rice-paper/);
    });

    it('should NOT have gradient backgrounds', () => {
      const { container } = render(<Features />);
      // Should NOT have inline gradient styles
      const hasGradients = container.innerHTML.includes('linear-gradient') ||
                          container.innerHTML.includes('radial-gradient');
      expect(hasGradients).toBe(false);
    });
  });

  describe('Vertical List Layout (Kanso - NOT Grid)', () => {
    it('should have vertical list layout (NO grid)', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // Should NOT have multi-column grid layout
      const hasMultiColumnGrid =
        content.includes('grid-cols-2') ||
        content.includes('grid-cols-3') ||
        content.includes('md:grid-cols-2') ||
        content.includes('lg:grid-cols-3');
      expect(hasMultiColumnGrid).toBe(false);
    });

    it('should have single-column layout', () => {
      const { container } = render(<Features />);
      // Japanese minimalism: vertical list, single focus
      const hasSingleColumn =
        container.innerHTML.includes('flex-col') ||
        container.innerHTML.includes('space-y') ||
        !container.innerHTML.includes('grid-cols-');
      expect(hasSingleColumn).toBe(true);
    });

    it('should have generous vertical spacing between features (Ma principle)', () => {
      const { container } = render(<Features />);
      // 96px spacing = mb-24 or space-y-24
      const hasGenerousSpacing =
        container.innerHTML.includes('mb-24') ||
        container.innerHTML.includes('space-y-24') ||
        container.innerHTML.includes('gap-24');
      expect(hasGenerousSpacing).toBe(true);
    });
  });

  describe('Section Title', () => {
    it('should have section title "What You Get" or similar', () => {
      render(<Features />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });

    it('should use serif font for section title', () => {
      render(<Features />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      // Noto Serif JP for headings
      expect(h2.className).toMatch(/font-serif/);
    });

    it('should have large text size for section title (text-3xl)', () => {
      render(<Features />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      expect(h2.className).toMatch(/text-3xl|text-4xl/);
    });
  });

  describe('Feature Content', () => {
    it('should render all six features', () => {
      render(<Features />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      // Should have 6 feature titles
      expect(h3.length).toBeGreaterThanOrEqual(6);
    });

    it('should mention PDF/DOCX support', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/pdf|docx|document/);
    });

    it('should mention Claude AI', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/ai|claude|intelligent|extraction/);
    });

    it('should mention manual editing', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/edit|refine|manual|customize|review/);
    });

    it('should mention export formats', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/export|excel|csv|markdown/);
    });

    it('should mention security or privacy', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/secure|privacy|safe|local|confidential/);
    });

    it('should mention speed/performance', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      expect(content).toMatch(/fast|quick|instant|second|efficient/);
    });
  });

  describe('Feature Number Prefix (Vermillion Accent)', () => {
    it('should have numbered prefixes (01-06)', () => {
      const { container } = render(<Features />);
      const content = container.textContent || '';
      // Should have at least some numbers (01, 02, etc.)
      const hasNumbers = /0[1-6]/.test(content);
      expect(hasNumbers).toBe(true);
    });

    it('should use vermillion color for numbers', () => {
      const { container } = render(<Features />);
      // Vermillion accent for numbers
      const hasVermillion =
        container.innerHTML.includes('text-vermillion') ||
        container.innerHTML.includes('#dd4124');
      expect(hasVermillion).toBe(true);
    });

    it('should use small text for numbers (text-sm)', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // Numbers should be small, unobtrusive
      expect(content).toMatch(/text-sm|text-xs/);
    });
  });

  describe('Feature Titles', () => {
    it('should have feature titles as h3', () => {
      render(<Features />);
      const h3 = screen.getAllByRole('heading', { level: 3 });
      expect(h3.length).toBeGreaterThanOrEqual(6);
    });

    it('should use serif font for feature titles', () => {
      render(<Features />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      // Noto Serif JP for all headings
      expect(h3.className).toMatch(/font-serif/);
    });

    it('should have text-2xl size for feature titles', () => {
      render(<Features />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/text-2xl|text-xl/);
    });

    it('should have semibold weight for feature titles', () => {
      render(<Features />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/font-semibold|font-bold|font-medium/);
    });

    it('should use black color for feature titles', () => {
      render(<Features />);
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];
      expect(h3.className).toMatch(/text-black|text-ink-black|text-gray-900/);
    });
  });

  describe('Feature Descriptions', () => {
    it('should have descriptive text for each feature', () => {
      const { container } = render(<Features />);
      const paragraphs = container.querySelectorAll('p');
      // At least 6 description paragraphs
      expect(paragraphs.length).toBeGreaterThanOrEqual(6);
    });

    it('should use serif font for descriptions', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // Typography IS the design - serif everywhere
      expect(content).toMatch(/font-serif/);
    });

    it('should have light font weight for descriptions', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // Weight-300 for elegant lightness
      expect(content).toMatch(/font-light|font-normal/);
    });

    it('should use gray-600 for description text', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // Subtle gray for secondary text
      expect(content).toMatch(/text-gray-600|text-ash-gray/);
    });

    it('should have max-w-prose for readable line length', () => {
      const { container } = render(<Features />);
      // Readable line length constraint
      const hasProseWidth = container.innerHTML.includes('max-w-prose');
      expect(hasProseWidth).toBe(true);
    });
  });

  describe('NO Decorative Elements (Kanso principle)', () => {
    it('should NOT have icon SVGs or graphics', () => {
      const { container } = render(<Features />);
      const svgs = container.querySelectorAll('svg');
      // Japanese minimalism: NO icons, typography IS the visual
      expect(svgs.length).toBe(0);
    });

    it('should NOT have card containers with shadows', () => {
      const { container } = render(<Features />);
      // NO glassmorphism, NO dramatic shadows
      const hasCardShadows =
        container.innerHTML.includes('shadow-lg') ||
        container.innerHTML.includes('shadow-xl') ||
        container.innerHTML.includes('shadow-2xl');
      expect(hasCardShadows).toBe(false);
    });

    it('should NOT have hover effects', () => {
      const { container } = render(<Features />);
      // NO hover transformations or glow effects
      const hasHoverEffects =
        container.innerHTML.includes('hover:scale') ||
        container.innerHTML.includes('hover:shadow') ||
        container.innerHTML.includes('hover:translate');
      expect(hasHoverEffects).toBe(false);
    });

    it('should NOT have backdrop-blur or glassmorphism', () => {
      const { container } = render(<Features />);
      const hasGlassmorphism = container.innerHTML.includes('backdrop-blur');
      expect(hasGlassmorphism).toBe(false);
    });

    it('should NOT have rounded card containers', () => {
      const { container } = render(<Features />);
      // May have minimal rounding on borders, but NO rounded-2xl/3xl cards
      const hasDramaticRounding =
        container.innerHTML.includes('rounded-2xl') ||
        container.innerHTML.includes('rounded-3xl');
      expect(hasDramaticRounding).toBe(false);
    });
  });

  describe('Typography Hierarchy', () => {
    it('should have clear visual hierarchy through typography alone', () => {
      render(<Features />);
      const h2 = screen.getAllByRole('heading', { level: 2 })[0];
      const h3 = screen.getAllByRole('heading', { level: 3 })[0];

      // h2 should be larger than h3
      expect(h2.className).toMatch(/text-3xl|text-4xl/);
      expect(h3.className).toMatch(/text-xl|text-2xl/);
    });

    it('should use consistent serif font family', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // All typography should use serif (Noto Serif JP)
      const serifUsage = content.match(/font-serif/g);
      expect(serifUsage).toBeTruthy();
      expect(serifUsage!.length).toBeGreaterThan(3);
    });
  });

  describe('Spacing and Breathing Room (Ma principle)', () => {
    it('should have generous padding', () => {
      render(<Features data-testid="features" />);
      const section = screen.getByTestId('features');
      // Generous vertical padding
      expect(section.className).toMatch(/py-20|py-24|py-28|py-32/);
    });

    it('should have centered max-width container', () => {
      const { container } = render(<Features />);
      const hasMaxWidth = container.innerHTML.includes('max-w-');
      expect(hasMaxWidth).toBe(true);
    });

    it('should have mx-auto for centering', () => {
      const { container } = render(<Features />);
      const hasCentering = container.innerHTML.includes('mx-auto');
      expect(hasCentering).toBe(true);
    });
  });

  describe('Animation (Seijaku - Minimal)', () => {
    it('should have simple fade-in animation (NO complex effects)', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // May have fade-in, but NO bounce/spin/rotate
      const hasComplexAnimations =
        content.includes('animate-bounce') ||
        content.includes('animate-spin') ||
        content.includes('animate-ping');
      expect(hasComplexAnimations).toBe(false);
    });

    it('should have minimal stagger if any (150ms max)', () => {
      const { container } = render(<Features />);
      // Stagger should be subtle, NOT dramatic
      const content = container.innerHTML;
      // If transitions exist, they should be calm
      if (content.includes('transition')) {
        expect(content).toMatch(/duration-\d+|ease/);
      }
    });
  });

  describe('Accessibility', () => {
    it('should have semantic HTML structure', () => {
      render(<Features />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      render(<Features />);
      const h2 = screen.getAllByRole('heading', { level: 2 });
      const h3 = screen.getAllByRole('heading', { level: 3 });

      expect(h2.length).toBeGreaterThanOrEqual(1);
      expect(h3.length).toBeGreaterThanOrEqual(6);
    });

    it('should have high contrast text (black/gray on white)', () => {
      const { container } = render(<Features />);
      const content = container.innerHTML;
      // Should use high-contrast colors
      expect(content).toMatch(/text-black|text-gray-900|text-gray-600/);
    });
  });

  describe('Props', () => {
    it('should accept custom className', () => {
      render(<Features className="custom-class" data-testid="features" />);
      const section = screen.getByTestId('features');
      expect(section).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<Features data-testid="test-section" />);
      expect(screen.getByTestId('test-section')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<Features aria-label="Features section" data-testid="features" />);
      const section = screen.getByTestId('features');
      expect(section).toHaveAttribute('aria-label', 'Features section');
    });
  });

  describe('Content Quality', () => {
    it('should have compelling feature descriptions', () => {
      const { container } = render(<Features />);
      const content = container.textContent || '';
      // Should have substantial content (at least 300 chars total)
      expect(content.length).toBeGreaterThan(300);
    });

    it('should emphasize value propositions', () => {
      const { container } = render(<Features />);
      const content = container.textContent?.toLowerCase() || '';
      // Should mention benefits
      const hasBenefits =
        content.includes('save') ||
        content.includes('automat') ||
        content.includes('easy') ||
        content.includes('fast') ||
        content.includes('simple') ||
        content.includes('precise') ||
        content.includes('efficient');
      expect(hasBenefits).toBe(true);
    });
  });
});
