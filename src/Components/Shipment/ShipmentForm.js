 import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../App";
import { getStoredCart } from '../../utilities/fakedb';
import CustomPayment from '../CustomPayment/CustomPayment';
// import ProcessPayment from '../ProcessPayment/ProcessPayment';

import './ShipmentForm.css';
function ShipmentForm() {
   const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const [shippingData,setShippingData] = useState(null)
  // const onSubmit = data => {
  //   console.log("data was submitted ", data)
  //  setShippingData(data);
  // }
 const handlePaymentSuccess = paymentId=>{
  const savedCart= getStoredCart();

  const orderDetails= {...loggedInUser, 
    products:savedCart,
    paymentId,
    shipment:shippingData,
     orderTime: new Date()}
   // Send a POST request to create a new shipment
  //      fetch("http://localhost:4000/shipmentDetails", {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(orderDetails)
  //     })
  //     .then(res=>res.json())
  //     .then(data =>{
  //       if(data){
  // clearTheCart()
  // alert("Your order placed Successfully ");
  //       }
     
  //     })
 }


    
  return (
    <div className="row d-flex align-center ">
      <div className="col-lg-6 col-sm-4 width-50% m-auto bg-light" >
         <CustomPayment /> 
   {/* <form onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue={loggedInUser.name} {...register("name", { required: true })} className="form-control" placeholder="Enter Your Name " />
       {errors.name && <span className="text-danger">Name is required</span>}

        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} className="form-control" placeholder="Enter Your Email" />
         {errors.email && <span className="text-danger">Email is required</span>}

          <input {...register("address", { required: true })} className="form-control" placeholder="Enter Your Address" />
         {errors.address && <span className="text-danger">Address is required</span>}
      
      
      <input className='from-control' type="submit" />
    </form> */}
      {/* </div>
      <div className="col-6" >
         <h4> Payment Method </h4>
         {/* <ProcessPayment handlePayment= { handlePaymentSuccess}/> */}
       
     
    </div>
    </div>
   
  );
}


export default ShipmentForm;

 /* <Form onSubmit={handleSubmitForm} method='POST'>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your  name"
          value={name}

        //  defaultValue={loggedInUser.name}
         onChange={(event) => setName(event.target.value)}
          // onChange={() => setName(value)}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formState">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formZipCode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter zip code"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {message && <div>{message}</div>}
    </Form>
    </div> 
    
    
    
     const handleSubmitForm = async(event) => {
 
    event.preventDefault();
   console.log ( 'Shipment form submitted!');
      try {
      // Send a POST request to create a new shipment
      const response = await fetch("http://localhost:4000/shipment", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails)
      });
           const data = await response.json();
      if (response.ok) {
        clearTheCart();
        setMessage('Shipment created successfully!');
        toast.success("Shipment Created Successfully! ",{
        position:"top-right"
      })
     
      } else {
       
          setMessage(`Error:${data.message}`);
           toast.error(`Try Again , Invalid Details `,{
        position:"top-right"
      })
        
      }
    } catch (error) {
      setMessage('Error creating shipment');
          toast.error(`Try again , invalid details `,{
        position:"top-right"
      })
      
    }
  };

    

  const savedCart = getStoredCart();
const orderDetails ={...loggedInUser,products:savedCart, address, name,city,state,zipCode, orderTime: new Date()};
console.log("orderdetails",orderDetails)





//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [message, setMessage] = useState('');
// console.log( `message ${name}  Address ${address} city ${city}`);

 
    
    */