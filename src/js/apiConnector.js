// src/js/apiConnector.js

// --- 1. Open Library (OL) Constants ---
const OL_BASE_URL = 'https://openlibrary.org';

// --- 2. New York Times (NYT) Constants ---
const NYT_API_KEY = 'YOUR_ACTUAL_NYT_API_KEY_HERE';
const NYT_BASE_URL = 'https://api.nytimes.com/svc/books/v3';

// --- 3. Generic Fetch Handler ---
async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error.message);
        throw error;
    }
}

// --- 4. Open Library Search Function ---
export async function fetchBooks(query) {
    const url = `${OL_BASE_URL}/search.json?q=${encodeURIComponent(query)}`;
    console.log('FINAL OL API URL:', url);

    try {
        const data = await fetchData(url);

        // 🔍 Add this line to inspect the full API response
        console.log("Raw Open Library response:", data);

        const books = data.docs || [];
        console.log("Books fetched:", books);
        return books;
    } catch (error) {
        console.error("Open Library search failed:", error);
        return [];
    }
}



// --- 5. New York Times Review Function ---
export async function fetchNYTReviews(title) {
    const url = `${NYT_BASE_URL}/reviews.json?title=${encodeURIComponent(title)}&api-key=${NYT_API_KEY}`;
    console.log('FINAL NYT API URL:', url);

    if (NYT_API_KEY === 'YOUR_ACTUAL_NYT_API_KEY_HERE') {
        console.warn("NYT API key is missing. Cannot fetch reviews.");
        return [];
    }

    try {
        const data = await fetchData(url);
        const reviews = data.results || [];
        console.log("Reviews fetched:", reviews);
        return reviews;
    } catch (error) {
        console.error("NYT Review fetch failed:", error);
        return [];
    }
}
