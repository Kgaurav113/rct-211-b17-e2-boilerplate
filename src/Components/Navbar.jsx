import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        <div>
          {" "}
          <Link to="/login">
            <button data-cy="navbar-login-button">LOGIN</button>
          </Link>
        </div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
      </div>
    </div>
  );
};

export default Navbar;
