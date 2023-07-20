 
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 
import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Review from "./Components/Review/Review";
import Shipment from "./Components/Shipment/Shipment";
import ShipmentDetails from "./Components/ShipmentDetails/ShipmentDetails";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import SignUpSignIn from "./Components/SignUpSignIn/SignUpSignIn";
export const UserContext = createContext();
 export const ProductCart= createContext();
 
function App(props) {
  const [loggedInUser, setLoggedInUser]= useState({})
  const [cartProduct,setCartProduct] = useState({})
   
  return (
    <div className="app">
     

 <UserContext.Provider value={[loggedInUser,setLoggedInUser] } >
      
   
     
      <Router>
         <ProductCart.Provider value= {[cartProduct,setCartProduct]}>  
        
        <Header>
     
        </Header>
        
        <Switch>
          <Route path="/getProducts">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
           
          <Route path="/login">
            <SignUpSignIn></SignUpSignIn>
          </Route >
           <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
             
          </PrivateRoute>
          <Route path="/shipmentDetails">
             <ShipmentDetails></ShipmentDetails>
          </Route>
          
          <Route path="/register">
            <SignUp></SignUp>

          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        </ProductCart.Provider>
      </Router>
     {/* <BottomNavigationExample></BottomNavigationExample> */}
    </UserContext.Provider>
  
    </div>
   
  );
}

export default App;
 
      
      
      
     