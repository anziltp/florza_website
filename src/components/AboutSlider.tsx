"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/aa.webp",
  "/images/abc.webp",
  "/images/bb.webp",
  "/images/ddc.webp"
];

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {images.map((img, index) => (
        <div
          key={img}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Image
            src={img}
            alt={`About Florza ${index + 1}`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}
