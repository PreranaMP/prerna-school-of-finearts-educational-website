
import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
 return (
  <div>
   <h1 className="text-warning mt-5">Contact us!</h1>
   <p className="paragraph text-center mt-4">Send us your queries and our team will be ready to respond to you and clear your doubts!</p>
   <div className="p-5 m-3">
    <InputGroup className="mb-3">
     <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
     <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
     />
    </InputGroup>

    <InputGroup className="mb-3">
     <FormControl
      placeholder="Email Address"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
     />
     <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup>

    <InputGroup className="">
     <InputGroup.Text>Your Message</InputGroup.Text>
     <FormControl as="textarea" aria-label="With textarea" />
    </InputGroup>
    <Button className="mt-3 text-white" variant="warning">Submit!</Button>
   </div>


  </div>
 );
};

export default Contact;