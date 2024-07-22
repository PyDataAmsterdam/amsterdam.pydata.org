import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          <Link to="/tickets">
            Secure your ticket for the PyData Amsterdam 2024 conference! 🎫 🔗
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
