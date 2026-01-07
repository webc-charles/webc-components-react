import { defineConfig } from 'tsup'
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin'
import path from 'path'

const srcPath = path.resolve(__dirname, 'src')

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  clean: true,
  external: ['react', 'react-dom'],
  sourcemap: true,
  esbuildPlugins: [
    sassPlugin({
      loadPaths: [srcPath],
      transform: postcssModules({}),
    }),
  ],
})
