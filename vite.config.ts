
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

const rootDir = [
  __dirname,
  'src',
].join(path.sep);

const outDir = [
  __dirname,
  'dist',
].join(path.sep);

// https://vitejs.dev/config/

export default defineConfig((config) => {
  return {
    root: rootDir,
    plugins: [
      // ...,
      react(),
    ],
    build: {
      sourcemap: true,
      outDir: outDir
    },
    test: {
      root: '.',
      environment: 'jsdom',
      include: [
        './**/*.{test,spec}.{js,ts,jsx,tsx}',
      ],
      reporters: [
        'default',
        'junit',
      ],
      outputFile: {
        junit: './test-reports/junit.xml',
      },
      coverage: {
        include: [
          './**/*.{js,ts,jsx,tsx}',
        ],
        exclude: [
          
        ],
        all: true,
        provider: 'istanbul',
        reporter: [
          'text',
          'cobertura',
          'html',
        ]
      }
    },
  };
});
