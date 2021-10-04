import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
 const [services, setServices] = useState([]);
 useEffect(() => {
  fetch('/services.JSON')
   .then(res => res.json())
   .then(data => setServices(data));
 }, [])
 return (
  <div>
   <h1 className="text-warning mt-5">Our Services : </h1>
   <Row xs={1} lg={2} className="">
    {
     services.map(service => <Service
      key={service.key}
      service={service}
     >
     </Service>)
    }
   </Row>
  </div>
 );
};

export default Services;