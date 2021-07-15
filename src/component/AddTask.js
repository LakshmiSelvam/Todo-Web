import React, { useState ,Component} from "react";
import axios from 'axios'
import { useHistory,Redirect } from "react-router-dom";
import './Users.css';

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Profile from '/../Profile'
toast.configure();
const AddTask = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username:localStorage.getItem('user'),
    inprog:0,
    complete:0
  });

const { name } = user;  
const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let username=localStorage.getItem('user');
  // const onSubmit = async e => {
  //   let tokens=localStorage.getItem('login');
  //   let token=tokens;
  //  const head={'Authorization':'Bearer' +token,'Content-type':'application/json'}
  //   e.preventDefault();
  //   await axios.post("http://localhost:8080/addTodo", user,{headers:head});
  //   toast.success("Task Addedd Successfully")
  //   history.push("/");
    
  // };

   const handle=(e)=>{
     e.preventDefault();
     let username=localStorage.getItem('user');
    let tokens=localStorage.getItem('login');
    let token="Bearer " +tokens;
    let head = {'Authorization':token,'Content-type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000','crossorigin' :true, 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE', }
    // console.log(token)
     //console.log(head);
     console.log(user)
   console.log(user);
     axios.post("http://localhost:8080/addCompleted",user, {
      headers: {
        "Access-Control-Allow-Methods": "POST",
        "crossorigin" :true,
        'Authorization':token
        // 'Access-Control-Allow-Headers':'' Origin', 'Content-Type';' X-Auth-Token'

           }
         })
         setUser({name:' '})
      
         toast("task added succesfully")
   
   }
  
   

  return (
    <div className="bg">
      {username==null?<Redirect to="/" />:
    <center>
      <div className="addform">
        <h2 className="text-center ">Add A Task</h2>
        {/* <form > */}
        {/* <form onSubmit={(e) => {handle}}> */}
          <div className="form">
            <input
              type="text"
              className="form"
              placeholder="Enter Your Task"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button onClick={handle} className="block"  disabled={name.includes(" ")||name.length<3} >Add</button>
        {/* </form> */}
      </div>
    </center>}</div>
  );
};



export default AddTask;