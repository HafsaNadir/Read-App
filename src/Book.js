import React, { Component } from "react"
export default class Books extends Component {

    render() {
        const { book, updateShelf } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        {book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>}
                        <div className="book-shelf-changer">
                            <select
                                className = 'browser-default'
                                onChange={(event) => updateShelf(book, event.target.value)}
                                value={book.shelf}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}