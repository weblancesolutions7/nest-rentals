import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Zap, Users, Shield, Clock, Headphones, Award, ArrowRight, ChevronRight, Phone,
  Building2, Flame, Factory, Ship, ShieldAlert
} from "lucide-react";
import CtaLogo from "@/components/CtaLogo";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  absoluteTitle:
    "Generator & Equipment Rental UAE | NEST Equipment Rental Abu Dhabi",
  description:
    "Rent silent generators (20–1500 kVA), lighting towers, power distribution, air compressors, and welding machines across Abu Dhabi, Dubai, and the UAE. 24/7 support from NEST Equipment Rental.",
  path: "/",
  keywords: [
    "generator rental Abu Dhabi",
    "generator rental Dubai",
    "equipment rental UAE",
    "lighting tower rental",
    "power rental UAE",
    "construction generator hire",
    "event power rental UAE",
    "industrial generator rental",
  ],
});

const homeIndustries = [
  {
    title: "Construction & Contracting",
    image: "/images/Website Images/Construction and Contracting.png",
    icon: Building2,
  },
  {
    title: "Oil & Gas and Energy",
    image: "/images/Website Images/oil and gas.png",
    icon: Flame,
  },
  {
    title: "Industrial & Manufacturing",
    image: "/images/Website Images/Industrial Manfucautring .png",
    icon: Factory,
  },
  {
    title: "Mining, Marine, Ports & Remote Sites",
    image: "/images/Website Images/Marine.png",
    icon: Ship,
  },
  {
    title: "Emergency & Government Projects",
    image: "/images/Website Images/emergancy.png",
    icon: ShieldAlert,
  },
  {
    title: "Corporate & Large Scale Exhibitions",
    image: "/images/Website Images/cooperate and large exibitions.png",
    icon: Award,
  },
];

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        {/* Background Image with Dark Overlay */}
        <div className={styles.heroBgContainer}>
          <Image
            src="/Home_page_hero_img.png"
            alt="NEST Equipment Rental generator fleet"
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContentGrid}>
            {/* Left Content */}
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>
                POWERING<br />
                <span className={styles.redText}>RELIABLE</span><br />
                OPERATIONS<br />
                <span className={styles.redText}>ACROSS THE UAE</span>
              </h1>
              <p className={styles.heroSubText}>
                Nest Equipment Rental powers the UAE’s critical industries with a comprehensive range of equipment and technical expertise. From power generation and electrical distribution to lighting, air solutions, and site infrastructure, we deliver fully integrated rental solutions designed for construction, energy, industrial, and large scale event environments. We do not just supply equipment we provide complete operational support to ensure efficiency, safety, and uninterrupted performance.
              </p>
              <div className={styles.heroBtnGroup}>
                <Link href="/services" className={styles.primaryBtn}>
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Card: 24/7 Support */}
            <div className={styles.heroRight}>
              <div className={`${styles.supportBadgeCard} glass-card`}>
                <div className={styles.badgeGlow}></div>
                <div className={styles.badgeHeader}>
                  <div className={styles.badgeIconWrapper}>
                    <Zap size={24} fill="#cf0022" color="#cf0022" className={styles.pulseIcon} />
                  </div>
                  <div className={styles.badgeTitleBlock}>
                    <span className={styles.badgeLargeText}>24/7</span>
                    <span className={styles.badgeSubText}>SUPPORT</span>
                  </div>
                </div>
                <p className={styles.badgeDescription}>Always On. Always Ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-HERO FEATURES BAR */}
      <section className={styles.featuresBarSection}>
        <div className={styles.container}>
          <div className={styles.featuresBarGrid}>
            <div className={styles.featuresBarItem}>
              <div className={styles.iconCircle}><Zap size={18} /></div>
              <div>
                <h4>Reliable Equipment</h4>
                <p>High performance you can trust</p>
              </div>
            </div>
            <div className={styles.featuresBarItem}>
              <div className={styles.iconCircle}><Shield size={18} /></div>
              <div>
                <h4>Expert Support</h4>
                <p>24/7 technical assistance</p>
              </div>
            </div>
            <div className={styles.featuresBarItem}>
              <div className={styles.iconCircle}><Clock size={18} /></div>
              <div>
                <h4>On-Time Delivery</h4>
                <p>Always on schedule, always ready</p>
              </div>
            </div>
            <div className={styles.featuresBarItem}>
              <div className={styles.iconCircle}><Award size={18} /></div>
              <div>
                <h4>Complete Solutions</h4>
                <p>Power, lighting & more under one roof</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} glass-card`}>
              <Clock size={28} className={styles.statIcon} />
              <h3>On-Time</h3>
              <p>Equipment Mobilization</p>
            </div>
            <div className={`${styles.statCard} glass-card`}>
              <Award size={28} className={styles.statIcon} />
              <h3>Dedicated</h3>
              <p>After-Sales Service</p>
            </div>
            <div className={`${styles.statCard} glass-card`}>
              <Users size={28} className={styles.statIcon} />
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={`${styles.statCard} glass-card`}>
              <Shield size={28} className={styles.statIcon} />
              <h3>24/7</h3>
              <p>Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionTagline}>OUR SERVICES</span>
            <h2 className={styles.sectionTitle}>Complete Event Solutions</h2>
            <p className={styles.sectionDescription}>
              From power generation and distribution to lighting, air solutions, and site infrastructure, we deliver everything you need to make your event a success.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Card 1 */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceImageContainer}>
                <Image src="/images/Website Images/Power Genrator.png" alt="Power Generation" fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" className={styles.serviceImg} />
                <div className={styles.serviceIconBadge}><Zap size={20} /></div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Power Generation</h3>
                <p>Reliable generators from 20 KVA to 1500 KVA for any event size.</p>
                <Link href="/services#power" className={styles.serviceArrowBtn}>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceImageContainer}>
                <Image src="/images/Website Images/Lighting Soloutions.png" alt="Lighting Solutions" fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" className={styles.serviceImg} />
                <div className={styles.serviceIconBadge}><Award size={20} /></div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Lighting Solutions</h3>
                <p>High performance tower lights for maximum visibility.</p>
                <Link href="/services#lighting" className={styles.serviceArrowBtn}>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceImageContainer}>
                <Image src="/images/Website Images/power distrubutions.png" alt="Power Distribution" fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" className={styles.serviceImg} />
                <div className={styles.serviceIconBadge}><Zap size={20} /></div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Power Distribution</h3>
                <p>Safe and efficient distribution systems and cabling solutions.</p>
                <Link href="/services#distribution" className={styles.serviceArrowBtn}>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceImageContainer}>
                <Image src="/images/Website Images/Support Equipment.png" alt="Support Equipment" fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" className={styles.serviceImg} />
                <div className={styles.serviceIconBadge}><Shield size={20} /></div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Support Equipment</h3>
                <p>Air compressors, welding machines, and more to support your event.</p>
                <Link href="/services#support" className={styles.serviceArrowBtn}>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.centeredButton}>
            <Link href="/services" className={styles.outlineBtn}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.industriesLayout}>
            {/* Left Header */}
            <div className={styles.industriesLeft}>
              <span className={styles.sectionTagline}>INDUSTRIES WE SERVE</span>
              <h2 className={styles.sectionTitle}>
                Trusted Across<br />
                <span className={styles.redText}>Every Industry</span>
              </h2>
              <p className={styles.industriesDesc}>
                We provide tailored rental solutions for a wide range of industries with precision, safety, and reliability.
              </p>
              <Link href="/industries" className={`${styles.outlineBtn} ${styles.industryCtaBtn}`}>
                View All Industries <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Grid (6 items) */}
            <div className={styles.industriesRightGrid}>
              {homeIndustries.map((ind, idx) => {
                const IconComponent = ind.icon;
                return (
                  <div key={idx} className={styles.industryItemCard}>
                    {/* Background Image */}
                    <div className={styles.industryItemBg}>
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                        className={styles.industryItemImg}
                      />
                      <div className={styles.industryItemOverlay}></div>
                    </div>

                    {/* Centered Content */}
                    <div className={styles.industryItemContent}>
                      <div className={styles.industryItemIconWrapper}>
                        <IconComponent size={20} className={styles.industryItemIcon} />
                      </div>
                      <h4 className={styles.industryItemTitle}>{ind.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURES KEY VALUES BAR */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesGrid}>
            <div className={`${styles.valueCard} glass-card`}>
              <Shield size={24} className={styles.valueIcon} />
              <h4>Safety First</h4>
              <p>All equipment is regularly inspected and maintained.</p>
            </div>
            <div className={`${styles.valueCard} glass-card`}>
              <Clock size={24} className={styles.valueIcon} />
              <h4>On-Time Delivery</h4>
              <p>We deliver, install, and support right on schedule.</p>
            </div>
            <div className={`${styles.valueCard} glass-card`}>
              <Headphones size={24} className={styles.valueIcon} />
              <h4>Expert Support</h4>
              <p>Our team is always ready to support you 24/7.</p>
            </div>
            <div className={`${styles.valueCard} glass-card`}>
              <Award size={24} className={styles.valueIcon} />
              <h4>Quality Assured</h4>
              <p>Top quality equipment from trusted brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT US PREVIEW */}
      <section className={styles.aboutPreviewSection}>
        <div className={styles.container}>
          <div className={styles.aboutPreviewGrid}>
            {/* Left Image */}
            <div className={styles.aboutImageCol}>
              <div className={styles.aboutImageContainer}>
                <Image
                  src="/Home and contact.png"
                  alt="NEST Equipment Yard Office"
                  fill
                  className={styles.aboutImg}
                />
              </div>
            </div>

            {/* Center Content */}
            <div className={styles.aboutContentCol}>
              <span className={styles.sectionTagline}>ABOUT US</span>
              <h2 className={styles.sectionTitle}>
                Performance Focused.<br />
                <span className={styles.redText}>Reliability Driven.</span>
              </h2>
              <p className={styles.aboutDescription}>
                Nest Equipment Rental, established in 2025 in Abu Dhabi, provides dependable equipment rental solutions to the events, construction, oil & gas, and industrial sectors across the UAE.
              </p>
              <Link href="/about" className={styles.primaryBtn}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Highlights Grid */}
            <div className={styles.aboutHighlightsCol}>
              <div className={`${styles.highlightCard} glass-card`}>
                <Zap size={20} className={styles.highlightIcon} />
                <div>
                  <h4>Modern Fleet</h4>
                  <p>Well maintained, high performance equipment.</p>
                </div>
              </div>
              <div className={`${styles.highlightCard} glass-card`}>
                <Users size={20} className={styles.highlightIcon} />
                <div>
                  <h4>Trained Professionals</h4>
                  <p>Skilled team with industry expertise.</p>
                </div>
              </div>
              <div className={`${styles.highlightCard} glass-card`}>
                <Shield size={20} className={styles.highlightIcon} />
                <div>
                  <h4>Customer Focused</h4>
                  <p>Your success is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA CALLOUT BOX */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={`${styles.ctaCalloutBox} box-glow`}>
            <div className={styles.ctaBackgroundGlow}></div>
            <CtaLogo className={styles.ctaLogoWrapper} size={72} />

            <div className={styles.ctaTextWrapper}>
              <h3>Ready to Power Your Next Event?</h3>
              <p>Let's build something amazing together.</p>
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
