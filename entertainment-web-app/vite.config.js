import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, 
    strictPort: true, 
    origin: "https://5173-godinhoweve-entertainme-1pzzksy5o2l.ws-eu118.gitpod.io", 
  }
})
