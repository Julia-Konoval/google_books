import { combineReducers } from "redux";

const initialValue = {
  books: [],
};

export function appReducer(state = initialValue, action) {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  appReducer,
});
