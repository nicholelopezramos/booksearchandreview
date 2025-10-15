import { fetchBooks } from './apiConnector.js';
import { renderBookList } from './bookList.js';
import Fuse from 'fuse.js'; 


export function initSearchController() {
    const form = document.querySelector('#search-form');
    const input = form ? form.querySelector('input[type="text"]') : null;

    if (!form || !input) {
        console.error("SearchController failed to initialize: Missing #search-form or #search-input element in HTML.");
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const query = input.value.trim();
        if (!query) {
            console.warn("Search attempted with an empty query.");
            return;
        }

        console.log(`Starting search for query: "${query}"`);

        try {
            const books = await fetchBooks(query); // ✅ fetchBooks returns the array directly
            console.log(`Search complete. Found ${books.length} books.`);

            // 🔍 Fuzzy match the query against book titles and authors
            const fuse = new Fuse(books, {
                keys: ['title', 'author_name'],
                threshold: 0.4 // Lower = stricter match
            });

            const fuzzyResults = fuse.search(query).map(result => result.item);
            console.log(`Fuzzy matched ${fuzzyResults.length} books.`);

            renderBookList(fuzzyResults);

        } catch (error) {
            console.error("An error occurred during the book search:", error);
            renderBookList([]);
        }
    });

    console.log("SearchController initialized and form listener attached.");
}
