import  { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() ],
  preview: {
    allowedHosts: ['localhost', '127.0.0.1', 'cine-ai-l97c.onrender.com', '.onrender.com']
  }
})
