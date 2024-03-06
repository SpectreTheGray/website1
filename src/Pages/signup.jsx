import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './signup.css'; // Import CSS file

const SignUpPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const encodedPage1Route = encodeURIComponent("/Page1");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
        return;
      }

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const { token } = await response.json();

        // Store token in secure HTTP-only cookie
        document.cookie = `token=${token}; Secure; HttpOnly`;

        // Redirect to Page1 after successful login
        history.push(`/${encodedPage1Route}`);
      } else {
        setPasswordError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setPasswordError('An error occurred. Please try again later.');
    }
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  return (
    <div className="dashboard-container">
      <div className="app-bar">
        <h1 className="formfree-title">FormFree</h1>
      </div>
      <div className="content-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="sign-up-header">Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signin-input"
            onClick={clearErrors}
          />
          {emailError && <div className="error-message">{emailError}</div>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signin-input"
            onClick={clearErrors}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="signin-input"
            onClick={clearErrors}
          />
          {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
          <button type="submit" className="login-button">Sign Up</button>
          <p style={{ marginTop: '10px', color: '#fff' }}>
            Already have an account? <Link to="/">Click here to login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
