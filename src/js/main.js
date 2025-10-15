import { initSearchController } from './searchController.js';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js';
import { fetchTopBooks } from './apiTopBooks.js';

window.Fuse = Fuse;

async function showTopBooks() {
    const container = document.getElementById('top-books');
    if (!container) return;

    const books = await fetchTopBooks();
    if (!books || books.length === 0) {
        container.innerHTML += `<p>No top books available at the moment.</p>`;
        return;
    }

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book-card');

        const isbn = book.primary_isbn13;
        const coverUrl = isbn
            ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
            : 'src/images/placeholder.png';

        div.innerHTML = `
            <img src="${coverUrl}" alt="Cover of ${book.title}" class="book-cover" />
            <div class="book-info">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p>${book.description}</p>
            </div>
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
        showTopBooks(); // ✅ Call this here
    } else {
        console.error("404: No controller found for path:", path);
    }
}

window.addEventListener('DOMContentLoaded', initApp);
console.log('Main application script loaded.');
