import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import postcssPresetEnv from 'postcss-preset-env';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'layouts': fileURLToPath(new URL('./src/layouts', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv()
      ]
    }
  }
})
