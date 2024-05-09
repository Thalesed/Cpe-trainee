// src/components/Carrossel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carrossel.css';
import { importAll } from '../utils/imageImporter'; // script para importar todas as imagens

const Carousel = () => {
    // importando imagens .PNG .JP?G e .SVG
    const images = importAll(require.context('../assets/carrossel', false, /\.(png|jpe?g|svg)$/));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000
  };
  

  return (
    // Carrossel/Slide com a biblioteca React-Slick
    <div className="slideBox">
    <Slider {...settings}>
        {/*Adiciona todas as imagens do diretorio src/assets/carrossel */}
        {Object.entries(images).map(([imageName, imageUrl]) => (
            <div key={imageName}>
                <img src={imageUrl} alt={imageName} />
            </div>
        ))}
    </Slider>
    </div>
  );
};

export default Carousel;
