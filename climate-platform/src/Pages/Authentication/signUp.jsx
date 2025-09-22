import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup data:", formData);
    // 👉 Here you will send signup data to your backend with axios/fetch
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Account</h2>
      <form cl assName="signup-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Administrator Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Administrator Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Administrator Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Administrator Password</label>
          <input
            type="password"
            name="Password"
            placeholder="password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Administrator Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

      <div className="form-group">
          <label>Institution</label>
          <input
            type="string"
            name="Institution"
            placeholder="institution"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Club Account Number</label>
          <input
            type="Number"
            name="Club Account Number"
            placeholder="Account Number"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
