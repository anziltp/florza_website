"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    if (sessionStorage.getItem("florza-preloader-shown")) {
      gsap.set(containerRef.current, { display: "none" });
      return;
    }
    
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("florza-preloader-shown", "true");
      }
    });

    // Initial state
    gsap.set(containerRef.current, { display: "flex" });
    gsap.set(textRef.current, { opacity: 0, y: 30, scale: 0.95 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

    tl.to(textRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" })
      .to(lineRef.current, { scaleX: 1, duration: 1.5, ease: "power3.inOut" }, "-=0.6")
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.8, ease: "power3.in" }, "+=0.4")
      .to(lineRef.current, { opacity: 0, duration: 0.5 }, "-=0.5")
      .to(containerRef.current, { yPercent: -100, duration: 1.2, ease: "expo.inOut" })
      .set(containerRef.current, { display: "none" });

  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0A0908",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div 
        ref={textRef} 
        style={{ 
          fontSize: "clamp(24px, 4vw, 36px)", 
          letterSpacing: "0.2em", 
          fontWeight: 600, 
          fontFamily: "var(--font-plus-jakarta), sans-serif", 
          display: "flex", 
          alignItems: "flex-start", 
          gap: "8px" 
        }}
      >
        FLORZA <span style={{ color: "#D4AF37", fontSize: "0.5em", marginTop: "2px" }}>®</span>
      </div>
      <div 
        ref={lineRef} 
        style={{ 
          width: "140px", 
          height: "1px", 
          backgroundColor: "#D4AF37", 
          marginTop: "24px",
          boxShadow: "0 0 10px rgba(212,175,55,0.5)"
        }}
      ></div>
    </div>
  );
}
