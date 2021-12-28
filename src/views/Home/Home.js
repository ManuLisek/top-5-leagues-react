import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Top 5 Leagues</h1>
      <p className="home__content">Welcome to the Top 5 Leagues. This page was created because I am learning programming and this is one of my projects. You can find here the current league tables, top scorers and highlights of the latest matches in the top 5 European leagues. The data comes from two different APIs.</p>
    </div>
  );
};

export default Home;