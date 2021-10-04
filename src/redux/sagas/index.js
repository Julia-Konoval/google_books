import createSagaMiddleware from "@redux-saga/core";
import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import { LOAD_BOOKS, SET_BOOKS } from "../actions/actionTypes";

async function getBooks(searchedField) {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=` + searchedField
  );
  if (response.status === 200) {
    return response.data.items;
  } else throw new Error(response.status);
}

function* sagaWorker({ payload }) {
  const loadBooks = yield call(getBooks, payload);
  yield put({ type: SET_BOOKS, payload: loadBooks });
}

export function* sagaWatcher() {
  yield takeEvery(LOAD_BOOKS, sagaWorker);
}

export const sagaMiddleware = createSagaMiddleware(sagaWatcher);
