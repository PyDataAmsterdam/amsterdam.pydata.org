import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          <Link to="/tickets">
            Don’t miss out on PyData Amsterdam 🐍. Secure your ticket now! 🔗 🎟️
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
