import {
    LOADING_DATA,
    UPDATE_SMURFS,
    LOADING_ERROR,
    CREATE_SMURF
} from '../actions/action'

const initialState={
    smurfs: [],
    isFetchingData: false,
    error: ""
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case LOADING_DATA:
            return{
                ...state,
                isFetchingData: true,
                smurfs: []
            }
        case UPDATE_SMURFS:
            return{
                ...state,
                smurfs: action.payload,
                isFetchingData: false,
            }
        case LOADING_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case CREATE_SMURF:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default reducer