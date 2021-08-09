import React, { useState } from 'react'
import axios from 'axios'
import './Library.styles.css'
import libraryIMG from '../images/library.svg'

const Library = () => {
const key = 'AIzaSyC4hmFXxCHutRL--GW4gP0Th9rv_xPiM38'
const [data, setData] = useState({books: []})

async function fetchData () {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
  )
    console.log(response.data)
    setData(response.data)  
}

return(
  <div className='container'>
    <div className='booksearch-container'>
    <p id='title'>Books</p>
    <img className='library-img' src={libraryIMG} alt='library' />
    <button className='button' onClick={fetchData}>Search books</button>
    </div>
  </div>
)
}

export default Library