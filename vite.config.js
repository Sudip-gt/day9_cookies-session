import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',        // Set project root (default is '.')
  base: './Sudip-gt/day9_cookies-session',        // Use relative paths for assets (important for deployment)
  build: {
    outDir: 'dist',       // Output directory for build
    emptyOutDir: true,    // Clean output directory before each build
  },
  server: {
    open: true,     // Automatically open browser on `vite` dev server start
  },
})