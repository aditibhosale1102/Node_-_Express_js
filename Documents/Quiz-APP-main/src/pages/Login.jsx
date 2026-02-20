import { useState } from "react";
import { loginUser, getUserRole } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredential = await loginUser(email, password);
    const role = await getUserRole(userCredential.user.uid);

    if (role === "student") navigate("/student");
    if (role === "teacher") navigate("/teacher");
    if (role === "admin") navigate("/admin");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
