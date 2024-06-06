import React from 'react';
import { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ images }) => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px", 
        slidesToShow: 3, 
        speed: 500,
        rows: 2,
        slidesPerRow: 1, 
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, // Adjust the breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    rows: 2,
                    centerPadding: "10px",
                }
            }
        ]
    };  
    
    return (
        <div style={{ maxWidth: "100%", margin: "0 auto 3%", cursor: "pointer"}}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} onClick={() => {setIsOpen(true); setPhotoIndex(index);}}>
                        <img src={`/images/${image.filename}`} alt={image.alt} 
                        className="h-80 w-full object-cover" style={{paddingLeft: '7px', paddingRight: '7px' }}/> 
                    </div>
                ))}
            </Slider>
            {isOpen && (
                <Lightbox
                    mainSrc={`/images/${images[photoIndex].filename}`}
                    nextSrc={`/images/${images[(photoIndex + 1) % images.length].filename}`}
                    prevSrc={`/images/${images[(photoIndex + images.length - 1) % images.length].filename}`}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    );
};

const images = [
    { filename: '/impression/impression-1.JPG', alt: 'Description of image 1' },
    { filename: '/impression/impression-2.JPG', alt: 'Description of image 2' },
    { filename: '/impression/impression-3.JPG', alt: 'Description of image 3' },
    { filename: '/impression/impression-4.JPG', alt: 'Description of image 4' },
    { filename: '/impression/impression-5.JPG', alt: 'Description of image 5' },
    { filename: '/impression/impression-6.JPG', alt: 'Description of image 6' },
    { filename: '/impression/impression-7.JPG', alt: 'Description of image 7' },
    { filename: '/impression/impression-8.JPG', alt: 'Description of image 8' },
    { filename: '/impression/impression-9.JPG', alt: 'Description of image 9' },
    { filename: '/impression/impression-10.JPG', alt: 'Description of image 10' },
    { filename: '/impression/impression-11.JPG', alt: 'Description of image 11' },
    { filename: '/impression/impression-12.JPG', alt: 'Description of image 12' },
    { filename: '/impression/impression-13.JPG', alt: 'Description of image 13' },
    { filename: '/impression/impression-14.JPG', alt: 'Description of image 14' },
    { filename: '/impression/impression-15.JPG', alt: 'Description of image 15' },
    { filename: '/impression/impression-16.JPG', alt: 'Description of image 16' },
    // Add more images as needed
];

export default () => <Gallery images={images} />;