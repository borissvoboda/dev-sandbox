// // build.js

// import esbuild from 'esbuild';
// import { join } from 'path';

// // Define entry point and output directory
// const entryPoint = join(__dirname, 'src/index.ts');
// const outDir = join(__dirname, 'dist');

import esbuild from 'esbuild';

// Build configuration
esbuild
  .build({
    entryPoints: ['./src/index.ts'], // Entry point file
    bundle: true, // Bundle all dependencies into the output file
    platform: 'node', // Target environment is Node.js
    target: 'es6', // Target ECMAScript version
    format: 'cjs', // Output format as CommonJS
    outfile: 'dist/index.js', // Output file
    sourcemap: true, // Generate source maps (optional)
    minify: false, // Minify output (set to true for production)
    logLevel: 'info', // Log level for build process
  })
  .catch(() => process.exit(1));
