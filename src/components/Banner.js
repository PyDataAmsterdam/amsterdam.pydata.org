import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          <Link to="/program">
            🎉 PyData Amsterdam 2024 Program is live! 🎉 🔗
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
