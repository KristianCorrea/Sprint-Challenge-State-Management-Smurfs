import axios from 'axios'

export const LOADING_DATA='LOADING_DATA';
export const LOADING_ERROR='LOADING_ERROR';
export const UPDATE_SMURFS='UPDATE_SMURFS';
export const CREATE_SMURF='CREATE_SMURF';

export const getData=()=>dispatch=>{
    dispatch({type: LOADING_DATA});
    axios
        .get('http://localhost:3333/smurfs')
        .then(response=>{
            console.log(response);
            dispatch({type: UPDATE_SMURFS, payload: response.data})
        })
        .catch(error=>{
            console.log('Failed fetching data. Error: ', error);
            dispatch({type: LOADING_ERROR, payload: 'Error fetching data from api'});
        })
}

export const createSmurf=smurf=>dispatch=>{
    dispatch({type:CREATE_SMURF});
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response=>{
            console.log("Smurf Created", response)
        })
        .catch(error=>{
            console.log('Failed to send smurf to server', error)
        })
}