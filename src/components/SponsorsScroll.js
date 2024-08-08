import React, { useEffect, useRef, useState } from "react";
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
    ];
    
    const containerRef = useRef(null);
    const observerRef = useRef(null);
    const [visibleLogos, setVisibleLogos] = useState([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const options = {
            root: container,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting && entry.target.dataset.index === "0") {
                    // When the first logo is about to leave the viewport, append a new set of logos
                    setVisibleLogos(prev => [...prev, ...logos]);
                }
            });
        };

        observerRef.current = new IntersectionObserver(callback, options);

        // Initial set of logos
        setVisibleLogos([...logos, ...logos]);

        const updateScrollAnimation = () => {
            const scrollContent = container.querySelector('.scroll-content');
            if (scrollContent) {
                const scrollWidth = scrollContent.scrollWidth / 2;
                container.style.setProperty('--scroll-width', `${scrollWidth}px`);
                container.style.setProperty('--animation-duration', `${scrollWidth / 50}s`);
            }
        };

        updateScrollAnimation();
        window.addEventListener('resize', updateScrollAnimation);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            window.removeEventListener('resize', updateScrollAnimation);
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !observerRef.current) return;

        // Observe the first logo
        const firstLogo = container.querySelector('[data-index="0"]');
        if (firstLogo) {
            observerRef.current.observe(firstLogo);
        }
    }, [visibleLogos]);

    return (
        <div ref={containerRef} className="scroll-container scroll-pause py-4">
            <div className="scroll-content">
                {visibleLogos.map((logo, index) => (
                    <a
                        key={`${logo.alt}-${index}`}
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`scroll-item ${logo.className}`}
                        data-index={index % logos.length}
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