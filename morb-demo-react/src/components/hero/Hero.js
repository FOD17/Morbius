import React from 'react';
import BigMorb from '../../assets/morb.jpg';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bar">
        <img src={BigMorb} alt="morbin time baby" />
        <div className="hero-info">
          <h2>Classic Movie</h2>
          <p>A once in a generation classic!</p>
          <button>Buy Tickets!</button>
        </div>
      </div>
    </div>
  );
}
