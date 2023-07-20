
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from './../Cart/Cart';
import GetProduct from './../GetProduct/GetProduct';
import "./Shop.css";

import { RotatingLines } from 'react-loader-spinner';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Shop() {
  const [products, setProducts] = useState([]);
   const [cart,setCart]= useState([]);
     
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading]=useState(false);

    
  useEffect(() => {
    setLoading(true);
    async function getData(){
       fetch(`http://localhost:4000/getProducts?search=`+searchQuery)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
         const savedCart = getStoredCart();
     const productKeys = Object.keys(savedCart);

            const cartProducts= productKeys.map(key =>{
       const product= data.find(pd => pd.key ===key);
      product.quantity = savedCart[key];
       console.log("products data ", product)
       return product;
    });
        setCart(cartProducts)
        setProducts(data);
        
      });
      
    }
  getData();

  },[searchQuery]);
  
   const handleSearch =event=>{
      setSearchQuery(event.target.value);
   }
 


  const addCartHandler = (product)=>{
    const sameProduct = cart.find(pd => pd.key === product.key);
    
    let newCart;
    if(sameProduct)
    {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd=> pd.key  !== product.key)
      newCart= [...others, sameProduct];
    }
    else{
      product.quantity =1;
      newCart= [...cart, product];
    }
    
    setCart(newCart);

addToDb(product.key);
  }
 
  return (
  <div>
       <div className='search-box' >
          <input type="search" onBlur={handleSearch} name="search" id="search" placeholder='Search  product name,  brand name anything   ..' className='form-control m-auto width-500px' />
        </div>

 <div className="shop">
     
      <div className="product-div">
        
        <div className="all-product bg-light">
               {  loading? <div className='spiner' style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center", height:"350px"}}> <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/> <h4> Loading...</h4> </div> : 
        products.map((product) => (
          <GetProduct key={product.key} showAddToCart={true} cartClick={addCartHandler} prod={product}></GetProduct>
        ))  
        }
        </div>
   
      </div>
      <div className="OrderSummary">
         <Box sx={{ flexGrow: 3}}>
     
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Item>
            
            <Cart cart={cart}>
               <NavLink to="/review">
          <button className="cart-btn btn btn-warning text-center review-order-btn">
            Review your order
          </button>
        </NavLink>
               </Cart>
          </Item>
        </Grid>
        
         
      </Grid>
    </Box>
        
      </div>
    </div>

  </div>

   
  );
}
/*
const  GetProduct = (props)=> {
  
 
  const {  name, img, url, seller,stock,key, price } =props.prod;
 
  return (
    <div className="getProductDiv">
      <div className="img-div">
        <a href={url}>
          <img src={img} alt="" />
        </a>
      </div>
      <div className="product-details">
        <h5 className="text ">
          <a href={"/product/" + key}> {name}</a>
        </h5>

        <div className="div-features">
          <div className="product-prices">
            <h6> By: {seller}</h6>
            <h3>${price}</h3>
            <p>Only {stock} left in stock-order soon </p>
          </div>
          <div className="features-description">
            <small>
              <h5>Features</h5>
              <ul>
                <li>Operating System</li>
                <li>display size </li>
                <li>Operating System</li>
                <li>display size </li>
                <li>Operating System</li>
              </ul>
            </small>
          </div>
        </div>

        <button
          className="btn btn-warning"
          onClick={() => {
            props.cartClick(props.prod);
          }}
        >
          <span style={{margin:"5px"}}>
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
}
/*
function OrderSummary( props )
{
   
 
  return (

  
  );


     " https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
}*/
