import { initSearchController } from './searchController.js';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js';
import { fetchTopBooks } from './apiTopBooks.js';

window.Fuse = Fuse; // Make Fuse globally available to searchController.js if needed

async function showTopBooks() {
    const container = document.getElementById('top-books');
    if (!container) return;

    const books = await fetchTopBooks();
    if (books.length === 0) {
        container.innerHTML += `<p>No top books available at the moment.</p>`;
        return;
    }

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.description}</p>
        `;
        container.appendChild(div);
    });
}

function initApp() {
    const path = window.location.pathname;
    console.log("App initialized. Current path:", path);

    if (path.includes('index') || path === '/' || path === '/booksearchandreview/') {
        console.log("SearchController initialized.");
        initSearchController();
        showTopBooks(); // ✅ Call it here once DOM is ready
    } else {
        console.error("404: No controller found for path:", path);
    }
}

window.addEventListener('DOMContentLoaded', initApp);
console.log('Main application script loaded.');
