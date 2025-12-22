/**
 * Core type definitions for Feature List Generator
 *
 * This file contains all shared TypeScript interfaces and types
 * used throughout the application.
 */

// ============================================================================
// Document Processing Types
// ============================================================================

export interface ProcessedDocument {
  id: string;
  fileName: string;
  fileType: 'pdf' | 'docx';
  extractedText: string;
  metadata: DocumentMetadata;
  uploadedAt: Date;
}

export interface DocumentMetadata {
  pageCount?: number;
  title?: string;
  author?: string;
  wordCount: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// ============================================================================
// Feature Types
// ============================================================================

export type FeatureCategory =
  | 'UI/UX'
  | 'API'
  | 'Database'
  | 'Integration'
  | 'Security'
  | 'Performance'
  | 'Other';

export type FeaturePriority = 'High' | 'Medium' | 'Low';

export interface Feature {
  id: string;
  number: number;
  title: string;
  description: string;
  category: FeatureCategory;
  acceptanceCriteria?: string[];
  priority?: FeaturePriority;
  estimatedEffort?: string;
}

export interface ExtractionResult {
  features: Feature[];
  tokensUsed: number;
  extractionTime: number;
  confidence: number;
}

// ============================================================================
// Export Types
// ============================================================================

export type ExportFormat = 'excel' | 'csv' | 'markdown';

export interface ExcelOptions {
  multipleSheets?: boolean;
  colorCodePriority?: boolean;
}

export interface CSVOptions {
  delimiter?: ',' | ';' | '\t';
  includeHeaders?: boolean;
}

export interface MarkdownOptions {
  format?: 'list' | 'table';
  groupBy?: 'category' | 'priority' | null;
  includeTOC?: boolean;
}

export type ExportOptions = ExcelOptions | CSVOptions | MarkdownOptions;

// ============================================================================
// State Management Types
// ============================================================================

export interface FilterState {
  categories: FeatureCategory[];
  priorities: FeaturePriority[];
}

export interface WebappState {
  currentStep: number;
  document: ProcessedDocument | null;
  features: Feature[];
  isDraft: boolean;
  lastSaved: Date | null;
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg';
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  bg?: 'white' | 'gray' | 'transparent';
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  mdCols?: 2 | 3 | 4;
  lgCols?: 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
}
