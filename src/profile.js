// import './App.css';
import React from 'react'
import Login from './Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import AddTask from './component/AddTask'
import TaskInProcess from './component/TaskInProcess'
import Completed from './component/Completed'
import Edit from './component/Edit'
import { createBrowserHistory } from 'history'
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
function profile() {

  let username=localStorage.getItem('user')
  return (

     <div>


{window.location.reload(1000)}
   
  {username==null?<Route to="/" component={Login} />: 
   <Router>  

    <div className="App">
      
      {/* <Login /> */}
      {/* <Navbar />
      <center> <h1 style={{color:"white",padding:"10px",fontFamily:"cursive",fontSize:"50px"}}>Todo</h1></center>

      <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/addTask" component={AddTask} />
      <Route  exact path="/taskInProcess" component={TaskInProcess} />
      <Route  exact path="/completed" component={Completed} />
      <Route  exact path="/edit/:id" component={Edit} />
      
      </Switch> */}
    </div>
  </Router>
   } 
     </div>
  );
}

export default profile;
