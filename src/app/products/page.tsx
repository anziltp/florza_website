"use client";

import { useState } from "react";
import Image from "next/image";

const ALL_PRODUCTS = [
  { id: 1, name: 'Product 1', sku: 'PRD-1', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas1.webp' },
  { id: 2, name: 'Product 2', sku: 'PRD-2', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas10.webp' },
  { id: 3, name: 'Product 3', sku: 'PRD-3', category: 'Water Closets', dims: 'Various', img: '/images/products/washbas11.webp' },
  { id: 4, name: 'Product 4', sku: 'PRD-4', category: 'Water Closets', dims: 'Various', img: '/images/products/washbas12 - Copy.webp' },
  { id: 5, name: 'Product 5', sku: 'PRD-5', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas13.webp' },
  { id: 6, name: 'Product 6', sku: 'PRD-6', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas14 (1).webp' },
  { id: 7, name: 'Product 7', sku: 'PRD-7', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas14.webp' },
  { id: 8, name: 'Product 8', sku: 'PRD-8', category: 'Water Closets', dims: 'Various', img: '/images/products/washbas15.webp' },
  { id: 9, name: 'Product 9', sku: 'PRD-9', category: 'Water Closets', dims: 'Various', img: '/images/products/washbas16.webp' },
  { id: 10, name: 'Product 10', sku: 'PRD-10', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas17.webp' },
  { id: 11, name: 'Product 11', sku: 'PRD-11', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas18.webp' },
  { id: 12, name: 'Product 12', sku: 'PRD-12', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas19.webp' },
  { id: 13, name: 'Product 13', sku: 'PRD-13', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas2.webp' },
  { id: 14, name: 'Product 14', sku: 'PRD-14', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas20.webp' },
  { id: 15, name: 'Product 15', sku: 'PRD-15', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas22.webp' },
  { id: 16, name: 'Product 16', sku: 'PRD-16', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas23.webp' },
  { id: 17, name: 'Product 17', sku: 'PRD-17', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas25.webp' },
  { id: 18, name: 'Product 18', sku: 'PRD-18', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas26.webp' },
  { id: 19, name: 'Product 19', sku: 'PRD-19', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas27.webp' },
  { id: 20, name: 'Product 20', sku: 'PRD-20', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas28.webp' },
  { id: 21, name: 'Product 21', sku: 'PRD-21', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas29.webp' },
  { id: 22, name: 'Product 22', sku: 'PRD-22', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas3.webp' },
  { id: 23, name: 'Product 23', sku: 'PRD-23', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas30.webp' },
  { id: 24, name: 'Product 24', sku: 'PRD-24', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas31.webp' },
  { id: 25, name: 'Product 25', sku: 'PRD-25', category: 'Water Closets', dims: 'Various', img: '/images/products/washbas32.webp' },
  { id: 26, name: 'Product 26', sku: 'PRD-26', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas33.webp' },
  { id: 27, name: 'Product 27', sku: 'PRD-27', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas34.webp' },
  { id: 28, name: 'Product 28', sku: 'PRD-28', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas35.webp' },
  { id: 29, name: 'Product 29', sku: 'PRD-29', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas36.webp' },
  { id: 30, name: 'Product 30', sku: 'PRD-30', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas37.webp' },
  { id: 31, name: 'Product 31', sku: 'PRD-31', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas38.webp' },
  { id: 32, name: 'Product 32', sku: 'PRD-32', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas4.webp' },
  { id: 33, name: 'Product 33', sku: 'PRD-33', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas5.webp' },
  { id: 34, name: 'Product 34', sku: 'PRD-34', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas6.webp' },
  { id: 35, name: 'Product 35', sku: 'PRD-35', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas7.webp' },
  { id: 36, name: 'Product 36', sku: 'PRD-36', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas8.webp' },
  { id: 37, name: 'Product 37', sku: 'PRD-37', category: 'Wash Basins', dims: 'Various', img: '/images/products/washbas9.webp' },
  { id: 38, name: 'Product 38', sku: 'PRD-38', category: 'Water Closets', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.13 AM.webp' },
  { id: 39, name: 'Product 39', sku: 'PRD-39', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.14 AM (1).webp' },
  { id: 40, name: 'Product 40', sku: 'PRD-40', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.14 AM.webp' },
  { id: 41, name: 'Product 41', sku: 'PRD-41', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.16 AM (1).webp' },
  { id: 42, name: 'Product 42', sku: 'PRD-42', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.16 AM (2).webp' },
  { id: 43, name: 'Product 43', sku: 'PRD-43', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.16 AM.webp' },
  { id: 44, name: 'Product 44', sku: 'PRD-44', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.17 AM (1).webp' },
  { id: 45, name: 'Product 45', sku: 'PRD-45', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.17 AM (2).webp' },
  { id: 46, name: 'Product 46', sku: 'PRD-46', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.17 AM.webp' },
  { id: 47, name: 'Product 47', sku: 'PRD-47', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.18 AM (1).webp' },
  { id: 48, name: 'Product 48', sku: 'PRD-48', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.18 AM (2).webp' },
  { id: 49, name: 'Product 49', sku: 'PRD-49', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.18 AM (3).webp' },
  { id: 50, name: 'Product 50', sku: 'PRD-50', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.18 AM.webp' },
  { id: 51, name: 'Product 51', sku: 'PRD-51', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.19 AM (1).webp' },
  { id: 52, name: 'Product 52', sku: 'PRD-52', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.19 AM (2).webp' },
  { id: 53, name: 'Product 53', sku: 'PRD-53', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.16.19 AM.webp' },
  { id: 54, name: 'Product 54', sku: 'PRD-54', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.18.37 AM.webp' },
  { id: 55, name: 'Product 55', sku: 'PRD-55', category: 'Wash Basins', dims: 'Various', img: '/images/products/WhatsApp Image 2026-07-08 at 11.18.38 AM.webp' },
];

const CATEGORIES = ["All", "Water Closets", "Wash Basins", "Faucets", "Bathroom Accessories"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const filteredProducts = activeCategory === "All" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ref-grid">
          {currentProducts.map(product => (
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

        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "40px", paddingBottom: "40px" }}>
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{
                padding: "8px 16px",
                border: "1px solid var(--bronze)",
                background: "transparent",
                color: currentPage === 1 ? "rgba(0,0,0,0.3)" : "var(--bronze)",
                borderColor: currentPage === 1 ? "rgba(0,0,0,0.1)" : "var(--bronze)",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                borderRadius: "4px"
              }}
            >
              Previous
            </button>
            <span style={{ color: "var(--charcoal)", fontSize: "0.95rem" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 16px",
                border: "1px solid var(--bronze)",
                background: "transparent",
                color: currentPage === totalPages ? "rgba(0,0,0,0.3)" : "var(--bronze)",
                borderColor: currentPage === totalPages ? "rgba(0,0,0,0.1)" : "var(--bronze)",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                borderRadius: "4px"
              }}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
