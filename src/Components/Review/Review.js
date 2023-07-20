 import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ProductCart, UserContext } from '../../App';
import products from '../../fakeData/productsData';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'whiteSmoke',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



 export default function Review() {
  const [loggedInUser,setLoggedInUser]= useContext(UserContext);
  const [cart,setCart] = useState([]);
  const [cartProduct,setCartProduct]= useContext(ProductCart)
  console.log('context cart Product ',cartProduct.length);
  const [orderPlaced ,setOrderPlaced]=useState(false);

   const history = useHistory();
  // const checkOutHandler =()=>{
  //    history.push('/shipment');
   

  // }
  function checkOutHandler(){
  
    history.push('/shipment');
 
  }

  const removeHandler = (productKey)=>{
    console.log(`remove product ${productKey} Clicked `);
    const newCart = cart.filter(pd=>pd.key !== productKey);
    setCart(newCart);
   setCartProduct(newCart);
deleteFromDb(productKey);
  }
 
  useEffect(()=>{
    
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts= productKeys.map(key =>{
       const product= products.find(pd => pd.key ===key);
       product.quantity = savedCart[key];
       console.log("products data ", product)
        
       return product;
    });
   
    console.log("add cart item",cartProducts)
    setCart(cartProducts);
     setCartProduct(cartProducts);
   

 
  
     
  },[])


   
   return (
   <div>  
   <Box sx={{ flexGrow: 1 }}>
     <h2 style= {{textAlign:"center"}}> Your Order </h2>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            {
    cart.map(pd=> <ReviewItem
        removeHandler={removeHandler}
       product={pd}>

  </ReviewItem>)
  } 
  
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
      <Cart cart={cart}>

          
          <button className="cart-btn btn btn-warning text-center"
           onClick={checkOutHandler}
          >
            Proceed CheckOut 
          </button>
        
      </Cart>
            </div>
           
          </Item>
        </Grid>
         
      </Grid>
    </Box>
   
    </div>
   )
 }
 
 
