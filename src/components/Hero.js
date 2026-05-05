import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="word">Zamonaviy </span>
          <span className="word">Axborot</span>
          <span className="word">Texnologiyalari</span>
        </h1>
        
        <p className="hero-subtitle">
          Saatli xizmatlar va raqamli yechimlar bilan sizning biznesingizni kengaytiring
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary">Biz haqida</button>
          <button className="btn btn-secondary">Bog'lanish</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Mijozlar</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Yillar tajribasi</span>
          </div>
          <div className="stat">
            <span className="stat-number">99%</span>
            <span className="stat-label">Qoniqtirish darajasi</span>
          </div>
        </div>
      </div>

   
    </section>
  );
}

export default Hero;
