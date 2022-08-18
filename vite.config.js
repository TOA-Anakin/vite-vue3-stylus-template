import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { importStylus } from './vite-stylus-import-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), {
    ...importStylus(),
    enforce: 'pre',
  }]
})