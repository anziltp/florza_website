"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/florza-logo-premium-bathroom-brand1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((y / h) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="progress" id="progress" style={{ width: `${progress}%` }}></div>
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src={logoImg} 
              alt="FLORZA Logo" 
              height={72} 
              style={{ width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
          <nav className="links">
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#collections">Collections</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#catalogue" className="nav-cta">
            Request Catalogue
          </a>
        </div>
      </header>
    </>
  );
}
