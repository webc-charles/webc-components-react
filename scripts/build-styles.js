#!/usr/bin/env node
/**
 * Build script to compile global SCSS styles
 * This runs after tsup to generate dist/styles.css
 */

import { compile } from 'sass'
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const srcDir = resolve(rootDir, 'src')
const distDir = resolve(rootDir, 'dist')

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true })
}

console.log('📦 Compiling global styles...')

// Compile global styles
const result = compile(resolve(srcDir, 'styles/index.scss'), {
  loadPaths: [srcDir],
  style: 'expanded',
  sourceMap: true,
})

// Write styles.css
writeFileSync(resolve(distDir, 'styles.css'), result.css)
console.log('✓ dist/styles.css')

// Write source map
if (result.sourceMap) {
  writeFileSync(
    resolve(distDir, 'styles.css.map'),
    JSON.stringify(result.sourceMap)
  )
  console.log('✓ dist/styles.css.map')
}

// Create bundle.css (global + component styles combined)
const componentCss = existsSync(resolve(distDir, 'index.css'))
  ? readFileSync(resolve(distDir, 'index.css'), 'utf-8')
  : ''

const bundleCss = `/* Global styles */
${result.css}

/* Component styles */
${componentCss}
`

writeFileSync(resolve(distDir, 'bundle.css'), bundleCss)
console.log('✓ dist/bundle.css (global + components combined)')

console.log('\n✅ Style build complete!')
