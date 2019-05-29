import React from 'react'


class Book extends React.Component {

    onChangeShelf = (e) => {
        this.props.onChangeShelf(this.props.id, e.target.value);
    };

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
                        <select onChange={this.onChangeShelf} value={shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        )
    }
}

export default Book
