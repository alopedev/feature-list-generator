import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '@/components/shared/Card';

describe('Card Component', () => {
  describe('Rendering', () => {
    it('should render card with children', () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      render(
        <Card>
          <h3>Title</h3>
          <p>Description</p>
        </Card>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      render(<Card className="custom-card" data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('custom-card');
    });
  });

  describe('Variants', () => {
    it('should render default variant by default', () => {
      render(<Card data-testid="card">Default</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white', 'border', 'border-gray-200');
    });

    it('should render elevated variant with shadow', () => {
      render(<Card variant="elevated" data-testid="card">Elevated</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white', 'shadow-lg');
    });

    it('should render outlined variant with border', () => {
      render(<Card variant="outlined" data-testid="card">Outlined</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-transparent', 'border-2');
    });
  });

  describe('Styling', () => {
    it('should have rounded corners', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      // Using rounded-md (20px from design system)
      expect(card.className).toContain('rounded-md');
    });

    it('should have padding', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card.className).toContain('p-6');
    });

    it('should have transition for hover effects', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card.className).toContain('transition');
    });
  });

  describe('Hover Effects', () => {
    it('should have hover shadow effect on default variant', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card.className).toContain('hover:shadow-md');
    });

    it('should have hover shadow effect on elevated variant', () => {
      render(<Card variant="elevated" data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card.className).toContain('hover:shadow-xl');
    });
  });

  describe('Accessibility', () => {
    it('should render as a div element', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;
      expect(card?.nodeName).toBe('DIV');
    });

    it('should be able to receive custom ARIA attributes', () => {
      render(
        <Card aria-label="Feature card" data-testid="card">
          Content
        </Card>
      );
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('aria-label', 'Feature card');
    });

    it('should support role attribute', () => {
      render(
        <Card role="article" data-testid="card">
          Content
        </Card>
      );
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('role', 'article');
    });
  });

  describe('Props Forwarding', () => {
    it('should forward data attributes', () => {
      render(
        <Card data-testid="card" data-feature="premium">
          Content
        </Card>
      );
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('data-feature', 'premium');
    });

    it('should forward onClick handler', () => {
      const handleClick = vi.fn();
      render(
        <Card data-testid="card" onClick={handleClick}>
          Content
        </Card>
      );
      const card = screen.getByTestId('card');
      card.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Layout', () => {
    it('should be a block-level element', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card.className).toContain('block');
    });

    it('should have full width by default', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card.className).toContain('w-full');
    });
  });
});
