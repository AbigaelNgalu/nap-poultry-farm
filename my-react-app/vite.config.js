import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // 👈 allows external access (needed for Codespaces)
    port: 5173,      // optional: keep or change if you like
    strictPort: true // optional: prevents random fallback ports
  },
})
