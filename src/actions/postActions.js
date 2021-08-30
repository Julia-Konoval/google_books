import { FETCH_BOOKS, SEARCHED_FIELD } from './types'
import axios from 'axios'

export const fetchBooks = () => dispatch => {
    console.log("fetch", )
    const response = axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=`+ SEARCHED_FIELD
          )
        console.log(response.data)
        if(response.status === 200) {
            (books => 
                dispatch({ 
                    type: FETCH_BOOKS,
                    payload: books
                }))
                // setBooks(response.data.items)  
        } else throw new Error (response.status)
        }
    
