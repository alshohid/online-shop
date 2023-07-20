 import Carousel from "react-bootstrap/Carousel";
import imgCarousel from '../../images/background.jpg';
import imgCarousel2 from '../../images/newImg7.jpg';
import imgCarousel1 from '../../images/newImg8.jpg';
import './Slider.css';
 export default function Slider () {
   return (
     <>
       <Carousel>
         <Carousel.Item>
           <img
             id="image-sizing"
             className="image-size d-block bg-cover"
             src={imgCarousel}
             alt="First slide"
           />
           <Carousel.Caption>
             <h2 style={{ color: "yellow" }}> স্বাদের সেরা , আপনার আস্থা</h2>
             <p>খাবার kahan valo thakun </p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             id="image-sizing"
             className="image-size  d-block bg-cover"
             src={imgCarousel1}
             alt="Second slide"
           />

           <Carousel.Caption>
             <h3>Second slide label</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             id="image-sizing"
             className="image-size d-block bg-cover"
             src={imgCarousel2}
             alt="Third slide"
           />

           <Carousel.Caption>
             <h3>Third slide label</h3>
             <p>
               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
             </p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </>
   );
 }
 