import React from'react'
import './Login.css'
// import {Redirect, useHistory} from 'react-router-dom';
import { toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Profile from './profile'
import App from './App';
toast.configure();
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:null,
            password:null,
            login:false,
             store:null,
             status:null
        }
    }
    componentDidMount(){
        this.storeCollector()
    }
   storeCollector(){
       let store=JSON.parse(localStorage.getItem('login'));
       if(store && store.login){
           this.setState({login:true,store:store})
          console.log(store)
         }
        }
        
      login=e=>{
         e.preventDefault();

    
             let curTime = new Date().toLocaleString();
             console.log(this.state.username,curTime)
          
               console.log(this.state)
                 fetch('http://localhost:8080/authenticate',{
                     method:"POST",
                     headers:{'Content-type':'application/json'},
                     body:JSON.stringify(this.state)
                     
                 })
        
                 .then((response)=>{
                     response.json().then((result)=>{
                          console.warn("result" , result);
                          console.log(response.status);
                          if(response.status==200){
                          //  alert("hi")
                            this.setState({status:200})
                              localStorage.setItem('user',this.state.username)
                              localStorage.setItem('login',result.token)
                              
                          }
                          else{
                              //alert("Enter the correct Username and Password")
                              toast.warn("Enter the correct username and password")
                          }
                           this.storeCollector();
                     })
                 })
             
            }
        
           


    render(){

        return(
  
    <div class="body">
              {this.state.status==200?<Profile/>:
     <div class="container">
       <div class="wrapper">
           <div class="title"><span>Login Form</span></div>
            <form  onSubmit={this.login}>
            <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username"  onChange={(e)=>{this.setState({username:e.target.value})}} required/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})} }required/>
          </div>
        
          <div class="row button">
           <input   type="submit" value="Login" />
          </div>
        </form>
        </div>
      </div>
       }  
    </div>
        )
    }
}
export default Login;
