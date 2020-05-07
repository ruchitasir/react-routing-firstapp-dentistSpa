import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

const Content= props=> {
    let services = [
        {name:'Whitening' ,desc: '30 min or less guarantee. It\'s whitening fast'},
        {name: 'Braces' ,desc: 'Brace yourselves for impact'},
        {name: 'Route Canal' ,desc: 'Deeply unnerving!'},
        {name: 'Crowns' ,desc: 'Treat your teeth like kings!'},
        {name: 'Anesthesia' ,desc: 'Really nothing to do with teeth sometimes you just want to feel nothing'},
        {name: 'Cuddles' ,desc: 'Premium service charge'},
        {name: 'Free toothbrsuh', desc: 'Aww, so nice'}
    ]

   return(
          <div className="content">
            <Route exact path='/' component={Home}/>
            <Route  path='/services' render={ ()=>(
                <Services services={services} />
            )}/>
            <Route  path='/contact' render={()=>(
                <Contact name="Matthew Moore" phone="(207) 666-4545"/>
            )}/>
          </div>
          )
    }

export default Content