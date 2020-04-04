import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';
import Directory from './Directory';
import {Switch,Route} from 'react-router-dom';
import Profile from './profile';
class App extends React.Component {
  render()
  {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Directory" component={Directory} />
          <Route path="/Directory/:id" component={Profile} />
        </Switch>
      </div>
    );
  }

}

export default App;
