import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducers from './reducers';

// redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

// run saga
sagaMiddleware.run(rootSaga);

export default store;
