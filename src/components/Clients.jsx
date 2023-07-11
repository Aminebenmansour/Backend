import { clients } from "../constants"; 
import styles from "../style";
import React from 'react';
import { useState} from "react";
import Carousel from 'react-bootstrap/Carousel';  
const Clients = () => (

  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section> 
  );

export default Clients; 
// NEW CODE HERE 
// function Clients() {
//   return (
//     <Carousel data-bs-theme="dark" className={`${styles.flexCenter} my-4`}>
//       {clients.map((client) => ( 
//       <Carousel.Item> 
//         <img 
//           className="sm:w-[192px] w-[100px] object-contain "
//           src={client.logo} 
//           alt="Second slide"
//         />
//       </Carousel.Item>
// ))} 
//     </Carousel>
//   );
// // }

// export default Clients;


// const Clients = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={goToPrevious}>Previous</button>
//       <img src={images[activeIndex]} alt={`Image ${activeIndex}`} />
//       <button onClick={goToNext}>Next</button>
//     </div>
//   );
// };
// export default Clients ; 