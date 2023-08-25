import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement actual login logic here.
    // For simplicity, we'll just consider a hardcoded username and password.
    if (username === "user" && password === "password") {
      onLogin();
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        Forgot password?
        <button type="submit">Login</button>
        Don’t have an account? Signup
      </form>
    </div>
  );
}

export default LoginForm;
