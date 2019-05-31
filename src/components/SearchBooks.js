import React from 'react'
import Book from "./Book";

class SearchBooks extends React.Component {

    state = {
        term: ''
    };

    hideSearchPage = () => {
        this.props.showSearchPage(false);
    };

    onSearchSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };

    render() {
        const {searchedBooks} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search"
                            onClick={this.hideSearchPage}>Close
                    </button>
                    <form onSubmit={this.onSearchSubmit}>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                                   onChange={e => this.setState({term: e.target.value})}/>
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

export default SearchBooks