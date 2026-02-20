import { useState } from "react";
import { registerUser } from "../services/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(email, password, role);
    alert("User Registered");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
