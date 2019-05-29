import React from 'react'
import Bookshelf from "./Bookshelf";


class BookshelfList extends React.Component {

    bookshelfs = [
        "Currently Reading",
        "Want to Read",
        "Read"
    ];

    currentlyReadingBooks() {
        return this.props.books.filter(function (book) {
            return book.shelf === 'currentlyReading'
        });
    }

    wantToReadBooks() {
        return this.props.books.filter(function (book) {
            return book.shelf === 'wantToRead'
        });
    }

    readBooks() {
        return this.props.books.filter(function (book) {
            return book.shelf === 'read'
        });
    }

    render() {
        return (
            <div className="list-books-content">
                <div>
                    <Bookshelf title={this.bookshelfs[0]} books={this.currentlyReadingBooks()}/>
                    <Bookshelf title={this.bookshelfs[1]} books={this.wantToReadBooks()}/>
                    <Bookshelf title={this.bookshelfs[2]} books={this.readBooks()}/>
                </div>
            </div>
        )
    }
}

export default BookshelfList