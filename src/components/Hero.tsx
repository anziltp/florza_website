"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Reveal Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state setup
    gsap.set(heroRef.current, { opacity: 0 });
    gsap.set(bgRef.current, { scale: 1.1 });
    gsap.set(contentRef.current?.children || [], { y: 40, opacity: 0 });
    gsap.set(cardRef.current, { y: 60, opacity: 0, scale: 0.95 });

    // Animation sequence
    tl.to(heroRef.current, { duration: 1, opacity: 1 })
      .to(bgRef.current, { duration: 4, scale: 1, ease: "power1.out" }, "-=1") // Ken Burns zoom
      .to(contentRef.current?.children || [], { duration: 1, y: 0, opacity: 1, stagger: 0.2 }, "-=3.5")
      .to(cardRef.current, { duration: 1, y: 0, opacity: 1, scale: 1, ease: "back.out(1.2)" }, "-=3");

    // Continuous floating animation for card
    gsap.to(cardRef.current, {
      y: "-=15",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20; // max 20px shift
      const yPos = (clientY / innerHeight - 0.5) * 20;

      gsap.to(bgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(cardRef.current, {
        x: -xPos * 2,
        y: -yPos * 2,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <section className="premium-hero" ref={heroRef}>
      
      {/* Background Image & Overlay */}
      <div className="hero-bg-wrap" ref={bgRef}>
        <Image
          src="/images/luxury_bathroom_hero.png"
          alt="Luxury Bathroom Interior"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="hero-content" ref={contentRef}>
        <div className="eyebrow" style={{ color: "var(--gold)", letterSpacing: "2px", fontWeight: "700" }}>
          PREMIUM SANITARY WARE
        </div>
        <h1 className="hero-title">
          Redefining Luxury<br />For Every Bathroom
        </h1>
        <p className="hero-desc">
          Discover premium wash basins, water closets, bathroom accessories, and modern sanitary ware crafted with elegance, durability, and timeless design.
        </p>
        <div className="hero-actions">
          <a href="#collections" className="btn-primary-gold">
            Explore Collection <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </a>
        </div>
      </div>

      {/* Floating Product Card */}
      <div className="floating-product-card" ref={cardRef}>
        <div className="card-badge">Signature Line</div>
        <div className="card-image">
          <Image
            src="/images/premium_basin_product.png"
            alt="Premium Gold Basin"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="card-info">
          <div className="card-model">FLZ-WB-104</div>
          <h4>Aurelia Oval Basin</h4>
          <a href="#" className="card-link">View Details →</a>
        </div>
      </div>

    </section>
  );
}
