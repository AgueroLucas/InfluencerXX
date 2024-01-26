import React, { useState, useEffect } from 'react';
import './../estilos/estilos.css';
import { FaArrowUp,FaTiktok,FaYoutube,FaDiscord, FaInstagram } from "react-icons/fa";
import { ImTwitch } from "react-icons/im";

function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScroll(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <div className=" col d-flex flex-column align-items-center text-center" style={{marginTop:"30px"}}>
        <div className="feature p-4 mb-3 bg-white rounded">
          <div className="d-flex flex-column align-items-center">
            <img
              src="https://i.pinimg.com/564x/74/a7/2a/74a72a774e21d0c5904e31e6a6aae9d2.jpg"
              alt="Imagenperfil1"
              className="bd-placeholder-img rounded-circle"
              width="160"
              height="160"
              role="presentation"
              aria-label="Placeholder: 140x140"
              style={{
                border: "4px solid black",
                borderRadius: "10px",
              }}
            />
            <h2 className="text-center" style={{marginTop:"10px"}}>Influencer X</h2>
            <hr />
            <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{marginTop:"-18px"}} >
            <li className="ms-3">
                <a className="text-body-white icon-hover" href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                  <ImTwitch style={{ fontSize: '5rem', color: '#7D3C98' }} />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-white" href="https://discord.com/download" target="_blank" rel="noopener noreferrer">
                  <FaDiscord style={{ fontSize: '5rem', color: '#273746', marginTop:"5px"  }} />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-white" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram style={{ fontSize: '5rem', color: '#D35400', marginTop:"5px"  }} />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-white" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <FaYoutube style={{ fontSize: '5rem', color: 'red', marginTop:"5px"  }} />
                </a>
              </li>
              
              
              <li className="ms-3">
                <a className="text-body-white" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                  <FaTiktok style={{ fontSize: '5rem', color: 'black', marginTop:"5px"  }} />
                </a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>

      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </main>
  );
}

export default Home;