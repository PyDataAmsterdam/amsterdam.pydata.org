import React from "react";
import '../styles/layout.css';
import '../styles/global.css';

const BrandLogos = () => {
    const logos = [
        { src: "/images/sponsors/booking.png", alt: "Booking.com", url: "https://www.booking.com", className: "custom-booking-logo", sizeClass: "w-64"},
        { src: "/images/sponsors/hopsworks.png", alt: "Hopsworks", url: "https://www.hopsworks.ai", className: "custom-hopsworks-logo",  sizeClass: "w-64"},
        { src: "/images/sponsors/adyen.png", alt: "Adyen", url: "https://www.adyen.com", className: "custom-adyen-logo", sizeClass: "w-56"},
        { src: "/images/sponsors/coiled.png", alt: "Coiled", url: "https://www.coiled.io", className: "custom-coiled-logo", sizeClass: "w-40"},
        { src: "/images/sponsors/snowflake.png", alt: "Snowflake", url: "https://www.snowflake.com", className: "custom-snowflake-logo", sizeClass: "w-60"},
        { src: "/images/sponsors/bigdatarepublic.png", alt: "Big Data Republic", url: "https://www.bigdatarepublic.com", className: "custom-bdr-logo", sizeClass: "w-32"},
        { src: "/images/sponsors/axi.png", alt: "AXI", url: "https://www.axi.be", className: "custom-axi-logo", sizeClass: "w-32"},
        { src: "/images/sponsors/builders.png", alt: "Builders", url: "https://builders.studio/", className: "custom-builders-logo", sizeClass: "w-40"},
        // Add more logos as needed
    ];
    
    // Duplicate the logos array to create the infinite scroll effect
    const allLogos = [...logos, ...logos];

    return (
        <div className="scroll-container scroll-pause py-4">
        <div className="scroll-content">
            {allLogos.map((logo, index) => (
            <a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`scroll-item ${logo.className}`}
            >
                <img
                src={logo.src}
                alt={logo.alt}
                className={`h-auto ${logo.sizeClass}`}
                />
            </a>
            ))}
        </div>
        </div>
    );
    };

export default BrandLogos;