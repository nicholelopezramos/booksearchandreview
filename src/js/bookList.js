import { bookTemplate } from './bookTemplate.js';

export const renderBookList = (books) => {
    console.log("Type of books:", typeof books);
    console.log("Is array:", Array.isArray(books));

    console.log("Books received for rendering:", books);

    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (!books || books.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No books found.</p>';
        return;
    }

    const validBooks = books.filter(book => book); // Remove undefined/null
    console.log("Valid books:", validBooks);

    const booksHtml = validBooks.map(book => bookTemplate(book)).join('');
    resultsContainer.innerHTML = `<div class="book-list-grid">${booksHtml}</div>`;
};
