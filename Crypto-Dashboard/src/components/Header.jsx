import { Link } from "react-router";

const Header = () => {
  return (
    <div className="top-nav">
      <Link to="/">Dashboard</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
