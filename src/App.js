import React, { Component } from 'react'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavPage from './components/FavPage';
import Header from './Header';
 class App extends Component {
  render() {
    return (
      <>
        <Header/>
     <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/Fav">
        <FavPage/>
      </Route>
    </Switch>
  </Router>
      </>
    )
  }
}

export default App
