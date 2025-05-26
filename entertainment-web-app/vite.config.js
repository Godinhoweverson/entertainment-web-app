import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, 
    strictPort: true, 
    origin: "5173-godinhoweve-entertainme-1pzzksy5o2l.ws-us118.gitpod.io",
    allowedHosts: [
      "5173-godinhoweve-entertainme-ri4qhj9fplg.ws-eu119.gitpod.io"
      ] 
  }
})
