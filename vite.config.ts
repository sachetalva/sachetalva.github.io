/// <reference types="vitest" />
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test' || process.env.NODE_ENV === 'test' || process.env.VITEST === 'true';
  return {
    plugins: [
      solid({
        hot: !isTest,
      }),
    ],
    resolve: {
      conditions: isTest ? ['browser', 'development'] : [],
    },
    test: {
      environment: 'jsdom',
      globals: true,
      testTimeout: 15000,
      exclude: [
        'node_modules',
        'dist',
        '.idea',
        '.git',
        '.cache',
        'e2e',
      ],
      server: {
        deps: {
          inline: [/solid-js/],
        },
      },
    },
  };
})
