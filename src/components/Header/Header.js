import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Header.css";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="header" style={{color:'white'}}>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/order">Orders</Link>
      <Link to="/admin">Admin</Link>
      {loggedInUser.name ? (
              <span className="user-name"> {loggedInUser.name}</span>
            ) : (
              <Link to="/login" className="btn-success">
                Login
              </Link>
            )}
      
      </nav>
    </div>

  );
};

export default Header;
