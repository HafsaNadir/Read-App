import React from 'react'
import './App.css'
import { SearchScreen } from './SearchScreen';
import { MainScreen } from './MainScreen'
import { Route, BrowserRouter } from "react-router-dom"
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { books: [], result: [] }
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(data => this.setState({ books: data }))
  }

  searchBooks = (query) => {
    BooksAPI.search(query.trim(), 20)
      .then(data => {
        if (data.length > 0) {
          this.setState({
            result: data
          })
        }
        else
          this.setState({
            result: []
          })
      }
      )
      .catch(error => {
        console.log(error);
        this.setState({ result: [] })
      })
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(BooksAPI.getAll()
        .then(data => this.setState({ books: data })))
  }

  render() {
    const { books, result } = this.state
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => <MainScreen
              books={books}
              updateShelf={(book, shelf) => this.updateShelf(book, shelf)}
            />}
          />
          <Route
            path="/search"
            render={() => <SearchScreen
              result={result}
              searchBooks={(query) => this.searchBooks(query)}
              updateShelf={(book, shelf) => this.updateShelf(book, shelf)}
            />}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
