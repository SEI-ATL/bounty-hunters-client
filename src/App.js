import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Show from './pages/Show'
import New from './pages/New'
import Edit from './pages/Edit'

import Nav from './components/Nav'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        
        <h1>App!</h1>
        <Route path='/' exact> <Home /> </Route>

        {/* TODO: use slugified name instead */}
        <Route path='/show/:id'>
          <Show />
        </Route>
        
        <Route path='/new'>
          <New />
        </Route>

        <Route path='/edit/:id'>
          <Edit />
        </Route>
      </div>
    );
  }
}

export default App;
