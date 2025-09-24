import { Link } from "react-router-dom";
import "./Navbar.css"; // custom styles

function Navbar() {
  return (
    
    <nav className="navbar">
      {/* Logo + Brand */}
      <div className="navbar-brand">
        <img src="/logo.png" alt="DataClimata Logo" className="logo" />
        <span className="brand-name">DataClimata</span>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/awareness">Awareness Hub</Link></li>
        <li><Link to="/farmers">Farmers</Link></li>
        <li><Link to="/clubsdashboard">Clubs(Students)</Link></li>
        <li><Link to="/researchers">Researchers(Data Bank)</Link></li>
        <li><Link to="/donations">Donations</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
