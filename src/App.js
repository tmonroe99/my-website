import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import myGifHeader from './Components/static/my-website-header-1-test.gif'

function App() {
  return (

    <div className="App" >
        <div className="header">
          <img src={myGifHeader} width="400"/>
        </div>
      <div className="centerNavBar" >
        <NavBar display="block"/>
      </div>

    </div> //end app.css
  );
}

export default App;
