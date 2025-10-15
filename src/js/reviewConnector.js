const API_KEY = 'YOUR_NYT_API_KEY';
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/reviews.json';

export async function fetchReviews(title) {
    const url = `${BASE_URL}?title=${encodeURIComponent(title)}&api-key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
}
