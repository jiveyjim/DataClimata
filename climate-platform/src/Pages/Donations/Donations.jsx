import "./donations.css";
function Donations() {
  return (
    <div className="donations">
      {/* === Hero Section === */}
      <section className="donations-hero">
        <h1>🌍 Your Support Fuels Local Climate Solutions</h1>
        <p>
          Every donation helps train climate leaders, empower farmers, and protect
          the environment. Together, we can bridge the climate data gap.
        </p>
        <button className="donate-btn">Donate Now</button>
      </section>

      {/* === Impact Counters === */}
      <section className="donations-impact">
        <div className="impact-card">
          <h2>1000+</h2>
          <p>Students trained as climate leaders</p>
        </div>
        <div className="impact-card">
          <h2>50+</h2>
          <p>Communities empowered with local insights</p>
        </div>
        <div className="impact-card">
          <h2>80%</h2>
          <p>More accurate forecasts with local data</p>
        </div>
      </section>

      {/* === Donation Tiers === */}
      <section className="donations-tiers">
        <h2>Choose Your Impact</h2>
        <div className="tier-grid">
          <div className="tier-card">
            <span className="icon">🌱</span>
            <h3>$10</h3>
            <p>Plant 10 Trees</p>
            <button className="donate-btn small">Donate</button>
          </div>
          <div className="tier-card">
            <span className="icon">🎓</span>
            <h3>$25</h3>
            <p>Train a Student Climate Leader</p>
            <button className="donate-btn small">Donate</button>
          </div>
          <div className="tier-card">
            <span className="icon">🚜</span>
            <h3>$50</h3>
            <p>Support a Farmer with Insights</p>
            <button className="donate-btn small">Donate</button>
          </div>
          <div className="tier-card">
            <span className="icon">📡</span>
            <h3>$100</h3>
            <p>Fund a Local Data Collection Project</p>
            <button className="donate-btn small">Donate</button>
          </div>
        </div>
      </section>

      {/* === Custom Amount === */}
      <section className="donations-custom">
        <h2>Enter Your Own Amount</h2>
        <div className="custom-donate">
          <input type="number" placeholder="$50" />
          <select>
            <option>One-time</option>
            <option>Monthly</option>
          </select>
          <button className="donate-btn">Donate</button>
        </div>
      </section>

      {/* === Call to Action === */}
      <section className="donations-cta">
        <h2>💚 Together, We Can Make a Difference</h2>
        <p>
          Your contribution powers real projects that matter locally.
        </p>
        <button className="donate-btn big">Donate Today</button>
      </section>
    </div>
  );
}

export default Donations;