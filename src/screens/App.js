import React from 'react'
import Library from './Library'
import { Provider } from 'react-redux'
import store from '../redux/store'

const App = ()  => {
  return (
    <Provider store={store}>
    <Library />
    </Provider>
  );
}

export default App;
