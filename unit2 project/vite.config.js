import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Vite had to be tweaked to work with GitHub Pages
// changed base to same as repo name to make correct asset loading
//  build to 'docs' folder for GitHub Pages, as using "main" didn't work
// rollup to 'index.html' to ensure that it is the main point. this also was to fix the issue.


export default defineConfig({
  base: '/project-final-unit-1-ben-j/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  }
})
