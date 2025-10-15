export const renderBookList = (books) => {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (books.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No books found.</p>';
        return;
    }

    const booksHtml = books.map(book => bookTemplate(book)).join('');
    resultsContainer.innerHTML = `<div class="book-list-grid">${booksHtml}</div>`;
};
