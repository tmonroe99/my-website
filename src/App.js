import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from './Components/NavBar'
// import 'react-table' from 'react';

function App() {
  return (

    <div className="App" >
      <h1 className="header">TAYLOR YOUNKINS</h1>
      <NavBar></NavBar>
      {/* <header className="App-header">
      hi
      <Button variant="contained" color="primary">CLick me</Button>
      </header> */}
    </div>
  );
}

export default App;
