import { cn } from '@/lib/utils';
import type { ContainerProps, SectionProps, GridProps } from '@/types';

/**
 * Container Component
 *
 * Constrains content width and centers it horizontally.
 * Provides consistent max-width and horizontal padding across the application.
 *
 * @example
 * <Container size="md">
 *   <h1>Centered Content</h1>
 * </Container>
 */
export function Container({
  size = 'md',
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-4xl', // ~896px
    md: 'max-w-6xl', // ~1152px
    lg: 'max-w-7xl', // ~1280px
  };

  const containerStyles = cn(
    'w-full',
    'mx-auto', // Center horizontally
    'px-4 sm:px-6 lg:px-8', // Responsive horizontal padding
    sizeStyles[size],
    className
  );

  return (
    <div className={containerStyles} {...props}>
      {children}
    </div>
  );
}

/**
 * Section Component
 *
 * Provides vertical rhythm and semantic sectioning for page layouts.
 * Supports different padding sizes and background colors.
 *
 * @example
 * <Section size="lg" bg="gray">
 *   <Container>Section content</Container>
 * </Section>
 */
export function Section({
  size = 'md',
  bg = 'transparent',
  className,
  children,
  ...props
}: SectionProps) {
  const sizeStyles = {
    sm: 'py-8',   // 32px vertical
    md: 'py-16',  // 64px vertical
    lg: 'py-24',  // 96px vertical
  };

  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent',
  };

  const sectionStyles = cn(
    'w-full',
    sizeStyles[size],
    bgStyles[bg],
    className
  );

  return (
    <section className={sectionStyles} {...props}>
      {children}
    </section>
  );
}

/**
 * Grid Component
 *
 * CSS Grid layout with responsive column counts and gap sizes.
 * Supports mobile-first responsive design with breakpoint overrides.
 *
 * @example
 * <Grid cols={1} mdCols={2} lgCols={3} gap="lg">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 */
export function Grid({
  cols = 1,
  mdCols,
  lgCols,
  gap = 'md',
  className,
  children,
  ...props
}: GridProps) {
  const colsStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  const mdColsStyles = mdCols ? {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[mdCols] : '';

  const lgColsStyles = lgCols ? {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    6: 'lg:grid-cols-6',
  }[lgCols] : '';

  const gapStyles = {
    sm: 'gap-4',  // 16px
    md: 'gap-6',  // 24px
    lg: 'gap-8',  // 32px
  };

  const gridStyles = cn(
    'grid',
    colsStyles[cols],
    mdColsStyles,
    lgColsStyles,
    gapStyles[gap],
    className
  );

  return (
    <div className={gridStyles} {...props}>
      {children}
    </div>
  );
}
