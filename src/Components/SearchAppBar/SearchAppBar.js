 import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import './SearchAppBar.css';
 function SearchAppBar( ) {
  // const [ loggedInUser,setLoggedInUser]= useContext(UserContext);
  // console.log("Logged in User final search theke dekhi ",loggedInUser)
  //  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //    const handleLogin = () => {
  //   // setIsLoggedIn(true);
  // };

  // const handleLogOut = () => {
  //   // setIsLoggedIn(false);
  //  setLoggedInUser({})
  // };
// console.log( "search theke hocce ",loggedInUser)
   const [stickyClass, setStickyClass] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", stickNavbar);
     return () => window.removeEventListener("scroll", stickNavbar);
   }, []);

   const stickNavbar = () => {
     if (window.scrollY >0) {
      //  let windowHeight = window.scrollY;
       // window height changed for the demo
       setStickyClass(true)
      //  windowHeight > 40 ? setStickyClass("sticky-nav") : setStickyClass("");
     }
     else{
      setStickyClass(false);
     }
   };
   
   return  (
     <Navbar id="nav" className={stickyClass ? "sticky" : ""} expand="lg">
       <Container>
         <Navbar.Brand className="pd-2" href="/">
           Shohid Online Shop
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto nav-style" >
             <Link className=' text-decoration-none m-2'to="/">Home</Link> 
             <Link className=' text-decoration-none m-2'to="/about">About </Link>
             <Link className=' text-decoration-none m-2 ' to="/inventory">manage inventory</Link>
             <Link className=' text-decoration-none m-2 ' to="/review">Order Review</Link>

             <NavDropdown title="Category" id="basic-nav-dropdown">
               <NavDropdown.Item className="bg-grey text-black" href="/about">
                 Men & Women{" "}
               </NavDropdown.Item>
               <NavDropdown.Item
                 className=" "
                //  href="/getProducts"
               >
              <Link  className=" text-decoration-none text-black" to="/getProducts">Electronics  product</Link>   
               </NavDropdown.Item>
               <NavDropdown.Item
                 className="bg-grey text-black"
                 href="#action/3.3"
               >
                 Baby Products
               </NavDropdown.Item>
                <NavDropdown.Item
                 className="bg-grey text-black"
                 href="#action/3.3"
               >
                 Baby Products
               </NavDropdown.Item>
                <NavDropdown.Item
                 className="bg-grey text-black"
                 href="#action/3.3"
               >
                 Baby Products
               </NavDropdown.Item>
                <NavDropdown.Item
                 className="bg-grey text-black"
                 href="#action/3.3"
               >
                 Baby Products
               </NavDropdown.Item>
                <NavDropdown.Item
                 className="bg-grey text-black"
                 href="#action/3.3"
               >
                 Baby Products
               </NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4 text-black">Jewellary</NavDropdown.Item>
             </NavDropdown>
              {/* <Link   className=' text-decoration-none m-2 ' to="/login">Login </Link>
              <Link onClick={()=>setLoggedInUser({})} className=' text-decoration-none m-2 '  >LogOut </Link> */}
           
             {/* {
                 loggedInUser ? (
        
          
          
          <Link onClick={handleLogout} className=' text-decoration-none m-2 '>Logout </Link>
         
      ) : (
        
           
         
          <Link onClick={handleLogin} className=' text-decoration-none m-2 ' to="/login">Login </Link>
        
      )
          
             } */}
             
            
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   );
 }


 export default SearchAppBar;