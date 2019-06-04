import React from 'react'
import Book from "./Book";
import {connect} from "react-redux";
import {searchBooks, searchTerm, showSearchPage} from "../actions";

class SearchBooks extends React.Component {

    searchBooks = event => {
        event.preventDefault();
        this.props.searchBooks(this.props.term)
    };

    render() {
        const {searchedBooks} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search"
                            onClick={() => this.props.showSearchPage(false)}>Close
                    </button>
                    <form onSubmit={this.searchBooks}>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                                   onChange={e => this.props.searchTerm(e.target.value)}/>
                        </div>
                    </form>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(searchedBooks.length === 0) && <p>No Books Found!</p>}
                        {searchedBooks && searchedBooks.length > 0 && searchedBooks.map((book) => {
                                return (
                                    <li key={book.id}>
                                        <Book
                                            id={book.id}
                                            title={book.title}
                                            author={book.authors && book.authors[0]}
                                            backgroundImageURL={book.imageLinks.thumbnail}
                                            width={128}
                                            height={193}
                                        />
                                    </li>
                                )
                            }
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        term: state.term,
        searchedBooks: state.searchedBooks
    }
};

export default connect(mapStateToProps, {showSearchPage, searchTerm, searchBooks})(SearchBooks)