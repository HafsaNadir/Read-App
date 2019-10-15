import React, { Component } from "react"
import Books from "./Book"
import { Link } from "react-router-dom"
import logo from './icons/logo.png'

export class MainScreen extends Component {

  render() {
    const { books, updateShelf } = this.props;
    return (

      <div className="list-books">
        <header>
          <nav className="nav-wrapper #0277bd light-blue darken-3">
            <div className="container">
              <a href="#" className="brand-logo"><img src={logo} width="70" height="50" align="top" /> 
               Bookshelf
              </a>
              <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#currently">Currently Reading</a></li>
                <li><a href="#wants-to">Wants to Read</a></li>
                <li><a href="#read">Read</a></li>
              </ul>
              <ul className="sidenav #0277bd light-blue darken-3" id="mobile-menu">
                <li><a href="#currently" className="white-text">Currently Reading</a></li>
                <li><a href="#wants-to " className="white-text">Wants to Read</a></li>
                <li><a href="#read" className="white-text">Read</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="list-books-content">
          <div>
            <div className="bookshelf" id="currently">
              <h5 className="bookshelf-title">Currently Reading</h5>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.length === 0 ? <div className="no-search">No Books Found</div> :
                    books.filter(book => book.shelf === "currentlyReading").map(book => <Books book={book} key={book.id} updateShelf={updateShelf} />)}
                </ol>
              </div>
            </div>

            <div className="bookshelf" id="wants-to">
              <h5 className="bookshelf-title">Want to Read</h5>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.length === 0 ? <div className="no-search">No Books Found</div> :
                    books.filter(book => book.shelf === "wantToRead").map(book => <Books book={book} key={book.id} updateShelf={updateShelf} />)}
                </ol>
              </div>
            </div>
            <div className="bookshelf" id="read">
              <h5 className="bookshelf-title">Read</h5>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.length === 0 ? <div className="no-search">No Books Found</div> :
                    books.filter(book => book.shelf === "read").map(book => <Books book={book} key={book.id} updateShelf={updateShelf} />)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'><button>Add a book</button></Link>
        </div>
      </div>

    )
  }
}