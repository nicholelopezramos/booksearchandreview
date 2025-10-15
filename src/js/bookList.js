export function renderBookList(books) {
    const container = document.getElementById('search-results');
    container.innerHTML = ''; // Clear previous results

    if (!books || books.length === 0) {
        container.innerHTML = '<p class="no-results">No books found.</p>';
        return;
    }

    const validBooks = books.filter(book => book); // Remove undefined/null

    validBooks.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book-card');

        const coverId = book.cover_i;
        const coverUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
            : 'src/images/placeholder.png'; // fallback image

        div.innerHTML = `
            <img src="${coverUrl}" alt="Cover of ${book.title}" class="book-cover" />
            <div class="book-info">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author_name?.join(', ') || 'Unknown'}</p>
                <p><strong>First Published:</strong> ${book.first_publish_year || 'N/A'}</p>
            </div>
        `;
        container.appendChild(div);
    });
}
