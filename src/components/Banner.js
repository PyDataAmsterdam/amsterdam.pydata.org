import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          <Link to="/tickets">
            We kick off in less than a week! Secure your ticket now! 🔗 🎟️
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
