import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions/action'

const Smurfs=props=>{
    return (
        <div>
            {props.smurfs.map(smurf=>{
                return(
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <h5>{smurf.age}</h5>
                        <h5>{smurf.height}</h5>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        smurfs: state.smurfs,
        error: state.error,
    }
}

export default connect(
    mapStateToProps, {getData}
)(Smurfs)