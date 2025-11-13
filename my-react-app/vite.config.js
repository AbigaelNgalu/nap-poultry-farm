import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Exposes server to Codespaces
    port: 5173,        // Changed port to 5174
    strictPort: true   // Prevents auto-switching to another port
  },
})



