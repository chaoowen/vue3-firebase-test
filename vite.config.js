import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: '127.0.0.1',
    // https: false,
    // cors: true,
    // open: true,
    port: '6001',
    watch: {
      usePolling: true
    },
    // hmr: {
    //   protocol: 'ws',
    //   host: 'localhost'
    // }         // 啟用熱更新
  },
  plugins: [vue()]
})
