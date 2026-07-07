"use client";

import { useState } from "react";
import Image from "next/image";

// Import sample images
import p1 from "@/assets/toilet.jpeg";
import p2 from "@/assets/toilet1.jpeg";
import p3 from "@/assets/washbas2/washbas.jpeg";
import p4 from "@/assets/washbas2/washbas1.jpeg";
import p5 from "@/assets/washbas2/washbas2.jpeg";
import p6 from "@/assets/washbas2/washbas3.jpeg";
import p7 from "@/assets/washbas2/washbas4.jpeg";
import p8 from "@/assets/washbas2/washbas5.jpeg";

const ALL_PRODUCTS = [
  { id: 1, name: "One-Piece Water Closet", sku: "WC-S1", category: "Water Closets", dims: "660x360x720mm", img: p1 },
  { id: 2, name: "Wall-Hung WC", sku: "WC-W2", category: "Water Closets", dims: "520x360x340mm", img: p2 },
  { id: 3, name: "Aurelia Oval Basin", sku: "WB-01", category: "Wash Basins", dims: "600x450mm", img: p3 },
  { id: 4, name: "Luna Counter Top", sku: "WB-02", category: "Wash Basins", dims: "550x400mm", img: p4 },
  { id: 5, name: "Minimalist Table Top", sku: "WB-03", category: "Wash Basins", dims: "480x480mm", img: p5 },
  { id: 6, name: "Curve Wall Hung Basin", sku: "WB-04", category: "Wash Basins", dims: "500x420mm", img: p6 },
  { id: 7, name: "Premium Brass Faucet", sku: "FC-01", category: "Faucets", dims: "Single Lever", img: p7 },
  { id: 8, name: "Matte Black Faucet", sku: "FC-02", category: "Faucets", dims: "Tall Body", img: p8 },
];

const CATEGORIES = ["All", "Water Closets", "Wash Basins", "Faucets", "Bathroom Accessories"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="products-page">
      <div className="wrap">
        
        <div className="products-header">
          <h1>{activeCategory === "All" ? "Our Collection" : activeCategory}</h1>
          <p>Florza Bathware</p>
        </div>

        <div className="cat-tabs">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`cat-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ref-grid">
          {filteredProducts.map(product => (
            <div className="ref-card" key={product.id}>
              <div className="ref-img-wrap">
                <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="ref-info">
                <div className="ref-sku">{product.sku}</div>
                <div className="ref-title">{product.name}</div>
                <div className="ref-meta">
                  <span>☐ {product.dims}</span>
                </div>
              </div>
            </div>
          ))}
          
          {filteredProducts.length === 0 && (
            <div style={{ padding: "40px 0", color: "var(--bronze)" }}>
              No products available in this category yet.
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
