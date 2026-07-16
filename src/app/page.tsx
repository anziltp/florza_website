"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import basinImg from "@/assets/webp_images/washbas23.webp";
import logoImg from "@/assets/florza-logo-premium-bathroom-brand1-removebg-preview.png";
import closetImg from "@/assets/webp_images/washbas25.webp";
import faucetImg from "@/assets/webp_images/washbas26.webp";

// Category Images
import cat1 from "@/assets/webp_images/washbas1.webp";
import cat2 from "@/assets/webp_images/washbas2.webp";
import cat3 from "@/assets/webp_images/washbas3.webp";
import cat4 from "@/assets/webp_images/washbas4.webp";
import cat5 from "@/assets/webp_images/washbas5.webp";
import cat6 from "@/assets/webp_images/washbas6.webp";
import cat7 from "@/assets/webp_images/washbas7.webp";
import cat8 from "@/assets/webp_images/washbas8.webp";

// Collection Images
import col1 from "@/assets/webp_images/washbas9.webp";
import col2 from "@/assets/webp_images/washbas10.webp";
import col3 from "@/assets/webp_images/washbas11.webp";
import col4 from "@/assets/webp_images/washbas13.webp";
import col5 from "@/assets/webp_images/washbas14.webp";
import col6 from "@/assets/webp_images/washbas15.webp";

