import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from './Components/NavBar'
import myGifHeader from './Components/static/my-website-header-1-test.gif'
// import 'react-table' from 'react';

function App() {
  return (

    <div className="App" >
        <div className="header">
          <img src={myGifHeader} width="450"/>
        </div>
      <div className="centerNavBar">
        <NavBar/>
      </div>

    </div>
  );
}

export default App;
