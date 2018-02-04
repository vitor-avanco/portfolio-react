import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="portfolio-vitor-avanco">
              <Switch>
                  <Route path="/" component={ Home } exact />
                  <Route render={() => { return <Redirect to="/" /> }} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
