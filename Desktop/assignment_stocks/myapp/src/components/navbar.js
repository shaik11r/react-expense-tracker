import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_left">
        <div>Home</div>
        <div>actions</div>
        <div>carrers</div>
        </div>
        <div className="navbar_login">
          <Link to="/signup">SignUp</Link>
          <Link to="/login">SignIn</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
