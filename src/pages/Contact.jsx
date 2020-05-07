import React from 'react';

const Contact= props=> {
   return(
          <div>
              <h2> Contact </h2>
              <img src="https://res.cloudinary.com/briezh/image/upload/v1556727942/sweetie_vyxlna.jpg" alt="bad joke"/>
              <h3>Name: Dr. {props.name} </h3>
              <h3>Phone:  {props.phone}</h3>
              <p>Trust me, I'm a doctor</p>

          </div>
          )
    }

export default Contact