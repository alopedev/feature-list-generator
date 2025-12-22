import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container, Section, Grid } from '@/components/shared/Layout';

describe('Layout Components', () => {
  describe('Container Component', () => {
    it('should render children', () => {
      render(<Container>Container content</Container>);
      expect(screen.getByText('Container content')).toBeInTheDocument();
    });

    it('should apply max-width constraint', () => {
      render(<Container data-testid="container">Content</Container>);
      const container = screen.getByTestId('container');
      expect(container.className).toContain('max-w');
    });

    it('should center content horizontally', () => {
      render(<Container data-testid="container">Content</Container>);
      const container = screen.getByTestId('container');
      expect(container.className).toContain('mx-auto');
    });

    it('should have horizontal padding', () => {
      render(<Container data-testid="container">Content</Container>);
      const container = screen.getByTestId('container');
      // px-4 on mobile, px-6 on larger screens
      expect(container.className).toMatch(/px-/);
    });

    it('should apply custom className', () => {
      render(
        <Container className="custom-container" data-testid="container">
          Content
        </Container>
      );
      expect(screen.getByTestId('container')).toHaveClass('custom-container');
    });

    it('should render as div element', () => {
      const { container } = render(<Container>Content</Container>);
      const element = container.firstChild;
      expect(element?.nodeName).toBe('DIV');
    });

    it('should support size variants', () => {
      const { rerender } = render(
        <Container size="sm" data-testid="container">
          Content
        </Container>
      );
      expect(screen.getByTestId('container').className).toContain('max-w-4xl');

      rerender(
        <Container size="md" data-testid="container">
          Content
        </Container>
      );
      expect(screen.getByTestId('container').className).toContain('max-w-6xl');

      rerender(
        <Container size="lg" data-testid="container">
          Content
        </Container>
      );
      expect(screen.getByTestId('container').className).toContain('max-w-7xl');
    });

    it('should use medium size by default', () => {
      render(<Container data-testid="container">Content</Container>);
      expect(screen.getByTestId('container').className).toContain('max-w-6xl');
    });
  });

  describe('Section Component', () => {
    it('should render children', () => {
      render(<Section>Section content</Section>);
      expect(screen.getByText('Section content')).toBeInTheDocument();
    });

    it('should have vertical padding', () => {
      render(<Section data-testid="section">Content</Section>);
      const section = screen.getByTestId('section');
      // Should have py- class for vertical padding
      expect(section.className).toMatch(/py-/);
    });

    it('should render as section element', () => {
      const { container } = render(<Section>Content</Section>);
      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      render(
        <Section className="custom-section" data-testid="section">
          Content
        </Section>
      );
      expect(screen.getByTestId('section')).toHaveClass('custom-section');
    });

    it('should support size variants for padding', () => {
      const { rerender } = render(
        <Section size="sm" data-testid="section">
          Content
        </Section>
      );
      expect(screen.getByTestId('section').className).toContain('py-8');

      rerender(
        <Section size="md" data-testid="section">
          Content
        </Section>
      );
      expect(screen.getByTestId('section').className).toContain('py-16');

      rerender(
        <Section size="lg" data-testid="section">
          Content
        </Section>
      );
      expect(screen.getByTestId('section').className).toContain('py-24');
    });

    it('should use medium size by default', () => {
      render(<Section data-testid="section">Content</Section>);
      expect(screen.getByTestId('section').className).toContain('py-16');
    });

    it('should support background color variants', () => {
      const { rerender } = render(
        <Section bg="white" data-testid="section">
          Content
        </Section>
      );
      expect(screen.getByTestId('section').className).toContain('bg-white');

      rerender(
        <Section bg="gray" data-testid="section">
          Content
        </Section>
      );
      expect(screen.getByTestId('section').className).toContain('bg-gray');
    });
  });

  describe('Grid Component', () => {
    it('should render children', () => {
      render(
        <Grid>
          <div>Grid item 1</div>
          <div>Grid item 2</div>
        </Grid>
      );
      expect(screen.getByText('Grid item 1')).toBeInTheDocument();
      expect(screen.getByText('Grid item 2')).toBeInTheDocument();
    });

    it('should use grid display', () => {
      render(<Grid data-testid="grid">Content</Grid>);
      const grid = screen.getByTestId('grid');
      expect(grid.className).toContain('grid');
    });

    it('should have gap between items', () => {
      render(<Grid data-testid="grid">Content</Grid>);
      const grid = screen.getByTestId('grid');
      expect(grid.className).toMatch(/gap-/);
    });

    it('should apply custom className', () => {
      render(
        <Grid className="custom-grid" data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid')).toHaveClass('custom-grid');
    });

    it('should render as div element', () => {
      const { container } = render(<Grid>Content</Grid>);
      const element = container.firstChild;
      expect(element?.nodeName).toBe('DIV');
    });

    it('should support column count variants', () => {
      const { rerender } = render(
        <Grid cols={2} data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid').className).toContain('grid-cols-2');

      rerender(
        <Grid cols={3} data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid').className).toContain('grid-cols-3');

      rerender(
        <Grid cols={4} data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid').className).toContain('grid-cols-4');
    });

    it('should use 1 column by default', () => {
      render(<Grid data-testid="grid">Content</Grid>);
      expect(screen.getByTestId('grid').className).toContain('grid-cols-1');
    });

    it('should support responsive column counts', () => {
      render(
        <Grid cols={2} mdCols={3} lgCols={4} data-testid="grid">
          Content
        </Grid>
      );
      const grid = screen.getByTestId('grid');
      expect(grid.className).toContain('grid-cols-2');
      expect(grid.className).toContain('md:grid-cols-3');
      expect(grid.className).toContain('lg:grid-cols-4');
    });

    it('should support gap size variants', () => {
      const { rerender } = render(
        <Grid gap="sm" data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid').className).toContain('gap-4');

      rerender(
        <Grid gap="md" data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid').className).toContain('gap-6');

      rerender(
        <Grid gap="lg" data-testid="grid">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid').className).toContain('gap-8');
    });

    it('should use medium gap by default', () => {
      render(<Grid data-testid="grid">Content</Grid>);
      expect(screen.getByTestId('grid').className).toContain('gap-6');
    });
  });

  describe('Layout Integration', () => {
    it('should work together in a typical layout structure', () => {
      render(
        <Section>
          <Container>
            <Grid cols={2}>
              <div>Item 1</div>
              <div>Item 2</div>
            </Grid>
          </Container>
        </Section>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });
});
