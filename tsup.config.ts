import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig } from 'tsup'
import path from 'node:path'

const srcPath = path.resolve(__dirname, 'src')

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  clean: true,
  external: ['react', 'react-dom'],
  sourcemap: false,
  esbuildOptions(options) {
    options.alias = {
      base: path.resolve(srcPath, 'components/base'),
      form: path.resolve(srcPath, 'components/form'),
      modules: path.resolve(srcPath, 'components/modules'),
      sections: path.resolve(srcPath, 'components/sections'),
      types: path.resolve(srcPath, 'types'),
    }
  },
  esbuildPlugins: [
    // CSS Modules for component styles (*.module.scss)
    sassPlugin({
      loadPaths: [srcPath],
      filter: /\.module\.scss$/,
      transform: postcssModules({}),
    }),
    // Global styles (src/styles/*.scss) - no CSS modules
    sassPlugin({
      loadPaths: [srcPath],
      filter: /styles\/.*\.scss$/,
    }),
  ],
})
