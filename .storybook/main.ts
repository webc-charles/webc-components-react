import type { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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
        sections: path.resolve(__dirname, '../src/components/sections'),
        modules: path.resolve(__dirname, '../src/components/modules'),
        form: path.resolve(__dirname, '../src/components/form'),
        base: path.resolve(__dirname, '../src/components/base'),
        styles: path.resolve(__dirname, '../src/styles'),
        types: path.resolve(__dirname, '../src/types'),
        i18n: path.resolve(__dirname, '../src/i18n'),
        utils: path.resolve(__dirname, '../src/utils'),
      },
    }
    return config
  },
}

export default config
