import { useState } from "react";
import { Link } from "react-router-dom";
import "./Forgot.css"; // make sure the CSS file matches

function Forgot() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    alert("If this email is registered, a reset link has been sent.");
  };

  return (
    <div className="forgot-container">
      <h1 className="forgot-title">Forgot Password</h1>

      <form className="forgot-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="forgot-btn">
          Send Reset Link
        </button>
      </form>

      <p className="back-to-login">
        Remembered your password? <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
}

export default Forgot;
