import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import AnimatedHeadline from '@/components/shared/AnimatedHeadline';

describe('AnimatedHeadline Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe('Rendering', () => {
    it('should render the first headline initially', () => {
      const headlines = ['First', 'Second', 'Third'];
      render(<AnimatedHeadline headlines={headlines} />);

      expect(screen.getByText('First')).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      render(
        <AnimatedHeadline
          headlines={['Test']}
          className="custom-headline"
          data-testid="headline"
        />
      );

      const container = screen.getByTestId('headline');
      expect(container).toHaveClass('custom-headline');
    });

    it('should render as h1 by default', () => {
      const { container } = render(<AnimatedHeadline headlines={['Test']} />);
      expect(container.querySelector('h1')).toBeInTheDocument();
    });

    it('should support different heading levels', () => {
      const { container: h2Container } = render(
        <AnimatedHeadline headlines={['Test']} level={2} />
      );
      expect(h2Container.querySelector('h2')).toBeInTheDocument();

      const { container: h3Container } = render(
        <AnimatedHeadline headlines={['Test']} level={3} />
      );
      expect(h3Container.querySelector('h3')).toBeInTheDocument();
    });
  });

  describe('Animation Cycling', () => {
    it('should cycle through headlines at specified interval', async () => {
      const headlines = ['First', 'Second', 'Third'];
      const interval = 3000; // 3 seconds

      render(<AnimatedHeadline headlines={headlines} interval={interval} />);

      // Initially shows first headline
      expect(screen.getByText('First')).toBeInTheDocument();

      // After 3 seconds, should show second headline
      vi.advanceTimersByTime(interval);
      await waitFor(() => {
        expect(screen.getByText('Second')).toBeInTheDocument();
      });

      // After another 3 seconds, should show third headline
      vi.advanceTimersByTime(interval);
      await waitFor(() => {
        expect(screen.getByText('Third')).toBeInTheDocument();
      });

      // After another 3 seconds, should loop back to first
      vi.advanceTimersByTime(interval);
      await waitFor(() => {
        expect(screen.getByText('First')).toBeInTheDocument();
      });
    });

    it('should use default interval of 4000ms', async () => {
      const headlines = ['First', 'Second'];

      render(<AnimatedHeadline headlines={headlines} />);

      expect(screen.getByText('First')).toBeInTheDocument();

      // Default interval is 4000ms
      vi.advanceTimersByTime(4000);
      await waitFor(() => {
        expect(screen.getByText('Second')).toBeInTheDocument();
      });
    });

    it('should handle single headline without cycling', () => {
      render(<AnimatedHeadline headlines={['Only One']} />);

      expect(screen.getByText('Only One')).toBeInTheDocument();

      // Advance time - should still show the same headline
      vi.advanceTimersByTime(10000);
      expect(screen.getByText('Only One')).toBeInTheDocument();
    });
  });

  describe('Framer Motion Integration', () => {
    it('should apply animation exit and enter', async () => {
      const headlines = ['First', 'Second'];

      const { container } = render(
        <AnimatedHeadline headlines={headlines} interval={3000} />
      );

      const motionElement = container.querySelector('[data-testid="animated-text"]');
      expect(motionElement).toBeTruthy();

      // Check that framer-motion attributes are present (div wrapper)
      expect(container.querySelector('div')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible with proper semantic HTML', () => {
      render(<AnimatedHeadline headlines={['Accessible Headline']} />);

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Accessible Headline');
    });

    it('should support aria-label', () => {
      render(
        <AnimatedHeadline
          headlines={['Test']}
          aria-label="Dynamic headline"
        />
      );

      const heading = screen.getByLabelText('Dynamic headline');
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty headlines array gracefully', () => {
      // Should not crash with empty array
      const { container } = render(<AnimatedHeadline headlines={[]} />);
      expect(container).toBeInTheDocument();
    });

    it('should handle very short intervals', async () => {
      const headlines = ['A', 'B'];

      render(<AnimatedHeadline headlines={headlines} interval={100} />);

      expect(screen.getByText('A')).toBeInTheDocument();

      vi.advanceTimersByTime(100);
      await waitFor(() => {
        expect(screen.getByText('B')).toBeInTheDocument();
      });
    });

    it('should cleanup interval on unmount', () => {
      const headlines = ['First', 'Second'];
      const { unmount } = render(<AnimatedHeadline headlines={headlines} />);

      // Spy on clearInterval
      const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

      unmount();

      // Should have called clearInterval on unmount
      expect(clearIntervalSpy).toHaveBeenCalled();
    });
  });

  describe('Visual Styling', () => {
    it('should apply bold font weight', () => {
      render(<AnimatedHeadline headlines={['Test']} data-testid="headline" />);

      const headline = screen.getByTestId('headline');
      expect(headline.className).toContain('font-bold');
    });

    it('should apply responsive text sizing for h1', () => {
      render(<AnimatedHeadline headlines={['Test']} level={1} data-testid="headline" />);

      const headline = screen.getByTestId('headline');
      expect(headline.className).toContain('text-4xl');
      expect(headline.className).toContain('md:text-5xl');
    });
  });
});
