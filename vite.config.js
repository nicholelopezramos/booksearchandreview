// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // CRITICAL: Sets the base URL for the build output to relative paths (e.g., ./assets/)
    base: './',
    resolve: {
        // This allows Vite to resolve modules like 'fuse.js' correctly
        // by searching in the 'node_modules' folder.
        mainFields: ['module', 'jsnext:main', 'jsnext'],
    }
});