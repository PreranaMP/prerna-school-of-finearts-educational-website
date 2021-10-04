
import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
 const { name, description, price, img } = props.service;
 return (
  <div className="service">
   <Col>
    <Card style={{ width: '18rem' }}>
     <Card.Img className="card-img w-50 p-3" variant="top mx-auto" src={img} />
     <Card.Body>
      <Card.Title className="text-warning">{name}</Card.Title>
      <Card.Text>
       <p className="description">{description}</p>
       <br />
       <Button className="text-white m-3" variant="warning">{price}/ 1Month</Button>
      </Card.Text>
     </Card.Body>
    </Card>
   </Col>
  </div>
 );
};

export default Service;