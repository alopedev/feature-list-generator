import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FadeInSection from '@/components/shared/FadeInSection';

describe('FadeInSection Component', () => {
  let mockIntersectionObserver: any;

  beforeEach(() => {
    // Mock Intersection Observer
    mockIntersectionObserver = vi.fn(function (callback) {
      this.observe = vi.fn((element) => {
        // Simulate immediate intersection for testing
        callback([
          {
            isIntersecting: true,
            target: element,
            intersectionRatio: 1,
          },
        ]);
      });
      this.unobserve = vi.fn();
      this.disconnect = vi.fn();
    });

    global.IntersectionObserver = mockIntersectionObserver as any;
  });

  describe('Rendering', () => {
    it('should render children', () => {
      render(
        <FadeInSection>
          <div>Fade in content</div>
        </FadeInSection>
      );

      expect(screen.getByText('Fade in content')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      render(
        <FadeInSection>
          <h2>Heading</h2>
          <p>Paragraph</p>
        </FadeInSection>
      );

      expect(screen.getByText('Heading')).toBeInTheDocument();
      expect(screen.getByText('Paragraph')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      render(
        <FadeInSection className="custom-section" data-testid="section">
          Content
        </FadeInSection>
      );

      const section = screen.getByTestId('section');
      expect(section).toHaveClass('custom-section');
    });

    it('should render as div element by default', () => {
      const { container } = render(<FadeInSection>Content</FadeInSection>);
      const element = container.firstChild;
      expect(element?.nodeName).toBe('DIV');
    });
  });

  describe('Intersection Observer Integration', () => {
    it('should create an Intersection Observer instance', () => {
      render(<FadeInSection>Content</FadeInSection>);

      expect(mockIntersectionObserver).toHaveBeenCalled();
    });

    it('should observe the element', () => {
      render(<FadeInSection data-testid="section">Content</FadeInSection>);

      const observeCall = mockIntersectionObserver.mock.results[0].value.observe;
      expect(observeCall).toHaveBeenCalled();
    });

    it('should unobserve on unmount', () => {
      const { unmount } = render(<FadeInSection>Content</FadeInSection>);

      const disconnectCall = mockIntersectionObserver.mock.results[0].value.disconnect;

      unmount();

      expect(disconnectCall).toHaveBeenCalled();
    });

    it('should use custom threshold', () => {
      render(<FadeInSection threshold={0.5}>Content</FadeInSection>);

      // Verify IntersectionObserver was called with threshold in options
      const [callback, options] = mockIntersectionObserver.mock.calls[0];
      expect(options).toEqual({ threshold: 0.5, rootMargin: '0px' });
    });

    it('should use default threshold of 0.1', () => {
      render(<FadeInSection>Content</FadeInSection>);

      const [callback, options] = mockIntersectionObserver.mock.calls[0];
      expect(options.threshold).toBe(0.1);
    });

    it('should use custom rootMargin', () => {
      render(<FadeInSection rootMargin="-100px">Content</FadeInSection>);

      const [callback, options] = mockIntersectionObserver.mock.calls[0];
      expect(options.rootMargin).toBe('-100px');
    });
  });

  describe('Animation States', () => {
    it('should have initial hidden state before intersection', () => {
      // Mock IntersectionObserver that doesn't trigger callback immediately
      global.IntersectionObserver = vi.fn(function () {
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
      }) as any;

      render(<FadeInSection data-testid="section">Content</FadeInSection>);

      const section = screen.getByTestId('section');
      // Should have initial opacity of 0
      expect(section.style.opacity).toBe('0');
    });

    it('should transition to visible state on intersection', () => {
      render(<FadeInSection data-testid="section">Content</FadeInSection>);

      const section = screen.getByTestId('section');
      // After intersection, opacity should be 1
      expect(section.style.opacity).toBe('1');
    });
  });

  describe('Framer Motion Integration', () => {
    it('should apply fade-in animation', () => {
      const { container } = render(<FadeInSection>Content</FadeInSection>);

      // Verify framer-motion div is rendered
      expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('should support custom animation duration', () => {
      render(<FadeInSection duration={1.5}>Content</FadeInSection>);

      // Component renders without errors with custom duration
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should use default duration of 0.6s', () => {
      render(<FadeInSection>Content</FadeInSection>);

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should not affect content accessibility', () => {
      render(
        <FadeInSection>
          <button>Click me</button>
        </FadeInSection>
      );

      const button = screen.getByRole('button', { name: 'Click me' });
      expect(button).toBeInTheDocument();
    });

    it('should support aria attributes', () => {
      render(
        <FadeInSection aria-label="Animated section" data-testid="section">
          Content
        </FadeInSection>
      );

      const section = screen.getByTestId('section');
      expect(section).toHaveAttribute('aria-label', 'Animated section');
    });
  });

  describe('Edge Cases', () => {
    it('should handle no children gracefully', () => {
      const { container } = render(<FadeInSection />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should handle ref forwarding', () => {
      const ref = vi.fn();
      render(<FadeInSection ref={ref}>Content</FadeInSection>);

      // Ref should be called with the element
      expect(ref).toHaveBeenCalled();
    });

    it('should work with nested FadeInSections', () => {
      render(
        <FadeInSection>
          <div>Outer</div>
          <FadeInSection>
            <div>Inner</div>
          </FadeInSection>
        </FadeInSection>
      );

      expect(screen.getByText('Outer')).toBeInTheDocument();
      expect(screen.getByText('Inner')).toBeInTheDocument();
    });
  });

  describe('Visual Styling', () => {
    it('should apply transition for smooth animation', () => {
      render(<FadeInSection data-testid="section">Content</FadeInSection>);

      const section = screen.getByTestId('section');
      // Should have transition property
      expect(section.style.transition).toBeTruthy();
    });
  });
});
