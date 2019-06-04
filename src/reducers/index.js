import {combineReducers} from 'redux';
import BooksReducer from '../reducers/BooksReducer'
import ShowSearchPageReducer from '../reducers/ShowSearchPageReducer'
import SearchTermReducer from "./SearchTermReducer";
import SearchedBooksReducer from "./SearchedBooksReducer";

export default combineReducers({
    books: BooksReducer,
    searchPage: ShowSearchPageReducer,
    searchedBooks: SearchedBooksReducer,
    term: SearchTermReducer
});