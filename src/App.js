import React, { Component } from 'react';
import './App.css';

import { withRouter } from 'react-router-dom';
// import nhung class moi trong thu vien
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

//import cac file kia
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';
import Add from './components/Add';
import Admin from './components/Admin';
import Footer from './components/Footer';
import Login from './components/Login';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <ul>
            <li> <img className="Slide" alt="slide" src="https://i.ebayimg.com/images/g/CCkAAOSwgHZdZ4k-/s-l300.jpg" /></li>
            <li>VIT TRAVEL</li>
            {/* <li>
            <input type="search" name="" id="input" class="form-control" value="" required="required" title="" />       
            </li> */}
            <li>Day</li>
            <li>Guess </li>
            
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/add">ADD</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/post">TOUR</Link></li>
            <li><Link to="/posts">SERVICE</Link></li>
            <li><Link to="/admin">ADMIN</Link></li>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/posts">LOG IN</Link></li>
            <li><Link to="/posts">LOG OUT</Link></li> */}
          </ul>
          
          <Switch>
          <Route path="/home" exact><Home /></Route>
            <Route path="/about"> <About /></Route>
            <Route path="/add"> <Add /></Route>
            <Route path="/admin"> <Admin /></Route>
            <Route path="/login"> <Login /></Route>
            <Route path={"/posts/:id"}>
                  <Post />
              </Route>
          </Switch>
          
        </Router>
        <Footer />
      </div>
    )
  }
}



   

export default App;
