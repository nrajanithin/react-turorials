import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycle from './lifecycle';
class App extends React.Component
 {
   constructor()
   {
     super();
     this.state = {
       decision : true
     }
   }
   handleDisplay = ()=>
   {
     this.setState({decision : !this.state.decision});
   }
   render()
   {
    return (
      <div className="App">
        <h1>This is our new react project</h1>
        <button onClick={this.handleDisplay}>Click to Toggle</button>
        {this.state.decision ? (<Lifecycle/>) : (<div></div>)}
      </div>
    );
   }
}

export default App;
