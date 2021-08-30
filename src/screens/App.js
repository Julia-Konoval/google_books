import React from 'react'
import Library from './Library'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(() => [], {}, applyMiddleware());

const App = ()  => {
  return (
    <Provider store={store}>
    <div>
    <Library />
    </div>
    </Provider>
  );
}

export default App;
