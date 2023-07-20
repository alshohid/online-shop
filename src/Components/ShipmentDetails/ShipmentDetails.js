
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from "../../App";
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
function ShipmentDetails() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
 const history = useHistory();
 const location = useLocation();
 let {from}= location.state || { from : {pathname:"/getProducts"}};
  const handleSubmit = (event) => {
    event.preventDefault();
    const savedCart = getStoredCart();
    const data = {...loggedInUser, products:savedCart, name, address,zipCode,orderTime: new Date() };
    axios.post('http://localhost:4000/shipmentDetails', data)
      .then(response => {
        console.log(response.data);
        
          clearTheCart();
          toast.success("Shipment Created Successfully! ",{
        position:"top-right"
     })
     setName("")
     setAddress("")
     setZipCode("")
      // history.replace(from);
      })
      .catch(error => {
        console.log(error);
           toast.error( `Try Again , Invalid Details `,{
        position:"top-right",
       })
      });
  //    try {
  //     // Send a POST request to create a new shipment
  //     const response =  fetch("http://localhost:4000/shipmentDetails", {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(orderDetails)
  //     });
  //          const data =  response.json();
  //          console.log("console data ",data.name);
  //         //  if( !response.ok){
  //         //   throw new Error('Network response is not ok ')
  //         //  }
  //     if (response.ok) {
  //       clearTheCart();
  //       // setMessage('Shipment created successfully!');
  //       toast.success("Shipment Created Successfully! ",{
  //       position:"top-right"
  //     })
     
  //     } else {
       
  //         // setMessage(`Error:${data.message}`);
  //          toast.error( `Try Again , Invalid Details `,{
  //       position:"top-right",
  //     })
  //     }
        
      
  //   } catch (error) {
  //     // setMessage('Error creating shipment');
  //         toast.error(`Try again , invalid details `,{
  //       position:"top-right"
  //     })
      
  //  }
  };

  return (

   <div className="row bg-light" >
  <div className="col-lg-8 col-sm-4 width-3rem m-auto text-center">
    <div className="Shipment-details"> 
    <h3 >Shipment Details </h3>
 <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control"/>

      <label>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />

      <label>ZipCode</label>
      <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)}  className="form-control" />

      <button type="submit"  className="form-control">Submit</button>
      <ToastContainer/>
    </form>
    </div>
  </div>
   
    </div>
  );
}

 export default ShipmentDetails;
























//  import { useContext, useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';
// import { UserContext } from "../../App";
// import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
// // import ProcessPayment from '../ProcessPayment/ProcessPayment';
// // import CustomPayment from '../../Components/CustomPayment/CustomPayment.jsx';
 
// function ShipmentDetails() {
//    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
//     // const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [message, setMessage] = useState('');
// console.log( `message ${name}  Address ${address} city ${city}`);
 
  

//      const handleSubmitForm = async(event) => {
//           const savedCart = getStoredCart();
// const orderDetails ={products:savedCart, address, name,city,state,zipCode, orderTime: new Date()};
// console.log("orderdetails",orderDetails)
 
//     event.preventDefault();
//    console.log ( 'Shipment form submitted!');

//   // fetch("http://localhost:4000/shipmentDetails", {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(orderDetails)
//   //     })
//   //     .then(res=>res.json())
//   //     .then(data =>{
//   //      console.log("log data that is saved to mongo db ",data)
     
//   //     })

//       try {
//       // Send a POST request to create a new shipment
//       const response = await fetch( "http://localhost:4000/shipmentDetails", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(orderDetails)
//       });
//            const data = await response.json();
//            console.log("console data ",data.name);
//           //  if( !response.ok){
//           //   throw new Error('Network response is not ok ')
//           //  }
//       if (response.ok) {
//         clearTheCart();
//         setMessage('Shipment created successfully!');
//         toast.success("Shipment Created Successfully! ",{
//         position:"top-right"
//       })
     
//       } else {
       
//           setMessage(`Error:${data.message}`);
//            toast.error( `Try Again , Invalid Details `,{
//         position:"top-right",
//       })
//       }
        
      
//     } catch (error) {
//       setMessage('Error creating shipment');
//           toast.error(`Try again , invalid details `,{
//         position:"top-right"
//       })
      
//    }
//   };
//   return (
//     <div  className="row">
//       <div className="col-lg-5 col-sm-4 " >
//     <Form onSubmit={handleSubmitForm} method='POST'>
//       <Form.Group controlId="formName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter your  name"
//           value={name}

//         //  defaultValue={loggedInUser.name}
//          onChange={(event) => setName(event.target.value)}
//           // onChange={() => setName(value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formAddress">
//         <Form.Label>Address</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter address"
//           value={address}
//           onChange={(event) => setAddress(event.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formCity">
//         <Form.Label>City</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(event) => setCity(event.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formState">
//         <Form.Label>State</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter state"
//           value={state}
//           onChange={(event) => setState(event.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formZipCode">
//         <Form.Label>Zip Code</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter zip code"
//           value={zipCode}
//           onChange={(event) => setZipCode(event.target.value)}
//         />
//       </Form.Group>

//       <button variant="primary" type="submit">
//         Submit
//       </button>
//       {message && <div>{message}</div>}
//     </Form>
//     </div> 
//     <ToastContainer/>
      
//     </div>
   
//   );
// }


// export default ShipmentDetails;

//  /* <Form onSubmit={handleSubmitForm} method='POST'>
//       <Form.Group controlId="formName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter your  name"
//           value={name}

//         //  defaultValue={loggedInUser.name}
//          onChange={(event) => setName(event.target.value)}
//           // onChange={() => setName(value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formAddress">
//         <Form.Label>Address</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter address"
//           value={address}
//           onChange={(event) => setAddress(event.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formCity">
//         <Form.Label>City</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(event) => setCity(event.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formState">
//         <Form.Label>State</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter state"
//           value={state}
//           onChange={(event) => setState(event.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formZipCode">
//         <Form.Label>Zip Code</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter zip code"
//           value={zipCode}
//           onChange={(event) => setZipCode(event.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//       {message && <div>{message}</div>}
//     </Form>
//     </div> 
    
    
    
//      const handleSubmitForm = async(event) => {
 
//     event.preventDefault();
//    console.log ( 'Shipment form submitted!');
//       try {
//       // Send a POST request to create a new shipment
//       const response = await fetch("http://localhost:4000/shipment", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(orderDetails)
//       });
//            const data = await response.json();
//       if (response.ok) {
//         clearTheCart();
//         setMessage('Shipment created successfully!');
//         toast.success("Shipment Created Successfully! ",{
//         position:"top-right"
//       })
     
//       } else {
       
//           setMessage(`Error:${data.message}`);
//            toast.error(`Try Again , Invalid Details `,{
//         position:"top-right"
//       })
        
//       }
//     } catch (error) {
//       setMessage('Error creating shipment');
//           toast.error(`Try again , invalid details `,{
//         position:"top-right"
//       })
      
//     }
//   };

    

//   const savedCart = getStoredCart();
// const orderDetails ={...loggedInUser,products:savedCart, address, name,city,state,zipCode, orderTime: new Date()};
// console.log("orderdetails",orderDetails)





// //   const [name, setName] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [city, setCity] = useState('');
// //   const [state, setState] = useState('');
// //   const [zipCode, setZipCode] = useState('');
// //   const [message, setMessage] = useState('');
// // console.log( `message ${name}  Address ${address} city ${city}`);

 
    
//     */