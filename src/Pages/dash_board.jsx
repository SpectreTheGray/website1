import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './dash_board.css';

const encodedSignUpRoute = encodeURIComponent("/signup");

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="app-bar">
        <div className="formfree-title">FormFree</div>
        {/* Use Link component for navigation */}
        <Link to={`/${encodedSignUpRoute}`} className="signup-button">Sign Up</Link>
      </div>
      <div className="content-container">
        <div className="login-form">
          <div className="login-heading">Login Here</div>
          <form>
            <input type="email" placeholder="Email" className="signin-input" />
            <input type="password" placeholder="Password" className="signin-input" />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
