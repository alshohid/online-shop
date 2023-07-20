import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import React from 'react';
import './ReviewItem.css';
export default function ReviewItem(props) {
      const [value, setValue] = React.useState(2);
    console.log(props);
     const {name,quantity,seller,img,price,key}=props.product;
     
     
  return (
     <div className='review-item'>
      <div className="row">
        <div className="col-5 ">
          <img className="display-img" src={img} alt=""></img>
          <h4 className="display-img"> <strong> ${price }</strong> </h4>
        </div>
        <div className="col-7">
<h4> <a className='description' href={"/product/" + key}> {name}</a> </h4>
 <h5>Quantity : {quantity}</h5>
       <h5> By  {seller}</h5>
         <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"> Product Rating </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
     
    </Box>   
  <br/>
      <button className='btn btn-warning' onClick={()=>props.removeHandler(key)}>Remove</button> 
       
        </div>
      </div>
      <hr/>
        
      
        
       
  



   

     
     </div>
  )
}
