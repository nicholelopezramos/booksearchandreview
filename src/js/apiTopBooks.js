const BESTSELLER_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const API_KEY = 'pq4GKCgzy9O9IdKZ4SVUvcnNwR4FnPTm'; // Your actual key

export async function fetchTopBooks() {
    const url = `${BESTSELLER_URL}?api-key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("NYT API raw response:", data);

        // ✅ Check if results and books exist
        if (data && data.results && Array.isArray(data.results.books)) {
            return data.results.books;
        } else {
            console.warn("Unexpected response structure:", data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching top books:', error);
        return [];
    }
}
