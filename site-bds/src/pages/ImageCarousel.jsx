import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css';

const ImageCarousel = () => {
  const images = [
    { src: '/img/photostation/station1.png', alt: 'Super Diable', description: 'Secteur Super Diable - 2400m' },
    { src: '/img/photostation/station2.png', alt: 'Grande Aiguille', description: 'Secteur Grande Aiguille - 2100m' },
    { src: '/img/photostation/station3.png', alt: 'Glacier', description: 'Secteur du Glacier - 3400m' },
    { src: '/img/photostation/station4.png', alt: 'Fée', description: 'Secteur La Fée - 2200m' },
    { src: '/img/photostation/station5.png', alt: 'Toura', description: 'Secteur Toura - 2600m' },
    // Ajoutez d'autres images avec leurs descriptions
  ];

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index} className="carousel" >
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.description}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
