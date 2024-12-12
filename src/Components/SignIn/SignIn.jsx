import { useState } from "react";
import "./SignIn.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <h1 id="weeklyFriendsLogin">Weekly Friends</h1>
      <div className="login-card">
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
          <h2 className="loginToAccount">Login to Your Account</h2>
          <input type="email" placeholder="Email" className="login-input" />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="login-input"
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
          <a href="/signup" className="back-to-signup">
            Back to Sign Up
          </a>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
