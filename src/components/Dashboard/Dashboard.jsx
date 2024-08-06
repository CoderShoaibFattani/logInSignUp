import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import productsData from "../../data";
import CardMUI from "../CardMUI/CardMUI";

const Dashboard = () => {
  // Get the current user from local storage
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  // If no user is found, render a message and a link to sign in
  if (!user) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper signin-message">
          <p>Please sign in to view the dashboard.</p>
          <Link to="/login" className="signin-link">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const handleSignout = () => {
    // Remove the current user from local storage
    localStorage.removeItem("currentUser");
    // Redirect to signin page
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h2 className="dashboard-header">
          Welcome to the Dashboard, {user.userName}!
        </h2>
        <div className="user-info">
          <p>Email: {user.userEmail}</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {productsData.map((el, index) => {
            return (
              <CardMUI
                key={index}
                title={el.title}
                desc={el.description}
                id={el.id}
                image={el.image}
              />
            );
          })}
        </div>
        <button onClick={handleSignout} className="signout-btn">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
