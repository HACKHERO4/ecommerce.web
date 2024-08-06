import React, { useState, useEffect } from 'react';
import './ccs.css';

// Define the images array with paths to the images and captions
const images = [
    { src: process.env.PUBLIC_URL + '/shoe1.jpeg', caption: 'Quality and Comfort our shoes are made with high qualiy materials' },
    { src: process.env.PUBLIC_URL + '/shoe2.jpeg', caption: 'Unique Design stand out from the crowd' },
    { src: process.env.PUBLIC_URL + '/shoe3.jpeg', caption: 'Durability our shoes are built to last' }
];

function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to show the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    // Function to show the previous slide (not used automatically but for completeness)
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    // Use useEffect to set up an interval for automatic sliding
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slides every 3 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(${-100 * currentSlide}%)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image.src} alt={`Slide ${index + 1}`} />
                        <div className="overlay">{image.caption}</div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default ImageSlider;
