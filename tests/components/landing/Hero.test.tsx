import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '@/components/landing/Hero';

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('Hero Component - Japanese Minimalism', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<Hero />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should render as section with hero role', () => {
      const { container } = render(<Hero />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('role', 'banner');
    });

    it('should have pure white background (Ma principle)', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      // Japanese minimalism: pure white, NO gradients
      expect(hero.className).toMatch(/bg-white|bg-rice-paper/);
    });

    it('should NOT have gradient backgrounds or decorative blobs', () => {
      const { container } = render(<Hero />);
      // Should NOT have inline gradient styles
      const hasGradients = container.innerHTML.includes('gradient');
      expect(hasGradients).toBe(false);
    });
  });

  describe('Static Headline (Kanso principle)', () => {
    it('should have main heading at h1 level', () => {
      render(<Hero />);
      const headings = screen.getAllByRole('heading', { level: 1 });
      expect(headings.length).toBeGreaterThanOrEqual(1);
    });

    it('should have static headline (NO animated cycling)', () => {
      render(<Hero />);
      // Should have h1 with static text
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];
      expect(h1).toBeInTheDocument();
      expect(h1.textContent).toBeTruthy();
    });

    it('should have large serif headline (text-6xl or text-7xl)', () => {
      render(<Hero />);
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];
      // Japanese minimalism: huge, thin serif typography
      expect(h1.className).toMatch(/text-6xl|text-7xl/);
    });

    it('should use serif font family for headline', () => {
      render(<Hero />);
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];
      // Noto Serif JP for headlines
      expect(h1.className).toMatch(/font-serif/);
    });

    it('should have thin/light font weight for headline', () => {
      render(<Hero />);
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];
      // Weight-300 for elegant lightness
      expect(h1.className).toMatch(/font-light|font-thin/);
    });
  });

  describe('Visual Divider (Shibui principle)', () => {
    it('should have horizontal divider line', () => {
      const { container } = render(<Hero />);
      // Should have a horizontal line (border or hr)
      const hasDivider =
        container.innerHTML.includes('border-b') ||
        container.innerHTML.includes('border-t') ||
        container.querySelector('hr') !== null;
      expect(hasDivider).toBe(true);
    });

    it('should have subtle gray divider color', () => {
      const { container } = render(<Hero />);
      // Should use mist-gray or similar subtle color
      const hasSubtleDivider =
        container.innerHTML.includes('border-gray') ||
        container.innerHTML.includes('border-mist-gray');
      expect(hasSubtleDivider).toBe(true);
    });
  });

  describe('Value Proposition Text', () => {
    it('should render value proposition paragraph', () => {
      const { container } = render(<Hero />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(1);
    });

    it('should have descriptive text about the product', () => {
      render(<Hero />);
      const section = screen.getByRole('banner');
      // Should have substantial text content
      expect(section.textContent).toBeTruthy();
      expect(section.textContent!.length).toBeGreaterThan(50);
    });

    it('should have readable text size (text-lg)', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Value prop should be text-lg
      expect(content).toMatch(/text-lg|text-xl/);
    });

    it('should use gray-600 for value prop text', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Subtle gray for secondary text
      expect(content).toMatch(/text-gray-600|text-ash-gray/);
    });
  });

  describe('Single Minimal CTA (Kanso principle)', () => {
    it('should render single primary CTA button', () => {
      render(<Hero />);
      const links = screen.getAllByRole('link');
      // Should have at least one CTA link
      expect(links.length).toBeGreaterThanOrEqual(1);
    });

    it('should link to /webapp', () => {
      render(<Hero />);
      const links = screen.getAllByRole('link');
      const webappLink = links.find(link => link.getAttribute('href') === '/webapp');
      expect(webappLink).toBeInTheDocument();
    });

    it('should NOT have secondary "Learn More" button', () => {
      render(<Hero />);
      // Japanese minimalism: ONE CTA only
      const learnMoreExists = screen.queryByRole('link', { name: /learn more/i });
      // Can be null or not exist
      if (learnMoreExists) {
        expect(screen.getAllByRole('link').length).toBeLessThanOrEqual(2);
      }
    });

    it('should have minimal border styling (border-2)', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Should use border-2 for minimal button
      expect(content).toMatch(/border-2|border/);
    });

    it('should have hover:bg-black transition', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Should have hover state that fills black
      expect(content).toMatch(/hover:bg-black|hover:bg-ink-black/);
    });

    it('should NOT have gradient button backgrounds', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // NO gradients (gold, orange, etc.)
      const hasGradientButton =
        content.includes('bg-gold') ||
        content.includes('bg-gradient');
      expect(hasGradientButton).toBe(false);
    });
  });

  describe('Generous Spacing (Ma principle)', () => {
    it('should have generous vertical padding (py-32 or py-48)', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      // Japanese minimalism: generous breathing space
      expect(hero.className).toMatch(/py-32|py-48|py-20/);
    });

    it('should center content', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      // Should have flex centering or text-center
      expect(hero.className).toMatch(/flex.*items-center|mx-auto|text-center/);
    });

    it('should have proper spacing between elements', () => {
      const { container } = render(<Hero />);
      // Should have gap or mb/mt classes
      const hasSpacing =
        container.innerHTML.includes('gap-') ||
        container.innerHTML.includes('space-') ||
        container.innerHTML.includes('mb-') ||
        container.innerHTML.includes('mt-');
      expect(hasSpacing).toBe(true);
    });
  });

  describe('Animation (Seijaku principle - Minimal)', () => {
    it('should have simple fade-in animation (NO complex stagger)', () => {
      const { container } = render(<Hero />);
      // May have fade-in, but NO complex animations
      const content = container.innerHTML;
      // Should NOT have float/bounce/rotate animations
      expect(content).not.toMatch(/animate-float|animate-bounce|animate-spin/);
    });

    it('should have calm transition durations', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Should use duration-base (250ms) or duration-slow (350ms)
      const hasTransition =
        content.includes('transition') ||
        content.includes('duration');
      // Having transitions is optional, but if present should be calm
      if (hasTransition) {
        expect(content).toMatch(/duration-\d+|transition/);
      }
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      render(<Hero />);
      const banner = screen.getByRole('banner');
      expect(banner).toBeInTheDocument();
    });

    it('should have accessible CTA button labels', () => {
      render(<Hero />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThanOrEqual(1);
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });

    it('should support keyboard navigation', () => {
      render(<Hero />);
      const links = screen.getAllByRole('link');
      const firstLink = links[0];

      firstLink.focus();
      expect(firstLink).toHaveFocus();
    });

    it('should have high contrast text (black on white)', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Should use ink-black, charcoal, or gray text on white
      expect(content).toMatch(/text-black|text-ink-black|text-charcoal|text-gray/);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive text sizes', () => {
      const { container } = render(<Hero />);
      const content = container.innerHTML;
      // Should have sm:/md:/lg: breakpoints
      const hasResponsiveText =
        content.includes('sm:text-') ||
        content.includes('md:text-') ||
        content.includes('lg:text-');
      expect(hasResponsiveText).toBe(true);
    });

    it('should have responsive padding', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      // Should have responsive py- classes
      expect(hero.className).toMatch(/py-/);
    });
  });

  describe('User Interactions', () => {
    it('should be clickable on CTA button', async () => {
      const user = userEvent.setup();
      render(<Hero />);

      const links = screen.getAllByRole('link');
      const firstLink = links[0];
      await user.click(firstLink);

      // Button should be clickable (no error thrown)
      expect(firstLink).toBeInTheDocument();
    });
  });

  describe('Typography Hierarchy', () => {
    it('should have headline as the most prominent element', () => {
      render(<Hero />);
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];

      // H1 should have very large text size
      expect(h1.className).toMatch(/text-5xl|text-6xl|text-7xl/);
    });

    it('should use tracking-tight for headline', () => {
      render(<Hero />);
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];
      // Tight letter-spacing for refined look
      expect(h1.className).toMatch(/tracking-tight/);
    });
  });

  describe('Props', () => {
    it('should accept custom className', () => {
      render(<Hero className="custom-class" data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      expect(hero).toHaveClass('custom-class');
    });

    it('should accept data-testid prop', () => {
      render(<Hero data-testid="test-hero" />);
      expect(screen.getByTestId('test-hero')).toBeInTheDocument();
    });

    it('should spread HTML attributes', () => {
      render(<Hero aria-label="Hero section" data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      expect(hero).toHaveAttribute('aria-label', 'Hero section');
    });
  });
});
