import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // This allows access from other devices on your network
    port: 3000, // Custom port number
    strictPort: true, // Ensures Vite uses exactly this port or fails
    open: true, // Automatically opens the browser when starting the server
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Reduce chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other large dependencies here if needed
        },
      },
    },
  },
});