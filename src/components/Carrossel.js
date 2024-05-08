// src/components/Carrossel.js

import React from 'react';
import '../styles/carrossel.css';

const Carrossel = () => {
  return (
    <div>
    <div class="carousel-container">
        <div class="carousel">
            {/* Imagens */}
        </div>

        <div class="carousel-control left">&lt;</div>
        <div class="carousel-control right">&gt;</div>
    </div>

    <div class="central-box"></div>
    </div>
  );
};

export default Carrossel;