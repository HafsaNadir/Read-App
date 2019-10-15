import React, { Component } from "react"
import Books from "./Book"
import { Link } from "react-router-dom"
export class SearchScreen extends Component {
  render() {

    const { result, searchBooks, updateShelf } = this.props;
    for (let r of result) {
      r.shelf = "none"
    }
    const results = result.map(book => <Books book={book} key={book.id} updateShelf={updateShelf} />)
    console.log(result)
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search" >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => searchBooks(event.target.value)} />
            </div>
          </div>
          <div className="search-books-results">
            <h5 className="bookshelf-title">Search Results</h5>
            {result.length === 0 ? <div className="no-search">No Books Found</div>
              :
              <div className="search-books-results">
                <ol className="books-grid">
                  {results}
                </ol>
              </div>
            }
          </div>
        </div>
      </div>

    )
  }
}