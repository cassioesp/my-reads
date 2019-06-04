export default (searchedBooks = [], action) => {
    if (action.type === 'SEARCH_BOOKS') {
        if (action.payload.error) {
            return [];
        } else {
            return action.payload
        }
    }
    return searchedBooks;
}