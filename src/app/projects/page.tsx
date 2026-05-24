"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, MapPin, Zap, ArrowRight, Phone
} from "lucide-react";
import styles from "./page.module.css";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Events", "Industrial", "Construction"];

  const projectsList: ProjectItem[] = [
    {
      id: "proj-1",
      title: "Abu Dhabi National Day Celebrations",
      category: "Events",
      location: "Abu Dhabi Corniche",
      date: "December 2025",
      image: "/images/Website Images/Home page.png",
      description: "Delivering complete power infrastructure and backup generator systems for the major public celebration.",
      challenge: "The event required high-capacity silent power to avoid disrupting performances while supporting massive lighting arrays.",
      solution: "NEST deployed a synchronized fleet of four 500 KVA super-silent generators along with main distribution boards and cabling ramps."
    },
    {
      id: "proj-2",
      title: "Musaffah Industrial Park Expansion",
      category: "Industrial",
      location: "Musaffah, Abu Dhabi",
      date: "October 2025",
      image: "/images/Website Images/power distrubutions.png",
      description: "Continuous power backup and compressed air supply during critical utility lines changeover.",
      challenge: "Operations at the manufacturing unit had to run without a single second of downtime during the 72-hour utility upgrade.",
      solution: "Deployed standby 1000 KVA generator units with automatic transfer switch (ATS) setups, ensuring zero loss of productivity."
    },
    {
      id: "proj-3",
      title: "Al Ain Desert Festival",
      category: "Events",
      location: "Al Ain, Abu Dhabi",
      date: "November 2025",
      image: "/images/Website Images/Lighting Soloutions.png",
      description: "Off-grid power generation and high-mast LED tower lighting across the desert festival campsite.",
      challenge: "Extremely remote desert location with high ambient heat and zero pre-existing electrical infrastructure.",
      solution: "Deployed a series of mobile LED light towers and silenced generator units with external diesel fuel tanks for long runtime."
    },
    {
      id: "proj-4",
      title: "Dubai Exhibition Center Stage Powering",
      category: "Events",
      location: "Dubai, UAE",
      date: "September 2025",
      image: "/images/Website Images/cooperate and large exibitions.png",
      description: "Powering primary and backup AV production systems for a major corporate exhibition.",
      challenge: "Ultra-sensitive sound equipment required clean electrical frequency output and stable voltage control.",
      solution: "Supplied synchronization panels and electronic voltage regulators combined with premium Cummins generator systems."
    }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsList;
    return projectsList.filter(proj => proj.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={styles.projectsPage}>
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroHeader}>
            <span className={styles.sectionTagline}>CASE STUDIES</span>
            <h1 className={styles.heroTitle}>
              SUCCESS STORIES &<br />
              <span className={styles.redText}>PROVEN OPERATIONS.</span>
            </h1>
            <p className={styles.heroDesc}>
              See how we have powered large-scale events, industrial expansions, and remote contracting operations across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.activeFilter : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {filteredProjects.map((proj) => (
              <div key={proj.id} className={`${styles.projectCard} glass-card`}>
                <div className={styles.imageWrapper}>
                  <Image src={proj.image} alt={proj.title} fill className={styles.projectImg} />
                  <span className={styles.categoryBadge}>{proj.category}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <MapPin size={14} className={styles.metaIcon} />
                      {proj.location}
                    </span>
                    <span className={styles.metaItem}>
                      <Calendar size={14} className={styles.metaIcon} />
                      {proj.date}
                    </span>
                  </div>

                  <h3>{proj.title}</h3>
                  <p className={styles.description}>{proj.description}</p>

                  <div className={styles.accordionDetails}>
                    <div className={styles.detailsBlock}>
                      <strong>Challenge:</strong>
                      <p>{proj.challenge}</p>
                    </div>
                    <div className={styles.detailsBlock}>
                      <strong>Solution:</strong>
                      <p>{proj.solution}</p>
                    </div>
                  </div>

                  <Link href="/contact" className={styles.inquireBtn}>
                    Request Similar Setup <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaLogoWrapper}>
              <span className={styles.ctaLogoLetter}>N</span>
            </div>
            
            <div className={styles.ctaTextWrapper}>
              <h2>Have a Similar Requirement?</h2>
              <p className={styles.redText}>Let's collaborate on your next event or industrial project.</p>
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
