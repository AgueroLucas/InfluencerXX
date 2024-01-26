import React from 'react';
import { GiDelighted } from "react-icons/gi";

const Footer = () => {
  return (
    
    <div className="container" style={{marginTop:"20px"}}>
      
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 " style={{ borderTopColor: 'black' }}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
            <GiDelighted style={{ fontSize: '4rem', marginRight: '0.5rem' }} />
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-white">&copy; 2024 AgezCode,Technology.</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
            <GiDelighted style={{ fontSize: '4rem', marginRight: '0.5rem' }} />
            <svg className="bi" width="30" height="24"></svg>
          </a>
</ul>
      </footer>
    </div>
  );
}

export default Footer;
