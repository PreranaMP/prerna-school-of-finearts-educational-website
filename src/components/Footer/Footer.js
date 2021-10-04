import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
 const copyright = <FontAwesomeIcon icon={faCopyright} />
 return (
  <div>
   <footer className="footer bg-warning text-center text-white"> {copyright} All rights reserved.</footer>
  </div>
 );
};

export default Footer;