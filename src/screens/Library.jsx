import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import "./Library.styles.css";
import libraryIMG from "../images/library.svg";
import { LOAD_BOOKS } from "../redux/actions/actionTypes";
import Book from "./components/Book.component";

const Library = connect(
  null,
  null
)(() => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.appReducer.books);

  const [searchedField, setSearchedField] = useState("");

  const handleChange = (text) => {
    setSearchedField(text.target.value);
  };

  return (
    <div className="container">
      <div className="booksearch-container">
        <p id="title">Books</p>
        <img className="library-img" src={libraryIMG} alt="library" />
        <input
          value={searchedField}
          onChange={handleChange}
          placeholder="Type here..."
          className="book_input_search"
          type="search"
        />
        <button
          className="button"
          onClick={() => {
            dispatch({
              type: LOAD_BOOKS,
              payload: searchedField,
            });
          }}
        >
          Search books
        </button>
      </div>
      <div className="bookRow">
        {books.length > 0 &&
          books.map((book) => <Book {...{ book }} key={`book${book.id}`} />)}
      </div>
    </div>
  );
});
export default Library;
