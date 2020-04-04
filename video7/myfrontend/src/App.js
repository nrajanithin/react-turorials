import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './employee';
class App extends React.Component{
  render()
  {
    return (
      <div className="App">
        <Employee/>
      </div>
    );
  }
}

export default App;
