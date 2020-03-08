import React from 'react';
import {Header} from './header';
import {Component1} from './component1';
import {Badges} from './badges';
import {Carousel} from './carousel';
import {Orderdetails} from './orderdetails';
import {Logout} from './logout';


export function App() {
  return (
    <div className="container-fluid bg-secondary">  
    <div className="row">
      <div className="col-xl-2">
      <Header/>
    
      </div>
      <div className="col-xl-4 offset-xl-2 mt-2">
      <Component1/>
      </div>
      <div className="d-flex flex-row-reverse justify-content-end ml-4">
      <div className="p-2">
<Badges/>
      </div>
      <div className="p-2">
<Orderdetails/>
      </div>
      <div className="p-2">
<Logout/>
      </div>
      </div>
      
    
      </div>  
    <div className="row p-0">
      <div className="col-xl-3 m-0">
      <Carousel/>
      </div>

    </div>

      </div>
    
  );
}


