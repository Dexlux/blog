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
      'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      'layouts': fileURLToPath(new URL('./src/layouts', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv()
      ]
    }
  },
  server: {
    // host: '192.168.0.45',
    // port: 8080,
    proxy: {
      // 接口地址代理
      '/api': {
        target: 'localhost:3000', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  }
})
