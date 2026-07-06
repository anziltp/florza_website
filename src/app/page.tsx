"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
export default function Home() {
  const inspireBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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

    // Scroll reveal observer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );
    
    document.querySelectorAll(".reveal, .reveal-scale, .pour").forEach((el) => {
      if (el.id !== "heroTitle") obs.observe(el);
    });

    // Counters observer
    const counters = document.querySelectorAll(".counter");
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const target = parseInt(el.dataset.target || "0", 10);
            let cur = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            const t = setInterval(() => {
              cur += step;
              if (cur >= target) {
                cur = target;
                clearInterval(t);
              }
              el.textContent = cur.toString();
            }, 30);
            counterObs.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    
    counters.forEach((c) => counterObs.observe(c));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      obs.disconnect();
      counterObs.disconnect();
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
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M8 8V6a4 4 0 018 0v2" />
              </svg>
              <div><h4>One Piece Closets</h4><div className="count">48 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M4 12h16M4 12a8 4 0 0016 0M9 12V6h6v6" />
              </svg>
              <div><h4>Water Closets</h4><div className="count">62 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <ellipse cx="12" cy="14" rx="8" ry="4" />
                <path d="M12 4v6" />
              </svg>
              <div><h4>Wash Basins</h4><div className="count">94 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M3 18h18M6 18V9a2 2 0 012-2h8a2 2 0 012 2v9" />
              </svg>
              <div><h4>Counter Top Basins</h4><div className="count">36 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <rect x="3" y="14" width="18" height="4" rx="1" />
                <ellipse cx="12" cy="10" rx="6" ry="3" />
              </svg>
              <div><h4>Table Top Basins</h4><div className="count">28 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <path d="M4 10h16v3a3 3 0 01-3 3H7a3 3 0 01-3-3z" />
                <path d="M4 10V6h16v4" />
              </svg>
              <div><h4>Wall Hung Basins</h4><div className="count">22 Products</div></div>
            </div>
            <div className="cat-card reveal">
              <div className="glow"></div>
              <svg className="cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
              <div><h4>Bathroom Accessories</h4><div className="count">140 Products</div></div>
            </div>
            <div className="cat-card reveal">
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
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <ellipse cx="75" cy="95" rx="55" ry="20" fill="#F7F3EC" stroke="#B8925A" />
                  <ellipse cx="75" cy="90" rx="42" ry="16" fill="#EDE6D6" />
                  <rect x="70" y="35" width="4" height="35" fill="#D4AF37" />
                  <circle cx="72" cy="32" r="6" fill="#D4AF37" />
                </svg>
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
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <path d="M35 100 Q35 55 75 55 Q115 55 115 100 L115 104 Q115 118 75 118 Q35 118 35 104 Z" fill="#F7F3EC" stroke="#B8925A" />
                  <ellipse cx="75" cy="90" rx="34" ry="16" fill="#EDE6D6" />
                </svg>
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
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="55" y="30" width="10" height="55" fill="#D4AF37" />
                  <circle cx="60" cy="27" r="9" fill="#D4AF37" />
                  <path d="M60 40 Q30 55 30 90" stroke="#D4AF37" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <rect x="20" y="88" width="24" height="8" rx="4" fill="#B8925A" />
                </svg>
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

      {/* COLLECTIONS */}
      <section className="sec dark-sec" id="collections">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Curated Collections</div>
            <h2>Six Worlds, One Standard</h2>
            <p>Group pieces by mood rather than category — each collection is built to furnish an entire bathroom in one coherent language.</p>
          </div>
          <div className="masonry">
            <div className="m-item big reveal"><div className="sheen"></div><div><div className="tag">Signature</div><h5>Premium Collection</h5></div></div>
            <div className="m-item reveal"><div className="sheen"></div><div><div className="tag">Statement</div><h5>Luxury Collection</h5></div></div>
            <div className="m-item reveal"><div className="sheen"></div><div><div className="tag">Natural Stone</div><h5>Marble Collection</h5></div></div>
            <div className="m-item reveal"><div className="sheen"></div><div><div className="tag">Warm Finish</div><h5>Golden Collection</h5></div></div>
            <div className="m-item big reveal"><div className="sheen"></div><div><div className="tag">Contemporary</div><h5>Modern Collection</h5></div></div>
            <div className="m-item reveal"><div className="sheen"></div><div><div className="tag">Pared Back</div><h5>Minimal Collection</h5></div></div>
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
            <div className="gal-item tall reveal-scale"><svg viewBox="0 0 200 400"><rect width="200" height="400" fill="#EDE6D6" /><ellipse cx="100" cy="200" rx="60" ry="24" fill="#D4AF37" opacity="0.25" /></svg></div>
            <div className="gal-item reveal-scale"><svg viewBox="0 0 200 180"><rect width="200" height="180" fill="#E4DCC8" /><rect x="60" y="60" width="80" height="60" fill="#D4AF37" opacity="0.2" /></svg></div>
            <div className="gal-item reveal-scale"><svg viewBox="0 0 200 180"><rect width="200" height="180" fill="#EFE9DC" /><circle cx="100" cy="90" r="45" fill="#B8925A" opacity="0.2" /></svg></div>
            <div className="gal-item tall reveal-scale"><svg viewBox="0 0 200 400"><rect width="200" height="400" fill="#E4DCC8" /><rect x="40" y="150" width="120" height="100" fill="#D4AF37" opacity="0.18" /></svg></div>
            <div className="gal-item reveal-scale"><svg viewBox="0 0 200 180"><rect width="200" height="180" fill="#EDE6D6" /></svg></div>
            <div className="gal-item reveal-scale"><svg viewBox="0 0 200 180"><rect width="200" height="180" fill="#E9E1CE" /><ellipse cx="100" cy="90" rx="50" ry="20" fill="#B8925A" opacity="0.2" /></svg></div>
          </div>
        </div>
      </section>

      <div className="seam"></div>

      {/* TESTIMONIALS */}
      <section className="sec" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Testimonials</div>
            <h2>What Homeowners & Architects Say</h2>
          </div>
          <div className="testi-track">
            <div className="testi-card reveal"><div className="stars">★★★★★</div><p className="quote">"The finish on the Aurelia basin still looks brand new two years on — no staining, no dulling."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Ritika Menon</div><div className="role">Homeowner, Kochi</div></div></div></div>
            <div className="testi-card reveal"><div className="stars">★★★★★</div><p className="quote">"We specify Florza across our boutique hotel projects now — the gold-accented line photographs beautifully."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Arvind Rao</div><div className="role">Principal Architect</div></div></div></div>
            <div className="testi-card reveal"><div className="stars">★★★★★</div><p className="quote">"Dealer support and delivery timelines have been consistently better than the bigger brands we've used."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Sana Fathima</div><div className="role">Interior Designer</div></div></div></div>
            <div className="testi-card reveal"><div className="stars">★★★★★</div><p className="quote">"The Marbella closet's rimless design has made cleaning genuinely effortless for our family."</p><div className="testi-who"><div className="avatar"></div><div><div className="name">Deepak Nair</div><div className="role">Homeowner, Palakkad</div></div></div></div>
          </div>
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
            <div className="cat-book">
              <svg width="90" height="120" viewBox="0 0 90 120">
                <rect x="4" y="4" width="82" height="112" rx="4" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                <text x="45" y="65" fill="#D4AF37" fontFamily="Plus Jakarta Sans" fontSize="16" textAnchor="middle">FLORZA</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="seam"></div>

      {/* ABOUT */}
      <section className="sec" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="reveal">
              <div className="eyebrow">Our Story</div>
              <h2 style={{ marginTop: "14px" }}>Fifteen Years Of Quiet Craft</h2>
              <p style={{ marginTop: "16px", opacity: 0.72, lineHeight: 1.75 }}>Florza began as a small workshop obsessed with the feel of a basin's edge under a fingertip. That obsession scaled into a full manufacturing line — but the standard never changed: if it doesn't feel considered, it doesn't ship.</p>
              <div className="timeline">
                <div className="tl-item"><div className="yr">2011</div><h5>Workshop Founded</h5><p>Started with a single basin mould and a two-person team.</p></div>
                <div className="tl-item"><div className="yr">2016</div><h5>First Manufacturing Unit</h5><p>Scaled to a dedicated vitreous china facility.</p></div>
                <div className="tl-item"><div className="yr">2021</div><h5>100+ Dealer Network</h5><p>Expanded distribution across the country.</p></div>
                <div className="tl-item"><div className="yr">2026</div><h5>Golden Collection Launch</h5><p>Introduced our first PVD-gold accented product line.</p></div>
              </div>
            </div>
            <div className="about-visual reveal-scale">
              <svg width="70%" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="#B8925A" strokeWidth="1" />
                <text x="100" y="105" fill="#D4AF37" fontFamily="Plus Jakarta Sans" fontSize="18" textAnchor="middle" letterSpacing="2">FLORZA</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Get In Touch</div>
            <h2>Visit, Call, Or Ask A Question</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card reveal">
              <div className="contact-row"><div><div className="lbl">Showroom</div><div className="val">Florza Experience Centre, Ottapalam, Kerala</div></div></div>
              <div className="contact-row"><div><div className="lbl">Phone</div><div className="val">+91 98765 43210</div></div></div>
              <div className="contact-row"><div><div className="lbl">Email</div><div className="val">hello@florza.com</div></div></div>
              <div className="contact-row"><div><div className="lbl">Dealer Enquiry</div><div className="val">dealers@florza.com</div></div></div>
              <a className="btn btn-primary" style={{ marginTop: "20px", width: "100%", justifyContent: "center", background: "#25D366", color: "#fff" }}>WhatsApp Us</a>
            </div>
            <div className="form-card reveal">
              <div className="form-row"><input placeholder="Full Name" /><input placeholder="Phone Number" /></div>
              <div className="form-row"><input placeholder="Email Address" style={{ gridColumn: "1/-1" }} /></div>
              <textarea placeholder="Tell us about your project or product interest..."></textarea>
              <button className="btn btn-primary submit-btn" style={{ marginTop: "16px" }}>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