// Gallery Images
import gal1 from "@/assets/webp_images/washbas16.webp";
import gal2 from "@/assets/webp_images/washbas17.webp";
import gal3 from "@/assets/webp_images/washbas18.webp";
import gal4 from "@/assets/webp_images/washbas19.webp";
import gal5 from "@/assets/webp_images/washbas20.webp";
import gal6 from "@/assets/webp_images/washbas22.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const inspireBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testiTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Parallax background for inspire section
    const handleScroll = () => {
      const y = window.scrollY;
      const bgOffset = (y % 2000) / 2000 * 40;
      if (inspireBgRef.current) {
        inspireBgRef.current.style.transform = `translateY(${bgOffset - 20}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Initial hero pour-in animation
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add("in");
      }
    }, 200);

    // GSAP ScrollTrigger Batch Animations
    ScrollTrigger.batch(".reveal", {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }),
      start: "top 85%",
    });

    ScrollTrigger.batch(".reveal-scale", {
      onEnter: batch => gsap.to(batch, { opacity: 1, scale: 1, stagger: 0.15, duration: 0.8, ease: "back.out(1.2)" }),
      start: "top 85%",
    });

    // Counters observer - trigger on scroll
    ScrollTrigger.create({
      trigger: ".stats",
      start: "top 75%",
      onEnter: () => {
        const counters = document.querySelectorAll(".counter");
        counters.forEach((el) => {
          const target = parseInt((el as HTMLElement).dataset.target || "0", 10);
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(t);
            }
            el.textContent = cur.toString();
          }, 40);
        });
      },
      once: true
    });

    // Testimonials Carousel
    if (testiTrackRef.current) {
      const track = testiTrackRef.current;
      // We assume the track has duplicated content for seamless looping
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* STATS */}
      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat reveal">
            <div className="num"><span className="counter" data-target="15">0</span><span className="gold">+</span></div>
            <div className="label">Years Experience</div>
          </div>
          <div className="stat reveal">
            <div className="num"><span className="counter" data-target="500">0</span><span className="gold">+</span></div>
            <div className="label">Products</div>
          </div>
          <div className="stat reveal">
            <div className="num"><span className="counter" data-target="100">0</span><span className="gold">+</span></div>
            <div className="label">Dealers</div>
          </div>
          <div className="stat reveal">
            <div className="num"><span className="counter" data-target="10">0</span><span className="gold">K+</span></div>
            <div className="label">Happy Customers</div>
          </div>
        </div>
      </section>

      <div className="seam"></div>

      {/* CATEGORIES */}
      <section className="sec" id="categories">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Browse By Category</div>
            <h2>Every Fixture, Considered</h2>
            <p>From the first basin you touch each morning to the finishing hardware no one notices until it's missing — every category is engineered for quiet, lasting luxury.</p>
          </div>
          <div className="cat-grid">
            <div className="cat-card reveal">
              <Image src={cat1} alt="One Piece Closets" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M8 8V6a4 4 0 018 0v2" />
              </svg>
              <div><h4>One Piece Closets</h4><div className="count">48 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat2} alt="Water Closets" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M4 12h16M4 12a8 4 0 0016 0M9 12V6h6v6" />
              </svg>
              <div><h4>Water Closets</h4><div className="count">62 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat3} alt="Wash Basins" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <ellipse cx="12" cy="14" rx="8" ry="4" />
                <path d="M12 4v6" />
              </svg>
              <div><h4>Wash Basins</h4><div className="count">94 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat4} alt="Counter Top Basins" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M3 18h18M6 18V9a2 2 0 012-2h8a2 2 0 012 2v9" />
              </svg>
              <div><h4>Counter Top Basins</h4><div className="count">36 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat5} alt="Table Top Basins" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <rect x="3" y="14" width="18" height="4" rx="1" />
                <ellipse cx="12" cy="10" rx="6" ry="3" />
              </svg>
              <div><h4>Table Top Basins</h4><div className="count">28 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat6} alt="Wall Hung Basins" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M4 10h16v3a3 3 0 01-3 3H7a3 3 0 01-3-3z" />
                <path d="M4 10V6h16v4" />
              </svg>
              <div><h4>Wall Hung Basins</h4><div className="count">22 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat7} alt="Bathroom Accessories" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
              <div><h4>Bathroom Accessories</h4><div className="count">140 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <Image src={cat8} alt="Faucets" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.3 }} />
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M6 4v6a4 4 0 004 4v6M6 4h4" />
              </svg>
              <div><h4>Faucets</h4><div className="count">86 Products</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="sec" id="products" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Featured Products</div>
            <h2>The Signature Line</h2>
            <p>Our most requested pieces — chosen for the way light moves across their surface as much as for what they do.</p>
          </div>
          <div className="prod-grid">
            <div className="prod-card reveal">
              <div className="prod-visual">
                <span className="badge">Premium</span>
                <Image src={basinImg} alt="Aurelia Oval Basin" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="prod-body">
                <div className="pcat">Wash Basins</div>
                <h4>Aurelia Oval Basin</h4>
                <div className="prod-meta"><span>600×450mm</span><span>Vitreous China</span></div>
                <div className="prod-foot"><span className="code">FLZ-WB-104</span><a className="quickview">Quick View</a></div>
              </div>
            </div>
            <div className="prod-card reveal">
              <div className="prod-visual">
                <span className="badge">New</span>
                <Image src={closetImg} alt="Marbella Comfort Closet" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="prod-body">
                <div className="pcat">One Piece Closets</div>
                <h4>Marbella Comfort Closet</h4>
                <div className="prod-meta"><span>700×370mm</span><span>Rimless</span></div>
                <div className="prod-foot"><span className="code">FLZ-OP-221</span><a className="quickview">Quick View</a></div>
              </div>
            </div>
            <div className="prod-card reveal">
              <div className="prod-visual">
                <span className="badge">Bestseller</span>
                <Image src={faucetImg} alt="Regalé Gold Mixer" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="prod-body">
                <div className="pcat">Faucets</div>
                <h4>Regalé Gold Mixer</h4>
                <div className="prod-meta"><span>Single Lever</span><span>Brass / PVD Gold</span></div>
                <div className="prod-foot"><span className="code">FLZ-FC-330</span><a className="quickview">Quick View</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="seam"></div>

      {/* ABOUT */}
      <section className="sec" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-visual reveal-scale">
              <Image 
                src={logoImg} 
                alt="FLORZA Logo" 
                width={260} 
                style={{ width: '60%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
                className="logo-anim"
              />
            </div>
            <div className="reveal">
              <div className="eyebrow">Our Story</div>
              <h2 style={{ marginTop: "14px" }}>A New Standard in Luxury</h2>
              <p style={{ marginTop: "16px", opacity: 0.72, lineHeight: 1.75 }}>Florza opened its doors just 6 months ago with a singular obsession: to bring unparalleled luxury and modern design to every bathroom. We source and curate only the finest sanitary ware, ensuring that every basin, closet, and fixture meets our exacting standards for quality and aesthetics.</p>
              <div className="timeline">
                <div className="tl-item"><div className="yr">2026</div><h5>Showroom Launch</h5><p>Opened our premium experience centre to the public.</p></div>
                <div className="tl-item"><div className="yr">Today</div><h5>Curated Excellence</h5><p>Continuously expanding our collection with the finest modern sanitary ware.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="seam"></div>

      {/* COLLECTIONS */}
      <section className="sec dark-sec" id="collections">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Curated Collections</div>
            <h2>Six Worlds, One Standard</h2>
            <p>Group pieces by mood rather than category — each collection is built to furnish an entire bathroom in one coherent language.</p>
          </div>
          <div className="masonry">
            <div className="m-item big reveal"><Image src={col1} alt="Premium Collection" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }} /><div className="sheen"></div><div style={{ position: "relative", zIndex: 2 }}><div className="tag">Signature</div><h5>Premium Collection</h5></div></div>
            <div className="m-item reveal"><Image src={col2} alt="Luxury Collection" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }} /><div className="sheen"></div><div style={{ position: "relative", zIndex: 2 }}><div className="tag">Statement</div><h5>Luxury Collection</h5></div></div>
            <div className="m-item reveal"><Image src={col3} alt="Marble Collection" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }} /><div className="sheen"></div><div style={{ position: "relative", zIndex: 2 }}><div className="tag">Natural Stone</div><h5>Marble Collection</h5></div></div>
            <div className="m-item reveal"><Image src={col4} alt="Golden Collection" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }} /><div className="sheen"></div><div style={{ position: "relative", zIndex: 2 }}><div className="tag">Warm Finish</div><h5>Golden Collection</h5></div></div>
            <div className="m-item big reveal"><Image src={col5} alt="Modern Collection" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }} /><div className="sheen"></div><div style={{ position: "relative", zIndex: 2 }}><div className="tag">Contemporary</div><h5>Modern Collection</h5></div></div>
            <div className="m-item reveal"><Image src={col6} alt="Minimal Collection" fill style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }} /><div className="sheen"></div><div style={{ position: "relative", zIndex: 2 }}><div className="tag">Pared Back</div><h5>Minimal Collection</h5></div></div>
          </div>
        </div>
      </section>

      {/* WHY FLORZA */}
      <section className="sec" id="why">
        <div className="wrap">
          <div className="sec-head center reveal" style={{ margin: "0 auto 64px" }}>
            <div className="eyebrow">Why Florza</div>
            <h2>Built To Outlast Trends</h2>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" /></svg>
              <h5>Premium Quality</h5><p>Every piece fired, glazed, and inspected to a standard that shows in the hand, not just the spec sheet.</p>
            </div>
            <div className="why-card reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4"><path d="M4 12a8 8 0 0116 0M4 12a8 8 0 008 8" /><circle cx="4" cy="12" r="1.5" /></svg>
              <h5>Elegant Finish</h5><p>Matte, gloss, and gold-accented finishes that read as intentional in any light.</p>
            </div>
            <div className="why-card reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4"><path d="M5 13l4 4L19 7" /></svg>
              <h5>Easy Maintenance</h5><p>Nano-coated surfaces resist limescale and stains, so upkeep stays effortless.</p>
            </div>
            <div className="why-card reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4"><path d="M3 21l6-6M21 3l-6 6M14 3h7v7M10 21H3v-7" /></svg>
              <h5>Luxury Design</h5><p>Designed in-house with proportions borrowed from architecture, not catalogues.</p>
            </div>
            <div className="why-card reveal">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              <h5>Long Life</h5><p>Materials chosen to look as good on year fifteen as they do on day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION / PARALLAX */}
      <section className="inspire">
        <div className="inspire-bg" id="inspireBg" ref={inspireBgRef}></div>
        <div>
          <h2 className="reveal">Designed To Transform <br/><em>Every</em> Bathroom.</h2>
          <a className="btn btn-primary reveal" href="#collections">Explore Collection →</a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="sec" id="gallery">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Gallery</div>
            <h2>Spaces We've Shaped</h2>
            <p>A look inside homes and hotels finished with Florza fixtures.</p>
          </div>
          <div className="gal-grid">
            <div className="gal-item tall reveal-scale"><Image src={gal1} alt="Gallery Space 1" fill style={{ objectFit: 'cover' }} /></div>
            <div className="gal-item reveal-scale"><Image src={gal2} alt="Gallery Space 2" fill style={{ objectFit: 'cover' }} /></div>
            <div className="gal-item reveal-scale"><Image src={gal3} alt="Gallery Space 3" fill style={{ objectFit: 'cover' }} /></div>
            <div className="gal-item tall reveal-scale"><Image src={gal4} alt="Gallery Space 4" fill style={{ objectFit: 'cover' }} /></div>
            <div className="gal-item reveal-scale"><Image src={gal5} alt="Gallery Space 5" fill style={{ objectFit: 'cover' }} /></div>
            <div className="gal-item reveal-scale"><Image src={gal6} alt="Gallery Space 6" fill style={{ objectFit: 'cover' }} /></div>
          </div>
        </div>
      </section>

      <div className="seam"></div>

      {/* TESTIMONIALS */}
      <section className="sec" style={{ background: "var(--white)", overflow: "hidden" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Testimonials</div>
            <h2>What Homeowners & Architects Say</h2>
          </div>
        </div>
        <div className="testi-track" ref={testiTrackRef} style={{ paddingLeft: "5%" }}>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"The finish on the Aurelia basin still looks brand new two years on — no staining, no dulling."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Ritika Menon</div><div className="role">Homeowner, Kochi</div></div></div></div>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"We specify Florza across our boutique hotel projects now — the gold-accented line photographs beautifully."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Arvind Rao</div><div className="role">Principal Architect</div></div></div></div>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"Dealer support and delivery timelines have been consistently better than the bigger brands we've used."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Sana Fathima</div><div className="role">Interior Designer</div></div></div></div>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"The Marbella closet's rimless design has made cleaning genuinely effortless for our family."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Deepak Nair</div><div className="role">Homeowner, Palakkad</div></div></div></div>
          {/* Duplicate for seamless loop */}
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"The finish on the Aurelia basin still looks brand new two years on — no staining, no dulling."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Ritika Menon</div><div className="role">Homeowner, Kochi</div></div></div></div>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"We specify Florza across our boutique hotel projects now — the gold-accented line photographs beautifully."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Arvind Rao</div><div className="role">Principal Architect</div></div></div></div>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"Dealer support and delivery timelines have been consistently better than the bigger brands we've used."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Sana Fathima</div><div className="role">Interior Designer</div></div></div></div>
          <div className="testi-card"><div className="stars">★★★★★</div><p className="quote">"The Marbella closet's rimless design has made cleaning genuinely effortless for our family."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Deepak Nair</div><div className="role">Homeowner, Palakkad</div></div></div></div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="sec" id="catalogue">
        <div className="wrap">
          <div className="catalogue reveal">
            <div className="glow"></div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>2026 Edition</div>
              <h2 className="pour on-dark" style={{ marginTop: "14px" }}>Get The Full Catalogue</h2>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: 1.7, maxWidth: "400px" }}>
                320 pages, every finish, every dimension — the complete Florza range in one download.
              </p>
              <a className="btn btn-primary" style={{ marginTop: "26px" }}>Download PDF Catalogue</a>
            </div>
            <div className="cat-book" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "40px" }}>
              <Image 
                src="/images/luxury_bathroom_lifestyle.png" 
                alt="Florza Catalogue Preview" 
                width={380} 
                height={260} 
                style={{ objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
