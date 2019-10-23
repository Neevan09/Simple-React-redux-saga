import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST_HELLO_WORLD, receiveHelloWorld } from './actions' 

function* helloworld(action) {
   try { 
     // const user = yield call(Api.fetchUser, action.payload.userId);
      yield put(receiveHelloWorld("Hello world from Redux-saga"));
   } catch (e) {
    yield put(receiveHelloWorld("Hello world from Redux-saga"));
   }
}


export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloworld);
}
 