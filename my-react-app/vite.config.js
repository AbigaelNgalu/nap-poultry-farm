import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 👈 required for Codespaces
    port: 5173,        // 👈 force to use this port
    strictPort: true   // 👈 don’t switch to 5174 automatically
  },
})



