import { createBookTemplate } from './bookTemplate.js';

export function renderBookList(books) {
    const container = document.querySelector('#results');
    container.innerHTML = '';

    if (books.length === 0) {
        container.innerHTML = '<p>No books found.</p>';
        return;
    }

    books.forEach(book => {
        const html = createBookTemplate(book);
        container.insertAdjacentHTML('beforeend', html);
    });
}
