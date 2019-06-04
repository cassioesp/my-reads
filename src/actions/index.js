import * as BooksAPI from '../apis/BooksAPI'

export const changeShelf = (selectedBook, books, selectedShelf) => async dispatch => {
    dispatch({
        type: 'BOOKSHELF_SELECTED',
        payload: {
            selectedBook: selectedBook,
            selectedShelf: selectedShelf
        }
    });
    await BooksAPI.update(selectedBook, selectedShelf);
};

export const fetchBooks = () => async dispatch => {
    const response = await BooksAPI.getAll();
    if (response) {
        dispatch({type: 'FETCH_BOOKS', payload: response})
    }
};

export const searchBooks = (query) => async dispatch => {
    const response = await BooksAPI.search(query);
    if (response) {
        dispatch({type: 'SEARCH_BOOKS', payload: response})
    }
};

export const showSearchPage = (showSearchPage) => {
    return({type: 'SHOW_SEARCH_PAGE', payload: showSearchPage})
};

export const searchTerm = (term) => {
    return ({type: 'SEARCH_TERM', payload: term})
};