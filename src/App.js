import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfList from "./components/BookshelfList";

class BooksApp extends React.Component {

    state = {
        books: [],
        showSearchPage: false
    };

    componentDidMount() {
        BooksAPI.getAll().then(
            books => this.setState({books})
        )
    }

    render() {

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
                        <BookshelfList books={this.state.books}/>
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