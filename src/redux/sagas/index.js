import {all} from 'redux-saga/effects'
import lostForm from './lostForm'

export default function* rootSaga(){
    yield all([
        lostForm()
    ]);
}