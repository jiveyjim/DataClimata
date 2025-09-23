import React from "react";
import "./home.css";

function Home() {
  return (
   <div>
    <section className="hero-bg">
  <div className="hero-text">
    <h1>🌍 Bridging the Climate Data Gap</h1>
    {/* <p>
      Empowering <strong>students, farmers, researchers, and citizens</strong>  
      with localized climate insights to co-create sustainable solutions.
    </p> */}
    <div className="hero-buttons">
      <button className="hero-btn primary">Get Involved</button>
      <button className="hero-btn secondary">Learn More</button>
    </div>
  </div>
</section>


      {/* === About Section (unchanged) === */}
      <section className="about">
        <h2>About the Platform</h2>
        <p>
          We aim to bridge the climate data gap 🌍. Students across regions will
          provide climate observations based on their level of education, which
          are combined with global datasets to generate localized forecasts.
          This empowers <strong>students, farmers, researchers, and supporters</strong> 
          to co-create climate solutions tailored to their communities.
        </p>
      </section>
      {/* === Audiences Section === */}
<section className="audiences">
  <h2>Who Benefits?</h2>
  <div className="audience-grid">
    {/* Students / Clubs */}
    <div className="audience-card">
      <img src="/studentz.jpg" alt="Students and Climate Clubs" />
      <h3>Students & Climate Clubs</h3>
      <p>Students collect climate data, gain leadership skills, and co-create localized solutions.</p>
      <a href="#students" className="btn">Learn More</a>
    </div>

    {/* Farmers */}
    <div className="audience-card">
      <img src="/farmers.jpg" alt="Farmers" />
      <h3>Farmers</h3>
      <p>Farmers receive localized forecasts and alerts that protect crops and livelihoods.</p>
      <a href="#farmers" className="btn">Learn More</a>
    </div>

    {/* Citizens */}
    <div className="audience-card">
      <img src="/people.jpg" alt="Citizens" />
      <h3>Citizens</h3>
      <p>Simple AI-driven insights empower citizens to make eco-friendly lifestyle choices.</p>
      <a href="#citizens" className="btn">Learn More</a>
    </div>

    {/* Researchers */}
    <div className="audience-card">
      <img src="/researchers.jpg" alt="Researchers" />
      <h3>Researchers</h3>
      <p>Free, transparent datasets support innovation and deepen climate knowledge.</p>
      <a href="#researchers" className="btn">Learn More</a>
    </div>
  </div>
</section>


      {/* === Impact Section (new) === */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>80%</h3>
            <p>of climate predictions miss local data.</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>students trained as climate leaders.</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>of donations fund projects that matter locally.</p>
          </div>
        </div>
      </section>
      {/* === Location Climate Data Section === */}
<section className="climate-data">
  <h2>Check Local Climate Insights</h2>
  <p>Enter your location to see real-time data on temperature, rainfall, and humidity.</p>

  <div className="climate-form">
    <input type="text" placeholder="Enter your city or region..." />
    <button>Get Climate Data</button>
  </div>

  <div className="climate-results">
    <div className="climate-card">
      <span className="icon">🌡️</span>
      <h3>Temperature</h3>
      <p>-- °C</p>
    </div>
    <div className="climate-card">
      <span className="icon">🌧️</span>
      <h3>Rainfall</h3>
      <p>-- mm</p>
    </div>
    <div className="climate-card">
      <span className="icon">💧</span>
      <h3>Humidity</h3>
      <p>-- %</p>
    </div>
  </div>
</section>
{/* === Call-to-Action Section === */}
      <section className="cta-section">
        <div className="cta-overlay">
          <h2>🌍 Take Action Today</h2>
          <p>
            Be part of the movement to bridge the climate data gap.  
            Whether you’re a student, farmer, researcher, or supporter –  
            together we can co-create localized climate solutions.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn volunteer">🌱 Volunteer</button>
            <button className="cta-btn donate">💚 Donate</button>
            <button className="cta-btn share">📢 Spread Awareness</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
