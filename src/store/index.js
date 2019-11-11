import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import reducer from './reducer ';
// import mySaga from './sagas'

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// sagaMiddleware.run(mySaga)

export default store;
