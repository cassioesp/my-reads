import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from "./components/Bookshelf";

class BooksApp extends React.Component {

    state = {
        books: [],
        showSearchPage: false
    };

    bookshelfs = [
        "Currently Reading",
        "Want to Read",
        "Read"
    ];

    componentDidMount() {
        BooksAPI.getAll().then(
            books => this.setState({books})
        )
    }


    render() {
        let currentlyReadingBooks = this.state.books.filter(function (book) {
            return book.shelf === 'currentlyReading'
        });

        let wantToReadBooks = this.state.books.filter(function (book) {
            return book.shelf === 'wantToRead'
        });

        let readBooks = this.state.books.filter(function (book) {
            return book.shelf === 'read'
        });

        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button className="close-search"
                                    onClick={() => this.setState({showSearchPage: false})}>Close
                            </button>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author"/>
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Bookshelf title={this.bookshelfs[0]} books={currentlyReadingBooks}/>
                                <Bookshelf title={this.bookshelfs[1]} books={wantToReadBooks}/>
                                <Bookshelf title={this.bookshelfs[2]} books={readBooks}/>
                            </div>
                        </div>
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