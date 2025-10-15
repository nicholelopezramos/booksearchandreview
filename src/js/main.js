import { initSearchController } from './searchController.js';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js';

window.Fuse = Fuse; // Make Fuse globally available to searchController.js if needed

function initApp() {
    const path = window.location.pathname;
    console.log("App initialized. Current path:", path);

    if (path.includes('index') || path === '/' || path === '/booksearchandreview/') {
        console.log("SearchController initialized.");
        initSearchController();
    } else {
        console.error("404: No controller found for path:", path);
    }
}

window.addEventListener('DOMContentLoaded', initApp);
console.log('Main application script loaded.');
