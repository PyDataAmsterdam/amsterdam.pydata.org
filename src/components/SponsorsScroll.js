import React, { useEffect, useRef, useState } from "react";
import '../styles/layout.css';
import '../styles/global.css';

const BrandLogos = () => {
    const logos = [
        { src: "/images/sponsors/adyen.png", alt: "Adyen", url: "https://www.adyen.com", className: "custom-adyen-logo", sizeClass: "w-56"},
        { src: "/images/sponsors/booking.png", alt: "Booking.com", url: "https://www.booking.com", className: "custom-booking-logo", sizeClass: "w-64"},
        { src: "/images/sponsors/hopsworks.png", alt: "Hopsworks", url: "https://www.hopsworks.ai", className: "custom-hopsworks-logo",  sizeClass: "w-64"},
        { src: "/images/sponsors/heineken_alt.png", alt: "Heineken", url: "https://www.heineken.com", className: "custom-heineken-logo",  sizeClass: "w-64"},
        { src: "/images/sponsors/jetbrains.svg", alt: "JetBrains", url: "https://www.jetbrains.com", className: "custom-jetbrains-logo",  sizeClass: "w-64"},
        { src: "/images/sponsors/polars.svg", alt: "Polars", url: "https://www.pola.rs", className: "custom-polars-logo", sizeClass: "w-48"},
        { src: "/images/sponsors/roseman_labs.png", alt: "Roseman Labs", url: "https://rosemanlabs.com/en/", className: "custom-roseman-logo", sizeClass: "w-64"},
        { src: "/images/sponsors/zencoder.svg", alt: "Zencoder", url: "https://zencoder.ai", className: "custom-zencoder-logo", sizeClass: "w-64"},
        { src: "/images/sponsors/coiled.png", alt: "Coiled", url: "https://www.coiled.io", className: "custom-coiled-logo", sizeClass: "w-40"},
        { src: "/images/sponsors/snowflake.png", alt: "Snowflake", url: "https://www.snowflake.com", className: "custom-snowflake-logo", sizeClass: "w-60"},
        { src: "/images/sponsors/neo4j.svg", alt: "Neo4j", url: "https://www.neo4j.com", className: "custom-neo4j-logo", sizeClass: "w-48"},
        { src: "/images/sponsors/picnic.svg", alt: "Picnic", url: "https://picnic.app/", className: "custom-picnic-logo", sizeClass: "w-24"},
        { src: "/images/sponsors/bigdatarepublic.png", alt: "Big Data Republic", url: "https://www.bigdatarepublic.com", className: "custom-bdr-logo", sizeClass: "w-32"},
        { src: "/images/sponsors/axi.png", alt: "AXI", url: "https://www.axi.be", className: "custom-axi-logo", sizeClass: "w-32"},
        { src: "/images/sponsors/probabl.svg", alt: "probabl", url: "https://probabl.ai/", className: "custom-probabl-logo", sizeClass: "w-36"},
        { src: "/images/sponsors/builders.png", alt: "Builders", url: "https://builders.studio/", className: "custom-builders-logo", sizeClass: "w-32"},
    ];
    
    const containerRef = useRef(null);
    const observerRef = useRef(null);
    const [visibleLogos, setVisibleLogos] = useState([]);

    const updateScrollAnimation = () => {
        const container = containerRef.current;
        const scrollContent = container?.querySelector('.scroll-content');
        if (scrollContent) {
            const scrollWidth = scrollContent.scrollWidth / 2;
            container.style.setProperty('--scroll-width', `${scrollWidth}px`);
            container.style.setProperty('--animation-duration', `${scrollWidth / 50}s`);
        }
    };

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
                    setVisibleLogos(prev => [...prev, ...logos]);
                }
            });
        };

        observerRef.current = new IntersectionObserver(callback, options);

        // Initial set of logos
        setVisibleLogos([...logos, ...logos]);

        // Use a timeout to ensure the DOM has updated before calculating dimensions
        setTimeout(() => {
            updateScrollAnimation();
        }, 0);

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

        // Update animation after logos have been rendered
        updateScrollAnimation();
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