import React from 'react'
import './App.css'
import {connect} from "react-redux";
import BookshelfList from "../components/BookshelfList";
import SearchBooks from "../components/SearchBooks";
import {showSearchPage} from "../actions";

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                {this.props.searchPage ? (
                    <SearchBooks/>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookshelfList/>
                        <div className="open-search">
                            <button onClick={() => {
                                this.props.showSearchPage(true)
                            }}>Add a book
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {searchPage: state.searchPage}
};

export default connect(mapStateToProps, {showSearchPage})(BooksApp)