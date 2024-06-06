import React from "react";

const sponsors = [
  {
    company: "Adyen",
    logo: "/images/sponsors/adyen.png",
    tier: "diamond",
    url: "https://www.adyen.com",
  },
  {
    company: "Hopsworks",
    logo: "/images/sponsors/hopsworks.png",
    tier: "platinum",
    url: "https://www.hopsworks.ai",
  },
];

const SponsorColumns = () => {
  const diamondSponsors = sponsors.filter(
    (sponsor) => sponsor.tier === "diamond"
  );
  const platinumSponsors = sponsors.filter(
    (sponsor) => sponsor.tier === "platinum"
  );

  return (
    <div className="grey-background-section pt-24">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around items-center space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl mb-2 text-black">Our Diamond Sponsors</h1>
            {diamondSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex justify-center items-center min-h-[200px]"
              >
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.company}
                    className="w-56 h-auto mx-auto mb-2"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl mb-2 text-black">Our Platinum Sponsors</h1>
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex justify-center items-center min-h-[200px]"
              >
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.company}
                    className="w-64 h-auto mx-auto mb-2"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorColumns;
