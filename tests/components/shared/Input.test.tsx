import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '@/components/shared/Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render input field', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('should render with label', () => {
      render(<Input label="Email Address" />);
      expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    });

    it('should render label with htmlFor attribute', () => {
      render(<Input id="email-input" label="Email" />);
      const label = screen.getByText('Email');
      expect(label).toHaveAttribute('for', 'email-input');
    });

    it('should apply custom className', () => {
      render(<Input className="custom-input" data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('custom-input');
    });
  });

  describe('Helper Text', () => {
    it('should render helper text when provided', () => {
      render(<Input helperText="Enter your email address" />);
      expect(screen.getByText('Enter your email address')).toBeInTheDocument();
    });

    it('should associate helper text with input via aria-describedby', () => {
      render(<Input id="email" helperText="Helper text" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAccessibleDescription('Helper text');
    });
  });

  describe('Error State', () => {
    it('should render error message', () => {
      render(<Input error="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('should apply error styles when error is present', () => {
      render(<Input error="Error message" data-testid="input" />);
      const input = screen.getByTestId('input');
      // Error state should have red border
      expect(input).toHaveClass('border-red-500');
    });

    it('should have aria-invalid when error exists', () => {
      render(<Input error="Error" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('should prioritize error over helper text', () => {
      render(
        <Input
          helperText="Helper text"
          error="Error message"
        />
      );
      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });
  });

  describe('Disabled State', () => {
    it('should render as disabled', () => {
      render(<Input disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('should apply disabled styles', () => {
      render(<Input disabled data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
    });

    it('should not allow input when disabled', async () => {
      const user = userEvent.setup();
      render(<Input disabled data-testid="input" />);
      const input = screen.getByTestId('input') as HTMLInputElement;

      await user.type(input, 'test');
      expect(input.value).toBe('');
    });
  });

  describe('Value and onChange', () => {
    it('should handle controlled input', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Input value="" onChange={handleChange} />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'test');
      expect(handleChange).toHaveBeenCalled();
    });

    it('should update value on change', async () => {
      const user = userEvent.setup();
      render(<Input data-testid="input" />);
      const input = screen.getByTestId('input') as HTMLInputElement;

      await user.type(input, 'hello');
      expect(input.value).toBe('hello');
    });
  });

  describe('Input Types', () => {
    it('should support text type by default', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('should support email type', () => {
      render(<Input type="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('should support password type', () => {
      render(<Input type="password" data-testid="password" />);
      const input = screen.getByTestId('password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('should support number type', () => {
      render(<Input type="number" data-testid="number" />);
      const input = screen.getByTestId('number');
      expect(input).toHaveAttribute('type', 'number');
    });
  });

  describe('Accessibility', () => {
    it('should be focusable', () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId('input');
      input.focus();
      expect(input).toHaveFocus();
    });

    it('should support required attribute', () => {
      render(<Input required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('should support aria-label', () => {
      render(<Input aria-label="Search" />);
      expect(screen.getByLabelText('Search')).toBeInTheDocument();
    });

    it('should have proper label association', () => {
      render(<Input id="test-input" label="Test Label" />);
      const input = screen.getByRole('textbox');
      const label = screen.getByText('Test Label');

      expect(label).toHaveAttribute('for', 'test-input');
      expect(input).toHaveAttribute('id', 'test-input');
    });
  });

  describe('Placeholder', () => {
    it('should render placeholder text', () => {
      render(<Input placeholder="Type something..." />);
      expect(screen.getByPlaceholderText('Type something...')).toBeInTheDocument();
    });
  });

  describe('Auto-complete', () => {
    it('should support autocomplete attribute', () => {
      render(<Input autoComplete="email" data-testid="input" />);
      expect(screen.getByTestId('input')).toHaveAttribute('autocomplete', 'email');
    });
  });
});
