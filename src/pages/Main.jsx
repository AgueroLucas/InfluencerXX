import React from 'react';
import Home from '../components/Home';
import Footer from '../components/Footer';

function Main() {
  const mainStyle = {
    backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizUtc4SmC82aeE2bmStSlrOCBjJJXAfbFRn28q8HyAN6zGLbl06zTbZF2ac9bhSTGm02Nr6Jp51w62S3tzpl0Q2IyYpZhVGA000soh26m-Qq6C5TfT2D5D5DTqZNH1jJxTS3dgYdEF6vPyn9yIbL4AH9i9n1nrto_tpfXijoMSW2s304UpEN58uy5enw/d/BEAUTIFUL-AI-GENERATED-WALLPAPER-1302023.png")',  // Reemplaza "ruta_de_tu_imagen" con la URL o la ruta local de tu imagen
    backgroundSize: 'cover',  // Ajusta el tamaño de la imagen según sea necesario
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',  // Ajusta la posición de la imagen
    minHeight: '100vh',  // Ajusta la altura mínima según sea necesario
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={mainStyle}>
      <Home />
      <Footer />
    </div>
  );
}

export default Main;