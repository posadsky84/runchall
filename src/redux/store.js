import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import listReducer from './list-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const reducers = combineReducers({
  list: listReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;