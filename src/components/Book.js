import React from 'react'
import {changeShelf} from '../actions'
import {connect} from "react-redux";

class Book extends React.Component {

    render() {
        const {title, author, shelf} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: this.props.width,
                        height: this.props.height,
                        backgroundImage: 'url("' + this.props.backgroundImageURL + '")'
                    }}/>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => {
                            this.props.changeShelf(this.props, this.props.books, e.target.value)}} value={shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBook: state.selectedBook,
        books: state.books
    };
};

export default connect(mapStateToProps, {changeShelf})(Book);
