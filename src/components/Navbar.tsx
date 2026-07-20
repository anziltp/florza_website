"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoImg from "@/assets/florza-logo-premium-bathroom-brand1-removebg-preview.png";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const isScrolledStyle = scrolled || menuOpen || pathname === '/products';

  return (
    <>
      <div className="progress" id="progress" style={{ width: `${progress}%` }}></div>
      <header id="header" className={isScrolledStyle ? "scrolled" : ""}>
        <div className="wrap">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 205, position: 'relative' }}>
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
          <button 
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products <span>&rarr;</span></Link>
          <Link href="/#collections" onClick={() => setMenuOpen(false)}>Collections <span>&rarr;</span></Link>
          <Link href="/#gallery" onClick={() => setMenuOpen(false)}>Gallery <span>&rarr;</span></Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>About <span>&rarr;</span></Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact <span>&rarr;</span></Link>
        </div>
      </header>
    </>
  );
}
