
import { getLocalStorage, setLocalStorage } from './utils.js';

const READING_LIST_KEY = 'bookAggregatorReadingList';

/** Initializes the reading list and attaches event listeners. */
export function initReadingList() {
    // Logic to attach listeners to "Add to List" buttons
    // ...
}

/** Adds a book to the local reading list. */
export const addBookToReadingList = (bookKey) => {
    const list = getLocalStorage(READING_LIST_KEY);
    if (!list.includes(bookKey)) {
        list.push(bookKey);
        setLocalStorage(READING_LIST_KEY, list);
        console.log(`Added book ${bookKey} to reading list.`);
    }
};

// Add functions for removing, retrieving, and rendering the list page