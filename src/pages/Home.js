// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import Carrossel from '../components/Carrossel';
import Login from '../components/Login'

const Home = () => {
  return (
    <div>
        <Header />
        <Carrossel />
        <Login />
    </div>
  );
};

export default Home;
