import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Quiz App</h2>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
