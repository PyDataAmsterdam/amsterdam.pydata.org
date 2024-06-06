import * as React from 'react';

const socialLinks = [
  { href: "https://www.linkedin.com/company/pydataamsterdam", icon: "/images/socials/linkedin.png", alt: "LinkedIn" },
  { href: "https://x.com/pydataamsterdam", icon: "/images/socials/x-icon.png", alt: "X" },
  { href: "https://www.youtube.com/@PyDataTV", icon: "/images/socials/youtube.webp", alt: "YouTube" },
  { href: "https://www.meetup.com/nl-NL/pydata-nl/", icon: "/images/socials/meetup.png", alt: "Meetup" }
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* Using flex-col for mobile and flex-row for larger screens */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start mb-8">
          <div className="p-5 text-center md:text-left md:order-1 w-full md:w-2/3">
            <p className="text-base font-bold">
              ABOUT US
            </p>
            <br />
            <p className="text-sm">
              Amsterdam has a vibrant, growing community of Python and data enthusiasts. PyData Amsterdam brings together this community and provides a forum for users and developers of open source data analysis tools to share ideas and learn from each other, through regular meetups and a yearly conference. Our events promote discussion of best practices, new approaches, and emerging technologies for data management, processing, analytics, and visualization.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="mx-2">
                  <img src={link.icon} alt={link.alt} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="p-5 text-center md:text-left md:order-2 w-full md:w-1/3">
            <p className="text-base font-bold">
              CONTACT
            </p>
            <br />
            <a href="mailto:amsterdam@pydata.org" className="text-sm mt-3 hover:underline">
              AMSTERDAM@PYDATA.ORG
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          PyData Amsterdam 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
