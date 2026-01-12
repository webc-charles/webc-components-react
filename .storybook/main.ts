import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.base = process.env.CI ? '/webc-components-react/' : '/'
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        components: path.resolve(__dirname, '../src/components'),
        styles: path.resolve(__dirname, '../src/styles'),
        i18n: path.resolve(__dirname, '../src/i18n'),
      },
    }
    return config
  },
}

export default config
