import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';
export default function GetProduct(props) {
   const [value, setValue] = React.useState(2);
  // console.log('get product er log hocce ',props);
     const { name, img, url, seller, stock, key, price } = props.prod;
  return (
   <div className="getProductDiv">
      <div className="img-div">
        <a href={url}>
          <img src={img} alt="" />
        </a>
      </div>
      <div className="product-details">
        <h5 className="product-name">
          <a style ={{textDecoration:"none",fontStyle:"normal",fontSize:"medium"}}href={"/product/" + key}> {name}</a>
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
               <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"> Product Rating </Typography>
      <Rating name="read-only" value={value} readOnly />
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      
     
    </Box>
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

        { props.showAddToCart && <button
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
        </button>}
      </div>
    </div>
  );
  
}
