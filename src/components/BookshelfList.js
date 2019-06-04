import React from 'react'
import Bookshelf from "./Bookshelf";
import {connect} from "react-redux";

class BookshelfList extends React.Component {

    bookshelfs = [
        "Currently Reading",
        "Want to Read",
        "Read"
    ];

    filters = [
        "currentlyReading",
        "wantToRead",
        "read"
    ];

    render() {
        return (
            <div className="list-books-content">
                <div>
                    <Bookshelf title={this.bookshelfs[0]} filter={this.filters[0]}/>
                    <Bookshelf title={this.bookshelfs[1]} filter={this.filters[1]}/>
                    <Bookshelf title={this.bookshelfs[2]} filter={this.filters[2]}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {books: state.books};
};


export default connect(mapStateToProps)(BookshelfList)