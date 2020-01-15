import {ADD_LOST_START, ADD_LOST_COMPLETE, ADD_LOST_ERROR} from '../../consts/actionTypes'

const initialState = {loading:false}

export default (state = initialState, action) => {

    switch(action.type){
        case ADD_LOST_START:
            return {...state, loading: true};
        case ADD_LOST_COMPLETE:        
            return {...state, loading: false, result: action.objeto.result};
        case ADD_LOST_ERROR:
            return {...state, loading: false, result: null, error: action.error};
        default:
            return {...state};
    }
}