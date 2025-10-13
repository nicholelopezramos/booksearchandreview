import { fetchBooks } from './apiConnector.js';
import { renderBookList } from './bookList.js';

export function initSearchController() {
    const form = document.querySelector('#searchForm');
    const input = document.querySelector('#searchInput');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (!query) return;

        const books = await fetchBooks(query);
        renderBookList(books);
    });
}
