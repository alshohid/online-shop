
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ProductCart, UserContext } from "../../App";
import img4 from "../../images/logo.png";
import SearchAppBar from '../SearchAppBar/SearchAppBar';
import "./Header.css";
 export default function Header( ) {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const [cartProduct,setCartProduct]= useContext(ProductCart);
console.log(" header login information ", loggedInUser);

    const isLoggedIn = loggedInUser.isSignIn;
    const [isLoggedInUser,setIsLoggedInUser]= useState(false)
    console.log( " bolo vai ki hoice ",isLoggedIn);
  const handleLogIn =()=>{
    setIsLoggedInUser(true)
  }

const handleLogOut = ()=>{
  setIsLoggedInUser(false);
  setLoggedInUser({});
 

   
}

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
   

  return (
    <div>
      <div className="header" >
        <div className="row manage-header">
          <div className="col-4 header-logo">
               
              <img className="d-block m-auto"  src={img4} alt="header-logo" />
              
      </div>
      <div className="col-4 heading-text ">
                <h1>ONLINE SHOP</h1>
              </div>
          <div className="col-4 d-block text-light">
           <div className="row">
            <div className="col-4">
              <div className="cartStyling" >
                <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <div>
                <strong  style={{display:"flex", flexDirection:"flex-start"}}>  <span className="text-warning">  {cartProduct.length} </span> </strong>
                  </div>
                  <div><ShoppingCartIcon />Cart</div>
                  
                </div>
                 
                
              </div>
                {/* <span>
              {" "} 
              <ShoppingCartIcon /> Cart
            </span> */}
            </div>
            <div className="col-5">
            <strong> <small> {loggedInUser.email} </small> </strong>  
            </div>
            <div className="col-3 align-center">
              {/* <AccountCircleIcon/> */}
             <img style={{ height:"50px",width:"50px", borderRadius:"45%"}} src={loggedInUser.photo} alt=""></img>

              
            </div>
           </div>
          </div>
          
        </div>

        <br />
        <div className="row  nav-style"style={{background:"#232F3E"}}>
          <div className="col-7 nav-div ">
            <nav className={ stickyClass ? "sticky" : ""} >
              <SearchAppBar ></SearchAppBar>
              {/* <Navbar></Navbar> */}
            </nav>
          </div>

          <div className="col-3 search-box  ">
            <div style={{display:"flex",justifyContent:"flex-start"}  }>
              {
                isLoggedInUser? (
                    <button>
                     <Link  onClick={handleLogOut} className="text-decoration-none m-2 "> LogOut </Link>
                    </button>
                ):(
                       <button>
                        <Link to="/login" onClick={handleLogIn} className="text-decoration-none m-2 "> LogIn </Link>
                       </button>
                )
              }
               {/* <Link   className=' text-decoration-none m-2 ' to="/login">Login </Link>
              <Link onClick={()=>setLoggedInUser({})} className="text-decoration-none m-2 "> LogOut </Link> */}
            </div>

              


            {/* <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here.. "
              className=" pd-2 form-control"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
