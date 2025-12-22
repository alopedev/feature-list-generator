import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Project Configuration', () => {
  describe('package.json', () => {
    it('should have correct project name', () => {
      const packageJson = JSON.parse(
        readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
      );
      expect(packageJson.name).toBe('feature-list-generator');
    });

    it('should have required dependencies', () => {
      const packageJson = JSON.parse(
        readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
      );

      const requiredDeps = [
        'next',
        'react',
        'react-dom',
        '@anthropic-ai/sdk',
        'react-dropzone',
        'pdf-parse',
        'mammoth',
        'exceljs',
        'react-hook-form',
        'zod',
        'framer-motion',
        'lucide-react',
        'clsx',
        'tailwind-merge',
      ];

      requiredDeps.forEach((dep) => {
        expect(packageJson.dependencies).toHaveProperty(dep);
      });
    });

    it('should have required dev dependencies', () => {
      const packageJson = JSON.parse(
        readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
      );

      const requiredDevDeps = [
        'vitest',
        '@testing-library/react',
        '@testing-library/jest-dom',
        '@testing-library/user-event',
        'typescript',
        'tailwindcss',
      ];

      requiredDevDeps.forEach((dep) => {
        expect(packageJson.devDependencies).toHaveProperty(dep);
      });
    });

    it('should have test scripts configured', () => {
      const packageJson = JSON.parse(
        readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
      );

      expect(packageJson.scripts).toHaveProperty('test');
      expect(packageJson.scripts).toHaveProperty('test:ui');
      expect(packageJson.scripts).toHaveProperty('test:coverage');
    });
  });

  describe('TypeScript Configuration', () => {
    it('should have tsconfig.json', () => {
      const tsconfig = JSON.parse(
        readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8')
      );
      expect(tsconfig).toBeDefined();
      expect(tsconfig.compilerOptions).toBeDefined();
    });

    it('should have path aliases configured', () => {
      const tsconfig = JSON.parse(
        readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8')
      );
      expect(tsconfig.compilerOptions.paths).toHaveProperty('@/*');
    });
  });

  describe('Environment Variables', () => {
    it('should have .env.example file', () => {
      const envExample = readFileSync(
        join(process.cwd(), '.env.example'),
        'utf-8'
      );
      expect(envExample).toContain('ANTHROPIC_API_KEY');
      expect(envExample).toContain('NEXT_PUBLIC_APP_URL');
    });
  });

  describe('Vitest Configuration', () => {
    it('should have vitest.config.ts file', () => {
      const vitestConfigExists = readFileSync(
        join(process.cwd(), 'vitest.config.ts'),
        'utf-8'
      );
      expect(vitestConfigExists).toContain('defineConfig');
      expect(vitestConfigExists).toContain('jsdom');
    });
  });
});
