import React, { useState, useEffect } from 'react';
import { Background,Background_2,Background_3 } from '../utils/constants';
const BackgroundImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    Background,
    Background_2,
    Background_3,
   
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index (loop back to the start if at the end)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds (2000 milliseconds)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
  };

  return <div style={backgroundImageStyle}></div>;
};

export default BackgroundImageSlider;
