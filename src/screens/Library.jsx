import React, { useState } from 'react'
import axios from 'axios'
import './Library.styles.css'
import libraryIMG from '../images/library.svg'
import Book from './components/Book.component.tsx'

const Library = () => {
const key = 'AIzaSyC4hmFXxCHutRL--GW4gP0Th9rv_xPiM38'
const [books, setBooks] = useState([]);


async function fetchData () {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
  )
  console.log(response.data)
    if(response.status === 200) {
        setBooks(response.data.items)  
    } else throw new Error (response.status)
}
console.log('data', books)

return(
  <div className='container'>
    <div className='booksearch-container'>
    <p id='title'>Books</p>
    <img className='library-img' src={libraryIMG} alt='library' />
    <button className='button' onClick={fetchData}>Search books</button>
    </div>
    <div className='bookRow'>
    {books.length > 0 && books.map((book) => (
      <Book {...{book}} key={`book${book.id}`}/>
    ))}
    </div>
  </div>
)
}

export default Library