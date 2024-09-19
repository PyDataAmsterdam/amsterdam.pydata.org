import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          <Link to="/tickets">
            We kicked off! You can still secure your ticket and join the fun! 🔗 🎟️
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
