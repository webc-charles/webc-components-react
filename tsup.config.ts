import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'
import path from 'path'
import { defineConfig } from 'tsup'

const srcPath = path.resolve(__dirname, 'src')

export default defineConfig({
  entry: ['src/index.ts', 'src/styles/index.scss'],
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  clean: true,
  external: ['react', 'react-dom'],
  sourcemap: true,
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      loadPaths: [srcPath],
      transform: postcssModules({}),
      type: 'css-text',
    }),
    sassPlugin({
      filter: /\.scss$/,
      loadPaths: [srcPath],
      type: 'css',
    }),
  ],
})
