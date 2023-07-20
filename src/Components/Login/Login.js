import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useState } from "react";
import "../Login/Login.css";
import firebaseConfig from "./firebase.config";
firebase.initializeApp(firebaseConfig);
export default function Login() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: " ",
    isSignIn: false,
    photo: "",
  mobile:"",
    email: "",
    password: "",
    error: "",
    success: false,
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
        setUser(userSignIn);
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
        setUser(signOutUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    } else if (e.target.name === "password") {
      const isPasswordValid = /\d{1}/.test(e.target.value);

      const isNumberValid = e.target.value.length > 5;
      isFormValid = isNumberValid && isPasswordValid;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const submitHandler = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          userUpdateProfile(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;

          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(`Sign in User info `, res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;

          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const toggle = () => {
    setNewUser(!newUser);
  };

  const userUpdateProfile = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("Update user successfully  ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const faceBookHandleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {});
  };
  return (
    <div>
      {user.isSignIn && (
        <div>
          <p>Welcome {user.name}</p>
          <p> {user.email} </p>
          <img src={user.photo} alt=""></img>
        </div>
      )}
      <br />

      <h1>Login Form Authentication </h1>

      <label htmlFor="newUser">আপনি কি নতুন ইউজার?</label>
      <br />
      <input type="checkbox" onChange={toggle} name="newUser" id="" />
      <label htmlFor="newUser"> হ্যা </label>

      <form className="form-div" onSubmit={submitHandler}>
        {newUser && (
          <input
            type="text"
            name="name"
            required
            placeholder="আপনার নাম প্রবেশ করান"
            className="form-control"
            onBlur={handleBlur}
          />
        ) 
        }

        <br />
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          id="email"
          placeholder=" ইমেইল প্রবেশ করান "
          className="form-control"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onBlur={handleBlur}
          placeholder="Enter Your Password (At least 6 characters ) "
          className="form-control"
          required
        />
        <br />

        <input
          className="loginSubmit-btn form-control text-light "
          style={{ background: "#232F3E" }}
          type="submit"
          value={newUser ? "Sign In " : "Sign Up"}
        />
      </form>
      <br />
      {console.log(user.success)}
      {user.success ? (
        <h3 style={{ color: "green" }}>
          {" "}
          User {newUser ? "Created" : "Logged In"} successfully{" "}
        </h3>
      ) : (
        <h3 style={{ color: "red" }}> {user.error} </h3>
      )}
      <br />
      {user.isSignIn ? (
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
      <br />
      <br />
      <Button variant="contained" onClick={faceBookHandleLogin}>
        Facebook Login
      </Button>
    </div>
  );
}
