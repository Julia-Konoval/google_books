import React from 'react'
import './Book.styles.css'

const Book = ({ book }) => {
    console.log('book', book)
    const { volumeInfo: { title, subtitle, authors,
         imageLinks: { smallThumbnail } } } = book;

    return (
        <div className='container'>
            <div className='bookCard'>
            <img src={smallThumbnail} />
            <p id='bookTitle'>{title}</p>
            <p id='authors'>{authors}</p>
            <p>{subtitle}</p>
            </div>
        </div>
    )
}
export default Book