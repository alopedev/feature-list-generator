import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

/**
 * Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Supports loading state with spinner and integrates with framer-motion for smooth animations.
 *
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * @example
 * <Button variant="secondary" isLoading>
 *   Loading...
 * </Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Base styles - common to all buttons
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'font-semibold',
      'rounded-md',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative'
    );

    // Variant styles
    const variantStyles = {
      primary: cn(
        'bg-gold text-gray-900',
        'hover:bg-gold/90',
        'focus:ring-gold/50',
        'shadow-sm hover:shadow-md'
      ),
      secondary: cn(
        'bg-blue text-white',
        'hover:bg-blue/90',
        'focus:ring-blue/50',
        'shadow-sm hover:shadow-md'
      ),
      ghost: cn(
        'bg-transparent text-gray-700',
        'border-2 border-gray-300',
        'hover:bg-gray-50 hover:border-gray-400',
        'focus:ring-gray-400/50'
      ),
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    // Combine all styles
    const buttonStyles = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    // Determine if button should be disabled
    const isDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        type={type}
        className={buttonStyles}
        disabled={isDisabled}
        aria-busy={isLoading}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
        {...props}
      >
        {isLoading && (
          <Loader2
            className="mr-2 h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        )}
        <span className={isLoading ? 'sr-only' : ''}>{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
