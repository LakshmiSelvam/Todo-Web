import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link ,Redirect} from "react-router-dom";
import './Home.css'

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Completed = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
 let username=localStorage.getItem('user')
 console.log(username);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/completed/usernameandcomplete?username=${username}&complete=1`);
    setUser(result.data.sort());
  };



  return (
    <div>
       {username==null?<Redirect to="/" />:
      <center>
    <div class=" bg">
      <div className="bodyy">
        {/* <h1 style={{color:"white"}}>Completed Tasks </h1> */}
         <div className="container-complete">
           <ul>
           {users.map((user, index) => (
             <li>
              { user.name}
             </li>
           ))}
           </ul>
         </div>


        {/* <table class="center">
          <thead class="thead-dark">
            <tr>
              <th scope="col" style={{color:"white",fontSize:"20px"}}>Task</th>
           </tr>
          </thead>
          <tbody style={{color:"white",fontSize:"20px"}}>
            {users.map((user, index) => (
              <tr >
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div></center>}
    </div>
  );
};

export default Completed;