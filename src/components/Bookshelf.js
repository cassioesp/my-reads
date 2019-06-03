import React from 'react'
import Book from "./Book";

class Bookshelf extends React.Component {

    onChangeShelf = (id, shelf) => {
        let book = this.props.books.find((book) => book.id === id);
        this.props.onChangeShelf(book, shelf);
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.map((book) => {
                                return (
                                    <li key={book.id}>
                                        <Book
                                            id={book.id}
                                            title={book.title}
                                            author={book.authors[0]}
                                            shelf={book.shelf}
                                            backgroundImageURL={book.imageLinks.thumbnail}
                                            width={128}
                                            height={193}
                                            onChangeShelf={this.onChangeShelf}/>
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

export default Bookshelf
