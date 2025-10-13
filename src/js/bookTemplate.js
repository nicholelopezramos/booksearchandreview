export function createBookTemplate(book) {
    const title = book.title || 'Untitled';
    const author = book.author_name?.join(', ') || 'Unknown Author';
    const year = book.first_publish_year || 'N/A';

    return `
    <div class="book-card">
      <h3>${title}</h3>
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>Published:</strong> ${year}</p>
    </div>
  `;
}
