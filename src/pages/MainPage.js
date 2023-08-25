import React from "react";
import "./MainPage.css";

function MainPage({ onLogout }) {
  return (
    <div className="main-page">
      <h2>Welcome to the Main Page</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default MainPage;
