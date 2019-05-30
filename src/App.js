import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfList from "./components/BookshelfList";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {

    state = {
        books: [],
        searchedBooks: [],
        showSearchPage: false
    };

    onSearchSubmit = (input) => {
        BooksAPI.search(input).then(
            searchedBooks => {
                if (searchedBooks.error) {
                    this.setState({searchedBooks: searchedBooks.items})
                } else {
                    this.setState({searchedBooks})
                }
            }
        )
    };

    showSearchPage = (flag) => {
        this.setState({
            showSearchPage: flag
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.searchedBooks)
    }

    componentDidMount() {
        BooksAPI.getAll().then(
            books => this.setState({books})
        )
    }

    onChangeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(
        )
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <SearchBooks onSearchSubmit={this.onSearchSubmit} searchedBooks={this.state.searchedBooks}
                                 showSearchPage={this.showSearchPage}/>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookshelfList books={this.state.books} onChangeShelf={this.onChangeShelf}/>
                        <div className="open-search">
                            <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp