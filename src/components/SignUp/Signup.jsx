import { MdOutlineMailOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import signup from "../../assets/signup.jpg";
import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Check if passwords match
    if (userPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Get existing users from local storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    const newUser = { userName, userEmail, userPassword };

    // Add the new user to the array
    users.push(newUser);

    // Save the updated users array back to local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");

    // Redirect to signin page
    window.location.href = "/login";
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
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
              <MdOutlineMailOutline />
              <input
                type="email"
                placeholder="Your Email"
                className="input-box"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
            <div className="input-div">
              <RiLockPasswordLine />
              <input
                type="password"
                placeholder="Repeat Your Password"
                className="input-box"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
            </div>
            <div className="terms-checkbox">
              <input type="checkbox" required />
              <p>
                I agree to all statements in{" "}
                <strong style={{ textDecoration: "underline" }}>
                  Terms of service
                </strong>
              </p>
            </div>
            <button className="signup-btn">Register</button>
          </form>
        </div>
        <div className="signup-image">
          <img src={signup} alt="Signup" />
          <Link to="/login" className="login-link">
            I am already a member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
