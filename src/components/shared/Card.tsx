import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

/**
 * Card Component
 *
 * A versatile container component with multiple variants for different use cases.
 * Provides consistent styling following the diabrowser.com aesthetic.
 *
 * @example
 * <Card variant="default">
 *   <h3>Feature Title</h3>
 *   <p>Feature description</p>
 * </Card>
 *
 * @example
 * <Card variant="elevated" onClick={handleClick}>
 *   Clickable card content
 * </Card>
 */
export default function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  // Base styles - common to all cards
  const baseStyles = cn(
    'block w-full',
    'p-6',
    'rounded-md', // 20px from design system
    'transition-all duration-200'
  );

  // Variant-specific styles
  const variantStyles = {
    default: cn(
      'bg-white',
      'border border-gray-200',
      'hover:shadow-md',
      'hover:border-gray-300'
    ),
    elevated: cn(
      'bg-white',
      'shadow-lg',
      'hover:shadow-xl',
      'border-0'
    ),
    outlined: cn(
      'bg-transparent',
      'border-2 border-gray-300',
      'hover:border-gray-400',
      'hover:bg-gray-50'
    ),
  };

  // Combine all styles
  const cardStyles = cn(baseStyles, variantStyles[variant], className);

  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );
}
