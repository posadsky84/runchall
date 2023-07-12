import { takeEvery, all, put } from 'redux-saga/effects';
import { GET_LIST, setList } from './list-reducer';
import { API } from '../api';


function* workerGetList() {
  const data = yield API.getList().then(response => response.data);
  yield put(setList(data));
}

function* watcherGetList() {
  yield takeEvery(GET_LIST, workerGetList);
}

export default function* rootSaga() {
  yield all([
    watcherGetList(),
  ])
};
