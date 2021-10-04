import { createStore, applyMiddleware, compose } from "redux";

import { sagaMiddleware, sagaWatcher } from "./sagas";
import { rootReducer } from "./reducers/index";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaWatcher);

export default store;
