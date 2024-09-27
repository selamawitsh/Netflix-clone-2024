import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Netflix-clone-2024/' // Ensure this matches your GitHub repo name
});
