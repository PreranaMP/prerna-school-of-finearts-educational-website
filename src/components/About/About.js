import React from 'react';
import './About.css'

const About = () => {
 return (
  <div>
   <h1 className="mt-5 text-warning">About Us!</h1>
   <div className="d-flex">
    <p className="p-5 about">Prerna school of FineArts (voted India’s Number 1 dance company) and the Prerna Professional Training Institute are widely-acknowledged as the country’s most popular and reputed dance organisations.
     <br />
     Together with the Terence Lewis Dance Scholarship Foundation Trust, they make up the TL brand, which fosters creative excellence in the talented, enthusiastic dancer (or aspiring dancer), raising the standards of dance in India and beyond.
     <br />
     We work together, towards professional excellence in exploring dance in various forms such as educational, research, artistic and commercial ventures. We constantly strive for efficiency and customer satisfaction.
     <br />
     Our talented team of professional dancers and instructors have all been handpicked and personally trained by our founders Terence Lewis and Mahrukh Dumasia; and receive ongoing coaching and regular assessments to ensure that that their skills are up-to-date.</p>
    <img className="w-50 p-5" src="https://uploads-ssl.webflow.com/57371e43aaa2367460d31a6e/573831b6006cd78f2f2bd7df_02_Dance.jpg" alt="" />
   </div>
  </div>

 );
};

export default About;