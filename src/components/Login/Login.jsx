import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import signup from "../../assets/signup.jpg";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get existing users from local storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find a user with matching username and password
    const user = users.find(
      (u) => u.userName === userName && u.userPassword === userPassword
    );

    if (user) {
      // If user is found, save the current user to local storage
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Redirect to dashboard
      window.location.href = "/dashboard";
    } else {
      // If user is not found, set an error message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <h1>Log In</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignin}>
            <div className="input-div">
              <FaUser />
              <input
                type="text"
                placeholder="Username"
                className="input-box"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="input-div">
              <RiLockPasswordLine />
              <input
                type="password"
                placeholder="Password"
                className="input-box"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="login-btn">Log in</button>
          </form>
        </div>
        <div className="login-image">
          <img src={signup} alt="Login" />
          <Link to="/" className="signup-link">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
