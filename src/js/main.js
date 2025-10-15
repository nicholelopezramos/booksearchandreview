// 1. Module Imports
// -----------------------------------------------------------
// We import the specific controller needed for the main page view (search).
import { initSearchController } from './searchController.js';
// import { initBookDetailController } from './BookDetailController.js'; 
// import { initReadingListController } from './ReadingList.js'; 

// -----------------------------------------------------------
// 2. Core Application Logic (Router)
// -----------------------------------------------------------

/**
 * The main function to initialize the application.
 * In a simple single-page application (SPA) like this, we check the URL
 * path to determine which controller to initialize.
 */
function initApp() {
    // Get the current path from the URL
    const path = window.location.pathname;

    console.log("App initialized. Current path:", path);

    // --- Basic Client-Side Routing ---
    // Since we only have one main view right now, we always initialize the search controller.
    // As you expand, you'll add more cases here:

    // Default route: / (Search Page)
    if (path.includes('index') || path === '/' || path === '/booksearchandreview/') {
        console.log("SearchController initialized.");

        initSearchController();
        // Future controllers for /details/id or /reading-list would go here.
    } else {
        // Simple error handling for unknown paths
        console.error("404: No controller found for path:", path);
    }
}


// -----------------------------------------------------------
// 3. Execution
// -----------------------------------------------------------

// We use the DOMContentLoaded event to ensure the HTML structure is fully loaded
// before trying to access any elements (like the search form).
window.addEventListener('DOMContentLoaded', initApp);

console.log('Main application script loaded.');