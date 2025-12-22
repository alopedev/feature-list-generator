import { cn } from '@/lib/utils';
import type { HeadingProps, ParagraphProps, LabelProps } from '@/types';

/**
 * Heading Component
 *
 * Renders semantic heading elements (h1-h6) with responsive typography.
 * Follows the diabrowser.com design system with bold weights and tight leading.
 *
 * @example
 * <Heading level={1}>Main Title</Heading>
 * <Heading level={2} className="text-blue">Section Heading</Heading>
 */
export function Heading({
  level = 2,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Responsive text sizing based on heading level
  const sizeStyles = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  const headingStyles = cn(
    'font-bold',
    'leading-tight',
    'text-gray-900',
    sizeStyles[level as keyof typeof sizeStyles],
    className
  );

  return (
    <Tag className={headingStyles} {...props}>
      {children}
    </Tag>
  );
}

/**
 * Paragraph Component
 *
 * Renders paragraph text with comfortable line height and customizable sizes.
 * Supports small, base, and large variants for different contexts.
 *
 * @example
 * <Paragraph>Body text with relaxed line height</Paragraph>
 * <Paragraph size="lg">Larger introductory paragraph</Paragraph>
 * <Paragraph size="sm" className="text-gray-500">Small helper text</Paragraph>
 */
export function Paragraph({
  size = 'base',
  className,
  children,
  ...props
}: ParagraphProps) {
  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  const paragraphStyles = cn(
    'leading-relaxed',
    'text-gray-700',
    sizeStyles[size],
    className
  );

  return (
    <p className={paragraphStyles} {...props}>
      {children}
    </p>
  );
}

/**
 * Label Component
 *
 * Renders form labels with proper semantic HTML and accessibility.
 * Supports required field indicators and htmlFor association.
 *
 * @example
 * <Label htmlFor="email-input">Email Address</Label>
 * <Label htmlFor="password" required>Password</Label>
 */
export function Label({
  htmlFor,
  required = false,
  className,
  children,
  ...props
}: LabelProps) {
  const labelStyles = cn(
    'block',
    'text-sm',
    'font-medium',
    'text-gray-700',
    className
  );

  return (
    <label htmlFor={htmlFor} className={labelStyles} {...props}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
