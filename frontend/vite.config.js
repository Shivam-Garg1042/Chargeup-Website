
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow all hosts, equivalent to 0.0.0.0
    port: 5173, // Default Vite port
  },
})

