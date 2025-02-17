/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import glsl from 'vite-plugin-glsl'; // GLSL plugin
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), glsl()], // Add GLSL plugin
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'], // Ensure GLSL files are included
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup-test-env.ts'],
  },
});
