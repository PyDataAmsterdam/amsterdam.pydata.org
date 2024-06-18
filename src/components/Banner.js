import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          <Link to="/tickets">
            🚨 Don’t miss the Early Bird Ticket to save up to €60 until July 14! 🎫
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
