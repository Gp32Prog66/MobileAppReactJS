//import logo from './logo.svg';
import './App.css';
import './components/salve'
import Salve from './components/salve';
import React from 'react';
import GitHubLink from './components/ghLink';




function App() {
  return (
    <div className="App">
      <Salve/>
      
      <Salve name = "Joe" />

      <GitHubLink/>


    </div>
  

  );
}

export default App;
