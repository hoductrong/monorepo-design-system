import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    sourcemap: true,
    target: 'es2020',
  },
  plugins: [react(),dts({
    skipDiagnostics: false,
  })],
  publicDir: false,
});
