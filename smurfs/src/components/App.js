import React, { Component } from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm';
import SmurfButton from '../components/SmurfButton';
import Smurfs from '../components/Smurfs';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfButton />
        <Smurfs />
      </div>
    );
  }
}

export default App;
