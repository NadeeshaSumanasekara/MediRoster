import React, { useState } from "react";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import MainPage from "./pages/MainPage"; 
import NavBar from "./components/NavBar"; 
import SideBar from "./components/SideBar"; 

function App() {
  return (
    <div>
      <SideBar/>
    </div>
  );
}

export default App;
