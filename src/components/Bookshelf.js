import React, {Component} from 'react';
import Book from "./Book";
import {connect} from "react-redux";
import {fetchBooks} from "../actions";

class Bookshelf extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    renderBooks() {
        return this.props.books.filter(book => {
            return book.shelf === this.props.filter
        }).map((book) => {
                return (
                    <li key={book.id}>
                        <Book
                            id={book.id}
                            title={book.title}
                            author={book.authors[0]}
                            shelf={book.shelf}
                            backgroundImageURL={book.imageLinks.thumbnail}
                            width={128}
                            height={193}/>
                    </li>
                )
            }
        )
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.renderBooks()}
                    </ol>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {books: state.books};
};


export default connect(mapStateToProps, {fetchBooks})(Bookshelf);
