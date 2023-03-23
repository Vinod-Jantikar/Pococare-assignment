import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/about">
        About us
      </Link>
      <Link style={{ textDecoration: "none" }} to="/contact">
        Contact us
      </Link>
      <Link style={{ textDecoration: "none" }} to="/notes">
        Notes
      </Link>
      <Link style={{ textDecoration: "none" }} to="/register">
        Register
      </Link>
      <Link style={{ textDecoration: "none" }} to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
