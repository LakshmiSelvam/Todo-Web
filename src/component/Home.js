import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import './Home.css';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const Home = () => {
  const [users, setUser] = useState([]);
   const [disabled,setDisabled]=useState(false);
  useEffect(() => {
   
    loadUsers();
  }, []);
 let username=localStorage.getItem('user')
 console.log(username);
  const loadUsers = async () => {
    
    const result = await axios.get(`http://localhost:8080/completed/username/${username}`);
    setUser(result.data.sort());
  };

  const deleteUser = async( id )=> {
  
    await axios.delete(`http://localhost:8080/completed/delete/${id}`);
    toast.success("Task Deleted Successfully")
    loadUsers();
  };
const changeColor=(index,id) =>{

  let username=localStorage.getItem('user');
  let tokens=localStorage.getItem('login');
  let token="Bearer " +tokens;
  const newName =[...users]
  console.log((username,newName[index].name,id))
  let  pass = JSON.stringify(username,newName[index].name)  

  axios.post("http://localhost:8080/addCompleted",{id:id,"username":username,"name":newName[index].name,"inprog":1,"complete":0},{

    headers: {
           "Access-Control-Allow-Methods": "POST",
           "crossorigin" :true,
           'Authorization':token,
           'Content-type':'application/json'
    
           }

          })



  const newList=[...users]
  newList[index].changeColor=!newList[index].changeColor

  if(!newList[index].changeColor){
  }
  else{
         toast.warn("Task is Inprogress")
         console.log(newList[index].changeColor)
         localStorage.setItem('color', newList[index].changeColor)
        
  }
 
  setUser(newList)
}

useEffect (()=>{
  let arr = localStorage.getItem("btn");
  if(arr){
      let obj = JSON.parse(arr);
      setDisabled(obj)
  }
},[])


  return (
    <div class="bg">  

   {username==null?<Redirect to="/" />:

     <div className="bodyy">
        <div className="">
            <div className="container-c">
              
                <ul>
                {users.map((user, index) => (
              <li>
                 {user.name}
                 <i onClick={(e)=>changeColor(index,user.id)}  class="fa fa-check"></i>
               
                  <Link to={`/edit/${user.id}`}>                  
                    <i class="fa fa-edit"></i>
                  </Link>
                  <Link onClick={(e) => deleteUser(user.id )}>
                    <i class="fa fa-trash"></i>
                  </Link>
                  </li>
            ))}
            </ul>
            </div>
        </div>


      </div>
      
      } 
    </div>
  );
};

export default Home;

// import React from "react";
// import  { useState, useEffect } from "react";
// import axios from "axios";

// import './Home.css';
// import { toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// toast.configure();

// const Home =()=>{
//   const [users, setUser] = useState([]);
//    const [disabled,setDisabled]=useState(false);
//   useEffect(() => {
//     loadUsers();
//   }, []);

//   let username=localStorage.getItem('user')
//   const loadUsers = async () => {
    
//     const result =  await axios.get(`http://localhost:8080/completed/username/${username}`);
//     setUser(result.data.sort());
//   };

//   const deleteUser = async( id )=> {
//     await axios.delete(`http://localhost:8080/completed/delete/${id}`);
//     toast.success("Task Deleted Successfully")
//     loadUsers();
//   };
// const changeColor=(index,id) =>{

//   let username=localStorage.getItem('user');
//   let tokens=localStorage.getItem('login');
//   let token="Bearer " +tokens;
//   const newName =[...users]
//   console.log((username,newName[index].name,id))
//   let  pass = JSON.stringify(username,newName[index].name)  

//   axios.post("http://localhost:8080/addCompleted",{id:id,"username":username,"name":newName[index].name,"inprog":1,"complete":0},{

//     headers: {
//            "Access-Control-Allow-Methods": "POST",
//            "crossorigin" :true,
//            'Authorization':token,
//            'Content-type':'application/json'
    
//            }

//           })



//   const newList=[...users]
//   newList[index].changeColor=!newList[index].changeColor

//   if(!newList[index].changeColor){
//   }
//   else{
//          toast.warn("Task is Inprogress")
//          console.log(newList[index].changeColor)
//          localStorage.setItem('color', newList[index].changeColor)
        
//   }
 
//   setUser(newList)
// }

// useEffect (()=>{
//   let arr = localStorage.getItem("btn");
//   if(arr){
//       let obj = JSON.parse(arr);
//       setDisabled(obj)
//   }
// },[])

// return(
//     <div>
//      <h1>fg</h1>

//                  <ul>
//                  {users.map((user, index) => (
//                <li>
//                   {user.name}
                  
//                   <i onClick={(e)=>changeColor(index,user.id)}  class="fa fa-check"></i>
               
//                    <Link to={`/edit/${user.id}`}>                  
//                      <i class="fa fa-edit"></i>
//                    </Link>
//                    <Link onClick={(e) => deleteUser(user.id )}>
//                      <i class="fa fa-trash"></i>
//                    </Link>
//                    </li>
//              ))}
//              </ul>
      
//     </div>
//   )
// }
// export default Home;