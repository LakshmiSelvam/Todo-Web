import React from 'react';
import './Navbar.css';
import {NavLink,Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Navbar=()=>{
 const menu=()=>{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
 }
 let history=useHistory();
 const logout=()=>{
   localStorage.clear();
   history.push('/');
  window.location.reload();
 }

    return(
        <div>
           <div class="topnav" id="myTopnav">
              <NavLink to="/" className="a"> Home</NavLink>
              <NavLink to="/addTask" className="a"> Add A Task</NavLink>
              <NavLink to="/taskInProcess" className="a">Task In Progress</NavLink>
              <NavLink to="/completed" className="a">Completed</NavLink>
               <Link onClick={logout}>Log Out</Link>
              
              <a onClick={menu} class="icon" >
                 <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}
export default Navbar;