import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css';

const ImageCarousel = () => {
  const images = [
    { src: '/img/logement/appart1.jpg',description: 'Logement - La Muzelle'},
    { src: '/img/logement/appart2.jpg',description: 'Logement - La Muzelle'},
    { src: '/img/logement/appart3.jpg',description: 'Logement - La Muzelle'},
    { src: '/img/logement/appart4.jpg',description: 'Logement - La Muzelle'},
    { src: '/img/logement/appart5.png',description: 'La Muzelle vers Le Diable (Télésiège)'},
    { src: '/img/logement/appart6.png',description: 'La Muzelle dans les deux alpes'},
    // Ajoutez d'autres images avec leurs descriptions
  ];

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index} className="carousel" >
          <img src={image.src} />
          <p className="legend">{image.description}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
