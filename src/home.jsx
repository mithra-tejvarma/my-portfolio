import React from "react";
import './home.css';

const Home = () => (
  <section id="home" className="home-section">
    <div className="home-content">
      <div className="home-left">
        <span id="h-t1">Hi</span>
        <span id="h-t2">I am</span>
        <span id="h-t3">MITHRA TEJ VARMA N</span>
      </div>
      <div className="home-right">
        <div className="n-path-animation">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`n-ball n-ball-${i+1}`}></div>
          ))}
          <svg className="n-path-svg" viewBox="0 0 120 200">
            <path id="n-path" d="M10,190 L10,10 L110,190 L110,10" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="8" />
          </svg>
        </div>
      </div>
    </div>
    <div className="home-gradient-bg"></div>
  </section>
);

export default Home;
