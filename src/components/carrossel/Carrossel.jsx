import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style';
import { importAll } from '../../utils/imageImporter'; // script para importar todas as imagens
import { SlideBox, SlideImage } from './style';

import cpe from './images/cpe.png';
import html from './images/html.jpg';
import nd from './images/node.png';
import rect from './images/react.png';

const Carousel = () => {
    // importando imagens .PNG .JP?G e .SVG
    //const images = importAll(require.context('../assets/carrossel', false, /\.(png|jpe?g|svg)$/));

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
    <SlideBox>
        <div className="slideBox">
        <Slider {...settings}>
                <div>
                    <img src={cpe} alt="Imagem"></img>
                </div>
                <div>
                <img src={html} alt="Imagem"></img>
                </div>
                <div>
                <img src={nd} alt="Imagem"></img>
                </div>
                <div>
                <img src={rect} alt="Imagem"></img>
                </div>
        
        </Slider>
        </div>
    </SlideBox>
  );
};

export default Carousel;
