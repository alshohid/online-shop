import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../App";
import "../SignUpSignIn/SignUpSignIn.css";
import firebaseConfig from "./firebase.config";
import "./SignUp.css";
firebase.initializeApp(firebaseConfig);
export default function SignUp() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const [loggedInUser, setLoggedInUser]= useContext(UserContext);

  const [userData, setUserData] = useState({
    name: "",
     isSignIn: false,
    mobile: "",
    photo:"",
    email: "",
    password: "",
    cpassword: ""
  });

 const handleSignInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const userSignIn = {
          name: displayName,
          isSignIn: true,
          photo: photoURL,
          email: email,
        };
        setUserData(userSignIn);
        const adding = {...userData}
        setLoggedInUser(adding);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

 const handleSignOutGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignIn: false,
          name: "",
          photo: "",
          email: "",
        };
        setUserData(signOutUser);
        setLoggedInUser(signOutUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  const addData = (e)=>{
    
    const {name, value}=e.target;
   
  setUserData(()=>{
    return{
        ...userData,[name]:value
    }
  })
}
// const addingToLogged = {...userData}
//  setLoggedInUser(addingToLogged);
const sendData = async(e)=>{
    e.preventDefault();
    const {name,mobile,email,password,cpassword ,photo}=userData;
   
    const res = await fetch("http://localhost:4000/register",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,mobile,email,password,cpassword ,photo
      })
    });
    const data = await res.json();
     console.log(data);
    if(res.status === 422 || !data){
      // alert("No data Found");
        toast.error("Try Again , Invalid Details",{
        position:"top-right"
      })
    }else{
      // alert("Data Successfully added");
     
      toast.success("User Sign Up Successfully ",{
        position:"top-right"
      })
const copyUserData = {...userData};
setLoggedInUser(copyUserData);
      setUserData({...userData, name:"",mobile:"",email:"",password:"", cpassword:"",photo:""});
    }

}
 
  return (
    <>
      <section>
          
        <div className="sign-form-container" style={{ marginTop: "50px" }}>
          <div className="sign-header">
             <h3>Please Sign UP </h3>
          </div>
          <div className="sign-form  ">
            <div className="form-data">
              <form method='POST' className="from-field">
                <label htmlFor="">
                  {" "}
                  <small>Name</small>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userData.name}
                  onChange={addData}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />

                <label htmlFor="">
                  {" "}
                  <small>Mobile</small>
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  onChange={addData}
                  value={userData.mobile}
                  className="form-control"
                  placeholder="Enter your Mobile number"
                  required
                />

                <label htmlFor="">
                  {" "}
                  <small>Email</small>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={addData}
                  value={userData.email}
                  className="form-control"
                  placeholder="Enter your Email"
                  required
                />

                <label htmlFor="">
                  {" "}
                  <small>Password</small>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={addData}
                  value={userData.password}
                  className="form-control"
                  placeholder="At least 6 character"
                  required
                />
                <label htmlFor="">
                  {" "}
                  <small> Password Again</small>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  onChange={addData}
                  value={userData.cpassword}
                  className="form-control"
                  required
                />
                <br />
                <input
                  type="submit"
                  value="Sign UP"
                  onClick={sendData}
                  style={{ background: "#232F3E" }}
                  className="form-control text-light"
                  id="submit"
                />
              </form>
            </div>
                    <ToastContainer />

            <div>
              <br />
              <small>
                <p>Already have an Account ? </p>{" "}
              </small>
              <Button
                 
                className="form-control"
                variant="contained"
                style={{ background: "#232F3E", color: "whitesmoke" }}
              >
                <NavLink style={{color:"white" , textDecoration:"none"}} to="/login">Login </NavLink>
              </Button>
              {/* <input
                type="submit"
                value="Login"
                className="form-control"
                style={{ background: "#232F3E", color: "whitesmoke" }}
              /> */}
            </div>
          </div>
           {userData.isSignIn ? (
        <Button variant="contained" onClick={handleSignOutGoogle}>
          Sign out
        </Button>
      ) : (
        <div>
          <Button variant="contained" onClick={handleSignInGoogle}>
            <GoogleIcon style={{ fontSize: "25px" }} /> Sign In
          </Button>
        </div>
      )}
        </div>
      </section>
    </>
  );
}
