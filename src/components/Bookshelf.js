import React from 'react'
import Book from "./Book";

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book
                                        author={book.authors[0]}
                                        title={book.title}
                                        backgroundImageURL={book.imageLinks.thumbnail}
                                        width={128}
                                        height={193}/>
                                </li>
                            )
                        }
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf
