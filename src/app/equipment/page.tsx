"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, SlidersHorizontal, Zap, Lightbulb, Cpu, Wrench, Shield, ArrowRight, X, Phone
} from "lucide-react";
import styles from "./page.module.css";

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  image: string;
  specs: { [key: string]: string };
  description: string;
}

export default function EquipmentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<EquipmentItem | null>(null);

  const categories = [
    "All",
    "Power Generation",
    "Lighting Solutions",
    "Power Distribution",
    "Support Equipment",
    "Control & Switchgear"
  ];

  const equipmentList: EquipmentItem[] = [
    {
      id: "gen-1",
      name: "1000 KVA Diesel Generator",
      category: "Power Generation",
      image: "/images/Website Images/Power Genrator.png",
      description: "Heavy-duty super silent diesel generator unit optimized for events and heavy industrial sites.",
      specs: {
        "Capacity": "1000 KVA / 800 kW",
        "Engine": "Cummins / Perkins",
        "Fuel Consumption": "165 L/h at 75% load",
        "Noise Level": "75 dBA at 7 meters",
        "Dimensions": "6.1m x 2.4m x 2.6m",
        "Weight": "12,500 kg"
      }
    },
    {
      id: "gen-2",
      name: "500 KVA Diesel Generator",
      category: "Power Generation",
      image: "/images/Website Images/Power Genrator.png",
      description: "Mid-sized reliable silent diesel generator, perfect for corporate events and medium projects.",
      specs: {
        "Capacity": "500 KVA / 400 kW",
        "Engine": "Cummins",
        "Fuel Consumption": "82 L/h at 75% load",
        "Noise Level": "72 dBA at 7 meters",
        "Dimensions": "4.5m x 1.8m x 2.2m",
        "Weight": "6,200 kg"
      }
    },
    {
      id: "gen-3",
      name: "250 KVA Diesel Generator",
      category: "Power Generation",
      image: "/images/Website Images/Power Genrator.png",
      description: "Compact and highly mobile generator, ideal for small construction sites and emergency backup.",
      specs: {
        "Capacity": "250 KVA / 200 kW",
        "Engine": "Perkins",
        "Fuel Consumption": "43 L/h at 75% load",
        "Noise Level": "68 dBA at 7 meters",
        "Dimensions": "3.8m x 1.4m x 1.9m",
        "Weight": "3,400 kg"
      }
    },
    {
      id: "light-1",
      name: "Mobile LED Lighting Tower",
      category: "Lighting Solutions",
      image: "/images/Website Images/Lighting Soloutions.png",
      description: "High-mast tower light with 4x350W high-efficiency LED floodlights on a robust trailer chassis.",
      specs: {
        "Mast Height": "9 meters (hydraulic)",
        "Lamps": "4 x 350W LED",
        "Lumens": "180,000 lm",
        "Engine": "Kubota (low noise)",
        "Fuel Tank": "110 Liters",
        "Run Time": "Over 60 hours"
      }
    },
    {
      id: "dist-1",
      name: "800A Main Distribution Board",
      category: "Power Distribution",
      image: "/images/Website Images/power distrubutions.png",
      description: "Weatherproof main electrical distribution board with adjustable breakers and robust frame protection.",
      specs: {
        "Amperage": "800 Amps",
        "Voltage": "400V / 3 Phase",
        "IP Rating": "IP56 (Outdoor Rated)",
        "Incomer": "M12 Busbar or 800A MCCB",
        "Outgoings": "2x 400A MCCB, 4x 160A MCCB, 4x 63A MCB",
        "Protection": "Earth Leakage & Overcurrent"
      }
    },
    {
      id: "supp-1",
      name: "375 CFM Rotary Air Compressor",
      category: "Support Equipment",
      image: "/images/Website Images/Support Equipment.png",
      description: "High-performance diesel-driven screw air compressor, designed for heavy industrial use.",
      specs: {
        "Flow Rate": "375 CFM (10.6 m³/min)",
        "Working Pressure": "7-10 Bar (100-150 psi)",
        "Engine": "John Deere / Cummins",
        "Weight": "1,850 kg",
        "Outlets": "3 x 3/4\" and 1 x 1.5\""
      }
    }
  ];

  const filteredEquipment = useMemo(() => {
    return equipmentList.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className={styles.equipmentPage}>
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroHeader}>
            <span className={styles.sectionTagline}>FLEET CATALOGUE</span>
            <h1 className={styles.heroTitle}>
              EXPLORE OUR<br />
              <span className={styles.redText}>RENTAL FLEET.</span>
            </h1>
            <p className={styles.heroDesc}>
              Browse through our range of modern, well-maintained equipment units ready to deliver top-tier performance for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <div className={`${styles.searchPanel} glass-card`}>
            {/* Input Wrapper */}
            <div className={styles.inputWrapper}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search equipment by name or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Category Select Filters */}
            <div className={styles.categoriesFilter}>
              <div className={styles.filterTitle}>
                <SlidersHorizontal size={16} />
                <span>Categories:</span>
              </div>
              <div className={styles.categoriesFlex}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.activeCategory : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          {filteredEquipment.length > 0 ? (
            <div className={styles.catalogGrid}>
              {filteredEquipment.map((item) => (
                <div key={item.id} className={`${styles.productCard} glass-card`}>
                  <div className={styles.imageBox}>
                    <Image src={item.image} alt={item.name} fill className={styles.productImage} />
                    <div className={styles.categoryBadge}>{item.category}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{item.name}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    
                    {/* Compact Specs list */}
                    <div className={styles.compactSpecs}>
                      {Object.entries(item.specs).slice(0, 3).map(([key, val]) => (
                        <div key={key} className={styles.specRow}>
                          <span className={styles.specKey}>{key}:</span>
                          <span className={styles.specValue}>{val}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={() => setActiveItem(item)} className={styles.viewSpecsBtn}>
                      View Specifications <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>No equipment found</h3>
              <p>Try refining your search query or choosing another category.</p>
              <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className={styles.resetBtn}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Specifications Details Modal */}
      {activeItem && (
        <div className={styles.modalOverlay} onClick={() => setActiveItem(null)}>
          <div className={`${styles.modalCard} glass-panel`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveItem(null)}>
              <X size={20} />
            </button>

            <div className={styles.modalGrid}>
              {/* Image side */}
              <div className={styles.modalImageWrapper}>
                <Image src={activeItem.image} alt={activeItem.name} fill className={styles.modalImage} />
              </div>

              {/* Info side */}
              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{activeItem.category}</span>
                <h2>{activeItem.name}</h2>
                <p className={styles.modalDescription}>{activeItem.description}</p>

                <h3 className={styles.specsTitle}>Technical Specifications</h3>
                <div className={styles.specsTable}>
                  {Object.entries(activeItem.specs).map(([key, val]) => (
                    <div key={key} className={styles.tableRow}>
                      <span className={styles.tableKey}>{key}</span>
                      <span className={styles.tableValue}>{val}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.modalActions}>
                  <Link href={`/contact?subject=Inquiry regarding ${encodeURIComponent(activeItem.name)}`} className={styles.inquireBtn}>
                    Inquire Now <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+971565070050" className={styles.callBtn}>
                    <Phone size={16} /> Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaLogoWrapper}>
              <span className={styles.ctaLogoLetter}>N</span>
            </div>
            
            <div className={styles.ctaTextWrapper}>
              <h2>Need a Custom Setup?</h2>
              <p className={styles.redText}>Let's design and size your project power systems.</p>
            </div>

            <div className={styles.ctaActionsWrapper}>
              <Link href="/contact" className={styles.ctaActionBtn}>
                Get a Quote Now <ArrowRight size={16} />
              </Link>
              <div className={styles.phoneBlock}>
                <div className={styles.phoneCircle}><Phone size={16} /></div>
                <div className={styles.phoneDetails}>
                  <a href="tel:+971565070050" className={styles.phoneNum}>+971 56 507 0050</a>
                  <span className={styles.phoneAvailability}>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
