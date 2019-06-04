export default (selectedBook = null, action) => {
    if (action.type === 'BOOKSHELF_SELECTED') {
        return action.payload.books.map((item, index) => {
            // Find the item with the matching id
            if (item.id === action.payload.selectedBook.id) {
                // Return a new object
                return {
                    ...item,  // copy the existing item
                    ...action.payload.selectedShelf
                }
            }
            return action.payload;
        })
    }
    return selectedBook;
};