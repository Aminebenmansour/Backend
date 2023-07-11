import {  parts  } from "../constants"; 
import styles from "../style";
import React from 'react'; 

const partenaires= () => (

  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {parts.map((parts) => (
        <div key={parts.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={parts.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section> 
  );

export default partenaires ;  