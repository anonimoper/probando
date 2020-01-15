import {takeLatest, put, call} from 'redux-saga/effects'
import {ADD_LOST_START, ADD_LOST_COMPLETE, ADD_LOST_ERROR} from '../../consts/actionTypes'

export function *addLost({payload}){

    try{
        console.log("Estoy llegando");
        console.log(payload);
        yield new Promise(resolve => {
            setTimeout(() => {
              resolve(5);
            }, 5000);
          })
        
        let objeto = {result: "coca"}
          yield put({type: ADD_LOST_COMPLETE, objeto});
        // const result = yield call()
    }catch(error){

    }
}

export default function* addForms(){
    yield takeLatest(ADD_LOST_START, addLost);
}