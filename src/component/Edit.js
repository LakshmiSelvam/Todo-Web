import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import './Users.css';

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
   
  });

  const { name } = user;
  const onInputChange = e => {
   setUser({ ...user, [e.target.name]: e.target.value });
    
  };
  useEffect(() => { 
  loadUser();
  }, []);

  // const onSubmit = async e => {
        //  e.preventDefault();
 const handle=e=>{      
  e.preventDefault();
  
  console.log(user);
   axios.post(`http://localhost:8080/addCompleted`, user);
   
    toast.success("Task Updated Succesfully")
    setUser({name:' '})
   // window.stop();
   //await axios.post(`http://localhost:8080/addInprogress`, user);
    
    // history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/completedById/${id}`);
   
    setUser(result.data);
  
  };

  return (
    <div className="bg">
    <center>
      <div className="addform">
        <h2 className="text-center">Edit A Task</h2>
        {/* <form onSubmit={e => onSubmit(e)}> */}
        {/* <form> */}
          <div className="">
            <input
              type="text"
              className="form"
              placeholder="Enter Your Task"
              name="name"
              value={name}
              onChange={e => onInputChange(e)} 
            />
          </div>
          
          <button onClick={handle}  className="block">Update Task</button>
        {/* </form> */}
      </div>
    </center>
    </div>
  );
};

export default Edit;
