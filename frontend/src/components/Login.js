import API from "../services/api";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch {
      alert("Login failed");
    }
  };

  return (
  <div>
    <h3>Login</h3>

    <input
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={login}>Login</button>
  </div>
);

  
}

export default Login;
