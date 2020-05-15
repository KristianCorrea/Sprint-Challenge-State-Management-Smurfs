import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createSmurf} from '../actions/action'

const SmurfForm=props=>{
    const [newSmurf, setNewSmurf]=useState({
        name: '',
        age: '',
        height: '',
    })

    const changeHandler=event=>{
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit=event=>{
        event.preventDefault();
        props.createSmurf(newSmurf);
        setNewSmurf({
            name: '',
            age: '',
            height: '',
        })
        
    }

    return(
        <div>
            <input 
                type='text'
                name='name'
                value={newSmurf.name}
                onChange={changeHandler}
                placeholder='Smurf Name'
            />
            <input 
                type='text'
                name='age'
                value={newSmurf.age}
                onChange={changeHandler}
                placeholder='Smurf Age'
            />
            <input 
                type='text'
                name='height'
                value={newSmurf.height}
                onChange={changeHandler}
                placeholder='Smurf Height'
            />
            <button onClick={handleSubmit}>
                Add New Smurf
            </button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        smurfs: state.smurfs,
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect (
    mapStateToProps, {createSmurf}
)(SmurfForm)