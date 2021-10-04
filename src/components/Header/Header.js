import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
 const logo = <FontAwesomeIcon icon={faMusic} />
 return (
  <div>
   <Navbar className="navbar p-5" bg="warning" expand="lg">
    <Container>
     <Navbar.Brand className="text-white" variant="dark" href="#home" >{logo}     Prerna School of FineArts</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
       <Nav.Link href="#home"><Link className="nav-options text-white" to="/home"> Home</Link>  </Nav.Link>
       <Nav.Link href="#about"><Link className="nav-options text-white" to="/about">About</Link> </Nav.Link>
       <Nav.Link href="#services"> <Link className="nav-options text-white" to="/services">Services</Link>  </Nav.Link>
       <Nav.Link href="#services"><Link className="nav-options text-white" to="/contact">Contact Us</Link>  </Nav.Link>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>

  </div>
 );
};

export default Header;