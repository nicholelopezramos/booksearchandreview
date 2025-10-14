// 1. Module Imports
// -----------------------------------------------------------
// Assuming fetchBooks is the function that handles API calls in apiConnector.js
import { fetchBooks } from './apiConnector.js';
// Assuming renderBookList is the function that handles rendering the results
import { renderBookList } from './bookList.js';

// -----------------------------------------------------------
// 2. Controller Initialization
// -----------------------------------------------------------

/**
 * Initializes the search functionality by attaching an event listener
 * to the search form.
 */
export function initSearchController() {
    // CRITICAL FIX: Use the IDs from your index.html (search-form and search-input)
    const form = document.querySelector('#search-form');
    const input = document.querySelector('#search-input');

    // Simple check to ensure required elements exist before attaching listeners
    if (!form || !input) {
        console.error("SearchController failed to initialize: Missing #search-form or #search-input element in HTML.");
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const query = input.value.trim();

        // Prevent searching if the input is empty
        if (!query) {
            console.warn("Search attempted with an empty query.");
            return;
        }

        console.log(`Starting search for query: "${query}"`);

        try {
            // 1. Fetch data from the API
            const searchResults = await fetchBooks(query);

            // Open Library returns results in the 'docs' property
            const books = searchResults.docs || [];

            console.log(`Search complete. Found ${books.length} books.`);

            // 2. Pass the array of books to the rendering module
            renderBookList(books);

            // Optional: Clear input after successful search
            // input.value = '';

        } catch (error) {
            // Robust error handling
            console.error("An error occurred during the book search:", error);
            // Future improvement: You can call a utility function here to display the error to the user on the screen.
            renderBookList([]); // Clear previous results on error
        }
    });

    console.log("SearchController initialized and form listener attached.");
}
