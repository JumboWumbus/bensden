"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageSliderProps {
  images: StaticImageData[];
  interval?: number;
  className?: string;
}

const ImageFlipper: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval, images.length]);

  return (
    <Image
      src={images[currentIndex]}
      alt={`Slide ${currentIndex + 1}`}
      className={`max-w-[50%] relative h-auto ${className}`}
    />
  );
};

export default ImageFlipper;
