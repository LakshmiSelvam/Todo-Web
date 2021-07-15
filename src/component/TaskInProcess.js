import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link ,Redirect} from "react-router-dom";
import './Home.css'

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const TaskInProcess = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
 let username=localStorage.getItem('user')
 //console.log(username);
  const loadUsers = async () => {
    //const result = await axios.get(`http://localhost:8080/completed/username/${username}`);
    const result = await axios.get(`http://localhost:8080/completed/usernameandinprogress?username=${username}&inprog=1`);
    console.log(result);
    setUser(result.data.sort());
  };

  const deleteUser =async ( id,name ) => {
    // e.preventDefault();
    let username=localStorage.getItem('user');
   
    let tokens=localStorage.getItem('login');
    let token="Bearer " +tokens;
    console.log(id,name);


  //  await axios.delete(`http://localhost:8080/inprogress/delete/${id}`);
    toast.success("Task Completed Successfully")

    axios.post("http://localhost:8080/addCompleted",{id:id,"username":username,"name":name,"inprog":0,"complete":1}, {
      headers: {
        "Access-Control-Allow-Methods": "POST",
        "crossorigin" :true,
        'Authorization':token
        // 'Access-Control-Allow-Headers':'' Origin', 'Content-Type';' X-Auth-Token'

           }
         }) 

     loadUsers();
  };


  return (
    <div class=" bg">
       {username==null?<Redirect to="/" />:
      <div className="bodyy">
        {/* <h1 style={{color:"white"}}> Task In Progress</h1> */}
        <div className="container-inprocess">
         <ul>
         {users.map((user, index) => (
           <li>
             {user.name}
             <Link onClick={(e) => deleteUser(user.id,user.name)}>
                    <i class="fa fa-check"></i>
                  </Link>
           </li>

         ))}

         </ul>

        </div>

        




          {/* <table class="center">
          <thead class="thead-dark">
            <tr>
             <th scope="col" style={{color:"white",fontSize:"20px"}}>Task</th>
             <th style={{color:"white",fontSize:"20px"}}>Action</th>
            </tr>
          </thead>
          <tbody style={{color:"white"}}>
            {users.map((user, index) => (
              <tr >
                <td>{user.name}</td>
                
                <td>
                  <Link
                   
                    onClick={() => deleteUser(user.id,user.name)}
                  ><button  className="btn-success">
                    Completed</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>}
    </div>
  );
};

export default TaskInProcess;