// src/js/bookTemplate.js

// Generates the HTML string for a book item in the search results list
export const bookTemplate = (book) => {
    // Open Library data uses 'title' and 'author_name' (an array)
    const title = book.title || 'Untitled Book';
    const author = book.author_name ? book.author_name[0] : 'Unknown Author';
    const coverId = book.cover_i; // The ID needed to get the cover image

    // Create the cover image URL (Open Library's smallest size)
    const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-S.jpg`
        : 'https://via.placeholder.com/80x120?text=No+Cover';

    return `
        <div class="book-item">
            <img src="${coverUrl}" alt="Cover image for ${title}">
            <div class="book-info">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">by ${author}</p>
                <button data-key="${book.key}" class="btn-details">View Details</button>
            </div>
        </div>
    `;
};