// import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp//Signup";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      {/* Navigation menu */}
      <nav>
        <ul>
          <li>
            {/* Link component for navigation without page reload */}
            <Link to="/">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
export default App;
