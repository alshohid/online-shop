import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './Cart.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cart (props) {
  const cart = props.cart;
   
  // const total= cart.reduce((total,prod)=>total+prod.price,0)
  let totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i]
    totalPrice += product.price * product.quantity;
  }
  let shipping = 0
  if (totalPrice > 35) {
    shipping = 0
  } else if (totalPrice > 15) {
    shipping = 4.99
  }
   else if (totalPrice > 0)
  {
    shipping = 12.99
  }
  const tax = Math.round(totalPrice / 10).toFixed(2)
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
     
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            
           <div className="cart-div">
        <h1 className="text-warning">
          {" "}
          <strong>Order Summary </strong>
        </h1>
        <p className="text-bold text-capitalize">
          <strong> Items ordered :  
          <span className="text-bold">{cart.length} </span></strong>
        </p>
        <div className="cart-flex">
          <ul>
            <li>
              <p>
                {" "}
                Product price :{" "}
                <small>
                  $ {Math.round(Number(totalPrice.toFixed(2)))}{" "}
                </small>{" "}
              </p>
            </li>
            <li>
              <p>
                Shipping & Handling : <small> ${shipping} </small>{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                Total before tax : <small> ${tax} </small>{" "}
              </p>
            </li>
            <li>
              <p>
                Estimated Tax : <small> $25</small>{" "}
              </p>
            </li>
          </ul>
          <br />

          <h3>
            <small>   Order Total = $
       {Number(totalPrice + Number(tax) + shipping).toFixed(2)}{" "}</small>  
          </h3>
        </div>
        <br />
          {
            props.children
          }
       
      </div>
          </Item>
        </Grid>
        
         
      </Grid>
    </Box>
      
    </div>
  );
}
