export default (books = [], action) => {
    if (action.type === 'FETCH_BOOKS') {
        return action.payload;
    } else if (action.type === 'BOOKSHELF_SELECTED') {
        return books.map((item) => {
            // Find the item with the matching id
            if (item.id === action.payload.selectedBook.id) {
                // Return a new object
                return {
                    ...item,  // copy the existing item
                    shelf: action.payload.selectedShelf
                }
            }
            return item;
        })
    }
    return books;
}