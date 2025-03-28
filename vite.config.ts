import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://kambaz-node-server-app-faye-cb2f496bc692.herokuapp.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})