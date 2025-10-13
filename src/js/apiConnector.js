export async function fetchBooks(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.docs || [];
    } catch (error) {
        console.error("API fetch failed:", error);
        return [];
    }
}
