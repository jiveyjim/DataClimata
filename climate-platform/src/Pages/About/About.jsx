import "./About.css";

function About() {
  return (
    <div className="about-container">
  
      <section className="about-hero">
        <h1>About DataClimata</h1>
        <p className="tagline">Insight for a Greener Future 🌍</p>
      </section>

      <div className="about-image-container">
        <img src="/about_image.jpg" alt="Students in climate action" className="about-image" />
        <p className="image-caption">Students leading the future of climate action 🌱</p>
      </div>

      {/* Our Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          DataClimata was born out of the need for accurate, localized climate
          insights. We realized that much of today’s climate prediction struggles
          with low data accuracy due to limited grassroots data collection. By
          empowering students, schools, and communities, we are building a
          network that feeds real-time, verified climate data into meaningful
          action.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="about-section">
        <h2>Our Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To empower students and communities to
          collect, validate, and share climate data that drives impactful
          climate solutions.  
          <br />
          <strong>Vision:</strong> A world where every community has access to
          accurate climate information, enabling sustainable action for future
          generations.
        </p>
      </section>

      {/* How it Works */}
      <section className="about-section">
        <h2>How It Works</h2>
        <ul>
          <li>
            🎓 <strong>Students:</strong> Join climate clubs, collect and upload
            local data (soil pH, rainfall, waste, etc.), and propose localized
            projects.
          </li>
          <li>
            🚜 <strong>Farmers:</strong> Receive localized predictions and advice
            based on combined student + official datasets.
          </li>
          <li>
            🌍 <strong>Citizens:</strong> Access simple, understandable climate
            awareness resources and local insights.
          </li>
          <li>
            🔬 <strong>Researchers:</strong> Access open datasets and
            visualizations for analysis and innovation.
          </li>
          <li>
            💚 <strong>Donors:</strong> Support student-led climate projects with
            full transparency.
          </li>
        </ul>
      </section>

      {/* Impact Goals */}
      <section className="about-section">
        <h2>Our Impact Goals</h2>
        <p>
          By combining student-driven data collection with advanced analysis, we
          aim to:  
        </p>
        <ul>
          <li>Increase the accuracy of localized climate predictions.</li>
          <li>Empower the next generation with climate knowledge and skills.</li>
          <li>Drive relevant community projects (tree planting, waste cleanup,
          soil management).</li>
          <li>Provide open, free datasets to fuel research and innovation.</li>
          <li>Mobilize donor support to scale real impact on the ground.</li>
        </ul>
      </section>

      {/* Why Different */}
      <section className="about-section">
        <h2>Why DataClimata?</h2>
        <p>
          Unlike existing platforms that provide only general climate insights,
          DataClimata focuses on <strong>hyper-local, student-driven data</strong>.
          Our model ensures that climate action is relevant, community-based, and
          sustainable — no more “one-size-fits-all” projects, but targeted
          solutions where they matter most.
        </p>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Be Part of the Change</h2>
        <p>
          Whether you’re a student, farmer, citizen, researcher, or supporter —
          you have a role in shaping our planet’s future.  
        </p>
        <button className="join-btn">Join DataClimata</button>
      </section>
    </div>
  );
}

export default About;
