"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP Reveal Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state setup
    gsap.set(contentRef.current?.children || [], { y: 40, opacity: 0 });
    gsap.set(imageRef.current, { x: 100, opacity: 0, scale: 1.05 });
    gsap.set(cardRef.current, { y: 60, opacity: 0, scale: 0.95 });

    // Animation sequence
    tl.to(imageRef.current, { duration: 1.5, x: 0, opacity: 1, scale: 1 })
      .to(contentRef.current?.children || [], { duration: 1, y: 0, opacity: 1, stagger: 0.15 }, "-=1")
      .to(cardRef.current, { duration: 1, y: 0, opacity: 1, scale: 1, ease: "back.out(1.2)" }, "-=0.6");

    // Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20; // max 20px shift
      const yPos = (clientY / innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(cardRef.current, {
        x: -xPos * 1.5,
        y: -yPos * 1.5,
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
      <div className="hero-split">
        {/* Left Content (55%) */}
        <div className="hero-content" ref={contentRef}>
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Premium Sanitary Ware
          </div>
          <h1 className="hero-title" ref={titleRef}>
            Redefining Luxury<br />For Every Bathroom
          </h1>
          <p className="hero-desc">
            Discover premium wash basins, water closets, bathroom accessories, and modern sanitary ware crafted with elegance, durability, and timeless design.
          </p>
          <div className="hero-actions">
            <a href="#collections" className="btn btn-primary-gold">
              Explore Collection <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </a>
          </div>
        </div>

        {/* Right Image (45%) */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container" ref={imageRef}>
            <div className="image-overlay"></div>
            <Image
              src="/images/luxury_bathroom_hero.png"
              alt="Luxury Bathroom Interior"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          {/* Floating Product Card */}
          <div className="glass-card floating-product-card" ref={cardRef}>
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
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="hero-decor decor-1"></div>
      <div className="hero-decor decor-2"></div>
      
      {/* Scroll Indicator */}
      <div className="scroll-cue">
        <span style={{ color: "var(--black)" }}>Scroll</span>
        <div className="dot" style={{ background: "linear-gradient(to bottom, var(--black), transparent)" }}></div>
      </div>
    </section>
  );
}
