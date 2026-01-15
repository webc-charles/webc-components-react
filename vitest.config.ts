import { defineConfig } from 'vitest/config'

import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      i18n: path.resolve(__dirname, 'src/i18n'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, 'src')],
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['verbose'],
  },
})
