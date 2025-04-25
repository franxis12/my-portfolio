import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Reemplaza esto con el nombre de tu repositorio
const repoName = 'my-portfolio'

export default defineConfig({
  base: `/${repoName}/`, // ← Esto es lo importante para GitHub Pages
  plugins: [react()],
})