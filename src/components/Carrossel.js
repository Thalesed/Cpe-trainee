// src/components/Carrossel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cpe from '../assets/carrossel/cpe.png';
import '../styles/carrossel.css';

import { useEffect, useState } from 'react';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Quantidade de itens visíveis ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000
  };

  return (
    <div className="slideBox">
    <Slider {...settings}>
      <div>
        <img src={cpe} alt="Imagem 1" />
      </div>
      <div>
        <img src="imagem2.jpg" alt="Imagem 2" />
      </div>
      <div>
        <img src="imagem3.jpg" alt="Imagem 3" />
      </div>
      {/* Adicione mais itens conforme necessário */}
    </Slider>
    </div>
  );
};

export default Carousel;
