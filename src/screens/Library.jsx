import React, { useState } from 'react'
import './Library.styles.css'
import libraryIMG from '../images/library.svg'
import Book from './components/Book.component.tsx'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/postActions'

const Library = () => {
const key = 'AIzaSyC4hmFXxCHutRL--GW4gP0Th9rv_xPiM38'
// const [books, setBooks] = useState([]);
// const [searchedField, setSearchedField] = useState('');
// const [top, setTop] = useState(0)

// async function fetchData () {
//   const response = await axios.get(
//     `https://www.googleapis.com/books/v1/volumes?q=`+ searchedField
//   )
//   console.log(response.data)
//     if(response.status === 200) {
//         setBooks(response.data.items)  
//     } else throw new Error (response.status)
// }
// console.log('data', books)
useEffect(() => {
  fetchBooks()
})

const handleChange = (event) => {  
  const book = event.target.value.replace(/\s/g, '+');  
  setSearchedField(book);  
}  

return(
  <div className='container'>
    <div className='booksearch-container'>
    <p id='title'>Books</p>
    <img className='library-img' src={libraryIMG} alt='library' />
    <input placeholder="Type here..." className="book_input_search" type="text" onChange={handleChange} />
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

export default connect(null, {fetchBooks})(Library) 