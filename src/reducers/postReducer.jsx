//any actions commited
import { FETCH_BOOKS, SEARCHED_FIELD } from '../actions/types'

const initialState = {
    books: [],
    book: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS: 
            return {
                ...state,
                books: action.payload
            }
        default: return state;
    }
}