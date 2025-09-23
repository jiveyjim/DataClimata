// src/Pages/Awareness.jsx
import React from "react";
import "./Awareness.css";

function Awareness() {
  const articles = [
    {
      id: 1,
      title: "Why Tree Cover Matters in Urban Areas",
      description: "Trees not only cool cities but also absorb carbon and reduce flooding.",
      image: "/tree-cover.jpg", 
    },
    {
      id: 2,
      title: "Plastic Waste and Local Ecosystems",
      description: "How plastic pollution affects rivers, soil, and farming yields.",
      image: "/plastic-waste.jpg",
    },
    {
      id: 3,
      title: "Simple Steps to Lower Your Carbon Footprint",
      description: "Practical, everyday changes anyone can make to live greener.",
      image: "/carbon-footprint.jpg",
    },
    {
      id: 4,
      title: "Water Conservation in Agriculture",
      description: "Techniques farmers can use to save water and grow sustainably.",
      image: "/water-conservation.jpg",
    },
    {
      id: 5,
      title: "Why Soil Health Is Climate Health",
      description: "Healthy soils capture more carbon and boost food security.",
      image: "/soil-health.jpg",
    },
    {
      id: 6,
      title: "Youth-Led Climate Action",
      description: "How students are shaping the future of climate resilience.",
      image: "/student-climate-action.jpg",
    },
  ];

  return (
    <div className="awareness-page">
      {/* Page Header */}
      <header className="awareness-header">
        <h1>Awareness Hub</h1>
        <p>Climate knowledge simplified — stay informed, stay empowered.</p>
      </header>

      {/* Featured Article */}
      <section className="featured-article">
        <img
          src="/featured.jpg" // ✅ Replace with your featured image
          alt="Featured Climate Article"
        />
        <div className="featured-content">
          <h2>Why Local Data Matters for Global Climate Action</h2>
          <p>
            Climate predictions often fail to capture local realities. Learn how
            localized data collection by students can revolutionize climate
            action.
          </p>
          <button>Read More</button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        <h2>Latest Articles</h2>
        <div className="grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href="#">Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Resources */}
      <section className="resources">
        <h2>Educational Resources</h2>
        <ul>
          <li>🌍 <a href="#">UN Climate Reports (Simplified)</a></li>
          <li>📽 <a href="#">Watch: Climate Explained in 3 Minutes</a></li>
          <li>🌱 <a href="#">Local NGO Green Projects</a></li>
        </ul>
      </section>

      {/* Subscription Section */}
      <section className="subscribe">
        <h2>Stay Updated</h2>
        <p>Get weekly climate tips & local updates delivered to you.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Awareness;
