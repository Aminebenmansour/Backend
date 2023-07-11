import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// 

const Page = () => {
    
  useEffect(() => {

    const url = window.location.href;
    const regex = /\/client\/confirm\/(\w+)/;
    const match = url.match(regex);
    console.log(match)

    if (match) {
      const dynamicValue = match[1];
      const axiosUrl = `http://localhost:3000/client/confirm/${dynamicValue}`;
        console.log(axiosUrl)
      axios.post(axiosUrl)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);
  // const {param} = useParams()
  // console.log(param)


  return (

    <div>
      {/* Contenu de votre page */}
    </div>
  );
};

export default Page;
