import Button from "@mui/material/Button";
import { React, useContext, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../App";
import "./SignUpSignIn.css";
export default function SignUpSignIn() {
   const [loggedInUser,setLoggedInUser]= useContext(UserContext);
  const [loginUser,setLoginUser]= useState({
    email:"",
    password:"",
    isSignIn:false
    

  });
  console.log("Click korar agee  login user ",loginUser)
 
console.log("Logged IN User here",loggedInUser);
const history = useHistory();
const location = useLocation();
 let {from}= location.state || { from : {pathname:"/getProducts"}};



  const addData =(e)=>{
    const {name, value}= e.target;
    setLoginUser(()=>{
      return{
        ...loginUser,[name]:value
      }
    })
  }
  // console.log(loginUser);

  const sendUserData = async(e)=>{
    e.preventDefault();
    const {email, password}=loginUser;
  const res = await fetch("http://localhost:4000/login",{
    method:'POST',
    headers:{
      "Content-Type":"application/json"

    },
    body:JSON.stringify({
      email,password
    })
  });
  const data = await res.json();
  console.log("response data ", data);
  
 if(res.status === 400 || !data || data=== "" || res.status === 484){
      // alert("No data Found");
        toast.error("Try Again , Invalid Details",{
        position:"top-right"
      })
      
  }else{
     console.log("Data valid");
       toast.success("successfully LoggedIn",{
        position:"top-right"
    });
    const preUser= {
      isSignIn:true,...loginUser
    }
    setLoginUser(preUser);

     const  newUser= {...loginUser};
  setLoggedInUser(newUser);
  console.log("After clicked ",loggedInUser);
   history.replace(from);
    
  }
  // const  newUser= {...loginUser};
  // setLoggedInUser(newUser);
  // history.replace(from);
  setLoginUser({...loginUser, email:"",password:""});
  // history.replace(from);

  }
 
  return (
   
      <section>
        <div className="sign-form-container" style={{ marginTop: "50px" }}>
          <div className="sign-header">
               <h3>Please Login</h3>
          </div>
          <div className="sign-form  ">
            <div className="form-data">
              <form method='POST' className="from-field">
                <label for="">
                  {" "}
                  <small>Email</small>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                 
                  onChange={addData}
                   value={loginUser.email}
                  className="form-control"
                  placeholder="Enter your Email"
                  required
                />

                <label for="">
                  {" "}
                  <small>Password</small>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                
                  onChange={addData}
                    value={loginUser.password}
                  className="form-control"
                  placeholder=" (At least 6 character)"
                  required
                />
                <br/>
                <input
                  type="submit"
                  value="Continue"
                  onClick={sendUserData}
                 
                  className="form-control text-black"
                  id="submit"
                />
              </form>
            </div>
            
            <div>
              <br />
              <small>
                <p className="text-center">New to Our WebSite ? </p>{" "}
              </small>
              <Button
                className="form-control"
                variant="contained"
                style={{ background: "#232F3E", color: "black" }}
              >
                

                          <Link to ='/register'
                  style={{ color: "white", textDecoration: "none" }}
                 >
                  Create a new Account{" "}
                </Link>
                
                
               
              </Button>
              {/* <input
                type="submit"
                value="Create a new Account "
                className="form-control"
                style={{ background: "#232F3E", color: "whitesmoke" }}
              /> */}
            </div>

          </div>
          <div>
  <ToastContainer/>
          </div>
         
        </div>
      </section>
    
  );
}
