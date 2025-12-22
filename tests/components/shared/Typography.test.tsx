import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading, Paragraph, Label } from '@/components/shared/Typography';

describe('Typography Components', () => {
  describe('Heading Component', () => {
    it('should render h2 by default', () => {
      const { container } = render(<Heading>Default Heading</Heading>);
      expect(container.querySelector('h2')).toBeInTheDocument();
      expect(screen.getByText('Default Heading')).toBeInTheDocument();
    });

    it('should render h1 when level is 1', () => {
      const { container } = render(<Heading level={1}>H1 Heading</Heading>);
      expect(container.querySelector('h1')).toBeInTheDocument();
    });

    it('should render h3 when level is 3', () => {
      const { container } = render(<Heading level={3}>H3 Heading</Heading>);
      expect(container.querySelector('h3')).toBeInTheDocument();
    });

    it('should apply responsive text sizing for h1', () => {
      render(<Heading level={1} data-testid="heading">Large</Heading>);
      const heading = screen.getByTestId('heading');
      expect(heading.className).toContain('text-4xl');
      expect(heading.className).toContain('md:text-5xl');
    });

    it('should apply bold font weight', () => {
      render(<Heading data-testid="heading">Bold</Heading>);
      const heading = screen.getByTestId('heading');
      expect(heading.className).toContain('font-bold');
    });

    it('should apply custom className', () => {
      render(<Heading className="custom-heading" data-testid="heading">Text</Heading>);
      expect(screen.getByTestId('heading')).toHaveClass('custom-heading');
    });

    it('should have proper line height', () => {
      render(<Heading data-testid="heading">Text</Heading>);
      const heading = screen.getByTestId('heading');
      expect(heading.className).toContain('leading-tight');
    });
  });

  describe('Paragraph Component', () => {
    it('should render as p element', () => {
      const { container } = render(<Paragraph>Paragraph text</Paragraph>);
      expect(container.querySelector('p')).toBeInTheDocument();
      expect(screen.getByText('Paragraph text')).toBeInTheDocument();
    });

    it('should have base text size', () => {
      render(<Paragraph data-testid="paragraph">Text</Paragraph>);
      const paragraph = screen.getByTestId('paragraph');
      expect(paragraph.className).toContain('text-base');
    });

    it('should have comfortable line height', () => {
      render(<Paragraph data-testid="paragraph">Text</Paragraph>);
      const paragraph = screen.getByTestId('paragraph');
      expect(paragraph.className).toContain('leading-relaxed');
    });

    it('should have gray color', () => {
      render(<Paragraph data-testid="paragraph">Text</Paragraph>);
      const paragraph = screen.getByTestId('paragraph');
      expect(paragraph.className).toContain('text-gray-700');
    });

    it('should apply custom className', () => {
      render(<Paragraph className="custom-para" data-testid="paragraph">Text</Paragraph>);
      expect(screen.getByTestId('paragraph')).toHaveClass('custom-para');
    });

    it('should support large variant', () => {
      render(<Paragraph size="lg" data-testid="paragraph">Large text</Paragraph>);
      const paragraph = screen.getByTestId('paragraph');
      expect(paragraph.className).toContain('text-lg');
    });

    it('should support small variant', () => {
      render(<Paragraph size="sm" data-testid="paragraph">Small text</Paragraph>);
      const paragraph = screen.getByTestId('paragraph');
      expect(paragraph.className).toContain('text-sm');
    });
  });

  describe('Label Component', () => {
    it('should render as label element', () => {
      const { container } = render(<Label>Label text</Label>);
      expect(container.querySelector('label')).toBeInTheDocument();
      expect(screen.getByText('Label text')).toBeInTheDocument();
    });

    it('should support htmlFor attribute', () => {
      render(<Label htmlFor="input-id">Form label</Label>);
      const label = screen.getByText('Form label');
      expect(label).toHaveAttribute('for', 'input-id');
    });

    it('should have medium font weight', () => {
      render(<Label data-testid="label">Text</Label>);
      const label = screen.getByTestId('label');
      expect(label.className).toContain('font-medium');
    });

    it('should have small text size', () => {
      render(<Label data-testid="label">Text</Label>);
      const label = screen.getByTestId('label');
      expect(label.className).toContain('text-sm');
    });

    it('should have dark gray color', () => {
      render(<Label data-testid="label">Text</Label>);
      const label = screen.getByTestId('label');
      expect(label.className).toContain('text-gray-700');
    });

    it('should apply custom className', () => {
      render(<Label className="custom-label" data-testid="label">Text</Label>);
      expect(screen.getByTestId('label')).toHaveClass('custom-label');
    });

    it('should support required indicator', () => {
      render(<Label required data-testid="label">Required field</Label>);
      const label = screen.getByTestId('label');
      // Should contain the asterisk
      expect(label.textContent).toContain('*');
    });
  });

  describe('Semantic HTML', () => {
    it('Heading should use semantic heading tags', () => {
      const { container: h1Container } = render(<Heading level={1}>H1</Heading>);
      const { container: h2Container } = render(<Heading level={2}>H2</Heading>);
      const { container: h3Container } = render(<Heading level={3}>H3</Heading>);

      expect(h1Container.querySelector('h1')).toBeInTheDocument();
      expect(h2Container.querySelector('h2')).toBeInTheDocument();
      expect(h3Container.querySelector('h3')).toBeInTheDocument();
    });

    it('Paragraph should use p tag', () => {
      const { container } = render(<Paragraph>Text</Paragraph>);
      expect(container.querySelector('p')).toBeInTheDocument();
    });

    it('Label should use label tag', () => {
      const { container } = render(<Label>Text</Label>);
      expect(container.querySelector('label')).toBeInTheDocument();
    });
  });
});
