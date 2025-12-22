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

describe('Hero Component', () => {
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

    it('should have proper background styling', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');
      // Should have background color or gradient
      expect(hero.className).toMatch(/bg-/);
    });
  });

  describe('Animated Headline', () => {
    it('should render animated headline component', () => {
      render(<Hero />);
      // Should have one of the cycling headlines visible
      const headlineTexts = [
        'Extract Features',
        'Analyze Proposals',
        'Generate Reports',
      ];

      const hasHeadline = headlineTexts.some((text) => {
        try {
          screen.getByText(text);
          return true;
        } catch {
          return false;
        }
      });

      expect(hasHeadline).toBe(true);
    });

    it('should have main heading at h1 level', () => {
      render(<Hero />);
      const headings = screen.getAllByRole('heading', { level: 1 });
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('Supporting Text', () => {
    it('should render subtitle or description', () => {
      render(<Hero />);
      // Should have some descriptive text about the product
      const section = screen.getByRole('banner');
      expect(section.textContent).toBeTruthy();
      expect(section.textContent!.length).toBeGreaterThan(50);
    });
  });

  describe('Call-to-Action Buttons', () => {
    it('should render "Try It Now" CTA button', () => {
      render(<Hero />);
      const tryButton = screen.getByRole('link', { name: /try it now/i });
      expect(tryButton).toBeInTheDocument();
    });

    it('should render "Learn More" CTA button', () => {
      render(<Hero />);
      const learnButton = screen.getByRole('link', { name: /learn more/i });
      expect(learnButton).toBeInTheDocument();
    });

    it('"Try It Now" should link to /webapp', () => {
      render(<Hero />);
      const tryButton = screen.getByRole('link', { name: /try it now/i });
      expect(tryButton).toHaveAttribute('href', '/webapp');
    });

    it('"Learn More" should link to features section', () => {
      render(<Hero />);
      const learnButton = screen.getByRole('link', { name: /learn more/i });
      // Should link to an anchor (e.g., #features or #how-it-works)
      const href = learnButton.getAttribute('href');
      expect(href).toMatch(/^#/);
    });

    it('CTAs should have proper button styling', () => {
      render(<Hero />);
      const tryButton = screen.getByRole('link', { name: /try it now/i });
      const learnButton = screen.getByRole('link', { name: /learn more/i });

      // Should have button-like classes
      expect(tryButton.className).toMatch(/px-|py-/);
      expect(learnButton.className).toMatch(/px-|py-/);
    });

    it('primary CTA should have distinct styling', () => {
      render(<Hero />);
      const tryButton = screen.getByRole('link', { name: /try it now/i });

      // Primary button should have gold/primary color
      expect(tryButton.className).toMatch(/bg-gold|bg-primary/);
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      render(<Hero />);
      const banner = screen.getByRole('banner');
      expect(banner).toBeInTheDocument();
    });

    it('should have accessible button labels', () => {
      render(<Hero />);
      const tryButton = screen.getByRole('link', { name: /try it now/i });
      const learnButton = screen.getByRole('link', { name: /learn more/i });

      expect(tryButton).toHaveAccessibleName();
      expect(learnButton).toHaveAccessibleName();
    });

    it('should support keyboard navigation', () => {
      render(<Hero />);
      const tryButton = screen.getByRole('link', { name: /try it now/i });

      tryButton.focus();
      expect(tryButton).toHaveFocus();
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive padding', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');

      // Should have responsive padding classes
      expect(hero.className).toMatch(/py-|px-/);
    });

    it('should center content', () => {
      render(<Hero data-testid="hero" />);
      const hero = screen.getByTestId('hero');

      // Should have flex centering on section or text-center on inner content
      expect(hero.className).toMatch(/flex.*items-center.*justify-center|mx-auto|text-center/);
    });
  });

  describe('User Interactions', () => {
    it('should be clickable on CTA buttons', async () => {
      const user = userEvent.setup();
      render(<Hero />);

      const tryButton = screen.getByRole('link', { name: /try it now/i });
      await user.click(tryButton);

      // Button should be clickable (no error thrown)
      expect(tryButton).toBeInTheDocument();
    });
  });

  describe('Visual Hierarchy', () => {
    it('should have headline as the most prominent element', () => {
      render(<Hero />);
      const h1 = screen.getAllByRole('heading', { level: 1 })[0];

      // H1 should have large text size
      expect(h1.className).toMatch(/text-4xl|text-5xl|text-6xl/);
    });

    it('should have proper spacing between elements', () => {
      const { container } = render(<Hero data-testid="hero" />);

      // Should have gap or space classes somewhere in the component
      const hasSpacing = container.innerHTML.includes('gap-') || container.innerHTML.includes('space-');
      expect(hasSpacing).toBe(true);
    });
  });
});
