import * as React from "react";

const HeroSectionTitle = () => {
  return (
    <div className="container w-auto mx-auto px-4 flex flex-wrap items-center justify-center">
      <div className="w-full text-center">
        <div className="hero-section-title">
          <span className="text-6xl md:text-8xl font-bold pydata-py">
            PyData Amsterdam
          </span>
        </div>
        <h1 className="text-2xl md:text-7xl font-bold hero-section-title">
          September 18-20, 2024
        </h1>
      </div>
    </div>
  );
};

export default HeroSectionTitle;