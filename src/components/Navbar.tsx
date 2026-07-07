"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/florza-logo-premium-bathroom-brand1-removebg-preview.png";
import Magnetic from "@/components/Magnetic";

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
              style={{ width: 'auto', objectFit: 'contain', transition: "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
              className="nav-logo-img"
            />
          </Link>
          <nav className="links">
            <Magnetic><Link href="/products">Products</Link></Magnetic>
            <Magnetic><Link href="/#collections">Collections</Link></Magnetic>
            <Magnetic><Link href="/#gallery">Gallery</Link></Magnetic>
            <Magnetic><Link href="/#about">About</Link></Magnetic>
            <Magnetic><Link href="/#contact">Contact</Link></Magnetic>
          </nav>
          <Magnetic strength={0.2}>
            <Link href="/#catalogue" className="nav-cta">
              Request Catalogue
            </Link>
          </Magnetic>
        </div>
      </header>
    </>
  );
}
