/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://www.bortakvall.se/api/v2', // The actual API endpoint
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path if needed
            },
        },
    },
});