// import React from 'react';
// import Navbar from './component/Navbar';
// import Login from './Login'
// import './index.css';
// import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import React, { useState } from 'react'
import Login from './Login'
import Profile from './profile'

import Navbar from './component/Navbar'
import Home from './component/Home'
import AddTask from './component/AddTask'
import TaskInProcess from './component/TaskInProcess'
import Completed from './component/Completed'
import Edit from './component/Edit'

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router';
import profile from './profile'
const App=()=>{
  
let username=localStorage.getItem('user');
 return(
    <div className="App">
        <Router>
        {username==null?<Route to="/" component={Login} />:
            <div>
             {/* <Route to="/profile" component={Profile} /> */}
             <Navbar />
      <center> <h1 style={{color:"white",padding:"10px",fontFamily:"cursive",fontSize:"50px"}}>Todo</h1></center>

      <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/addTask" component={AddTask} />
      <Route  exact path="/taskInProcess" component={TaskInProcess} />
      <Route  exact path="/completed" component={Completed} />
      <Route  exact path="/edit/:id" component={Edit} />
      
      </Switch>
              </div>
        }
    </Router>
 </div>

        )
    
}
export default App;