// src/components/Carrossel.js

import React from 'react';
import imagens from '../assets/carrossel';
import '../styles/carrossel.css';
import { useState } from 'react';

const Carrossel = () => {
    const [indexAtual, setIndexAtual] = useState(0);
    const [images, setImages] = useState(imagens);

    function voltaImagem(){
        setIndexAtual(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        console.log(images);
    }

    function proxImagem(){
        setIndexAtual(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }


  return (
    <div>
    <div className="carousel-container">
        <div className="carousel">
            <img src={imagens['cpe']} alt={`Imagem ${indexAtual}`} />
        </div>

        <div className="carousel-control left" onClick={voltaImagem}>&lt;</div>
        <div className="carousel-control right" onClick={proxImagem}>&gt;</div>
    </div>

    </div>
  );
};

export default Carrossel;