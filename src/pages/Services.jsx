import React from 'react';

const Services= props=> {
   let services = props.services.map((s,i)=>{
       return(
           <li key={i}>
               <strong>{s.name}</strong>: {s.desc}
           </li>
       )
   })
    
   return(
          <div>
              <h2>Available Services</h2>
              <img src="https://res.cloudinary.com/briezh/image/upload/v1556727942/toothhurty_zgvrp0.jpg" alt="bad joke" className="small-image"/>
              <h3>What you need?</h3>
              <ol>
                  {services}
              </ol>
          </div>
          )
    }

export default Services