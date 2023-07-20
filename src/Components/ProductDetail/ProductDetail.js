 import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import GetProduct from '../GetProduct/GetProduct';
 const ProductDetail = () => {
   const [product,setProduct] = useState([])
   const { productKey } = useParams();
   //const product = fakeData.find(pd =>pd.key === productKey)
   useEffect(()=>{
    fetch(  "http://localhost:4000/getProducts")
  .then((res) => res.json())
      .then((data) => {
       
        const product = data.find(pd=> pd.key === productKey);
        console.log("single product ",product);
        setProduct(product);
         
    })
      
   },[productKey])
     
  return (
    <div>
      
      <GetProduct  showAddToCart={false} prod={product}></GetProduct>
      
      
    </div>
  );
 };
 
 export default ProductDetail;