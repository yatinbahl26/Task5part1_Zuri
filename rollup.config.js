// rollup.config.js

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js', // Your entry point
  output: {
    dir: 'dist',
    format: 'es',
    // Other output options...
    manualChunks: {
      // Define your manual chunks here
      // Syntax: 'chunkName': ['dependency1', 'dependency2'],
      // Example:
      vendor: ['lodash'],
      utilities: ['util.js'],
    },
  },
  plugins: [
    commonjs(),
    resolve(),
    // Other plugins...
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Set a higher limit (in kB) if needed
  },
};
