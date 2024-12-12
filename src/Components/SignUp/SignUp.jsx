import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="signup-container">
      <h1 id="weeklyFriendsSignUp">Weekly Friends</h1>
      <div className="signup-card">
        <div className="logo">
          <img
            src="/bible.png"
            alt="Weekly Friends Logo"
            className="logo-image"
          />
          <h1 className="title">Weekly Friends</h1>
          <p className="subtitle">Philip 2:2</p>
          <p className="verse">
            ”Then make my joy complete by being like-minded, having the same
            love, being one in spirit and of one mind.”
          </p>
        </div>
        <form method="POST">
          <h2 className="createAnAccount">Create an Account</h2>
          <input type="text" placeholder="Full Name" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="signup-input"
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <img src="/eyeSee.svg" alt="hide password" />
              ) : (
                <img src="/eyeHide.svg" alt="show password" />
              )}
            </span>
          </div>
          <Link to="/login" className="back-to-signin">
            Back to Sign In
          </Link>
          <button type="submit" className="signup-button">
            <Link to="/registrationsuccess">Sign-Up</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
