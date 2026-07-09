"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="reveal">
              <div className="foot-logo">
                FLOR<span>ZA</span>
              </div>
              <p className="tag">
                Ultra-premium sanitary ware designed for those who notice the difference between good and considered.
              </p>
            </div>
            <div className="reveal">
              <h6>Explore</h6>
              <ul>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div className="reveal">
              <h6>Company</h6>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="#">Dealer Login</a></li> */}
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="reveal">
              <h6>Location</h6>
              <address style={{ fontSize: "13px", opacity: 0.7, fontStyle: "normal", lineHeight: 1.6 }}>
                <strong>FLORZA SANITARYWARE</strong><br />
                SHAMAS BUILDING<br />
                WANDOOR RODE KUTTIYIL<br />
                WANDOOR 679328<br />
                MALAPPURAM<br />
                KERALA
              </address>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Florza Sanitary Ware. All rights reserved.</span>
            <span>Privacy Policy · Terms of Service</span>
          </div>
        </div>
      </footer>

      <a
        className="fab"
        title="Chat with us on WhatsApp"
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919495530519"}?text=${encodeURIComponent(
          process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
          "Hi FLORZA, I'm interested in your premium sanitary ware products. Please share your latest catalogue and pricing."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.2.2-.3.2-.6.1-.9-.4-1.7-1-2.4-1.7-.6-.6-1.2-1.4-1.6-2.2-.1-.2 0-.4.1-.6.2-.2.5-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2-.1-.4-.3-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.5-1 2.5.1 1.1.6 2.2 1.4 3.2 1.5 2 3.4 3.5 5.6 4.3 1.9.7 2.5.5 3-.1.4-.5.9-1.4 1-1.9.1-.3 0-.6-.3-.7z" />
          <path
            d="M12 2a10 10 0 108.6 15L22 21l-4.1-1.1A10 10 0 0012 2z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.3"
          />
        </svg>
      </a>
    </>
  );
}
