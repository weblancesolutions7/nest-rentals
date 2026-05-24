import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, Flame, Factory, Ship, ShieldAlert, Award, Shield, Clock, Headphones, Users, Check, ArrowRight, Phone
} from "lucide-react";
import styles from "./page.module.css";

export default function IndustriesPage() {
  const industriesList = [
    {
      id: "construction",
      title: "Construction & Contracting",
      icon: <Building2 size={24} />,
      image: "/images/Website Images/Construction and Contracting.png",
      desc: "We provide complete site solutions, including generators, tower lights, air compressors, electrical distribution systems, and cables. Our integrated approach ensures reliable power, efficient operations, and full safety compliance across all project phases.",
      bullets: [
        "Generators & Power Distribution",
        "Tower Lights & Lighting Solutions",
        "Air Compressors & Tools",
        "Cabling & Electrical Accessories"
      ]
    },
    {
      id: "oilgas",
      title: "Oil & Gas and Energy",
      icon: <Flame size={24} />,
      image: "/images/Website Images/oil and gas.png",
      desc: "We support high-demand environments with advanced power management systems, load banks, diesel storage tanks, and synchronized generator solutions, ensuring precision, uptime, and operational stability.",
      bullets: [
        "Power Management Systems",
        "Load Banks & Synchronization",
        "Diesel Tanks & Fuel Solutions",
        "ATS & Changeover Systems"
      ]
    },
    {
      id: "industrial",
      title: "Industrial & Manufacturing",
      icon: <Factory size={24} />,
      image: "/images/Website Images/Industrial Manfucautring .png",
      desc: "Our solutions include power systems, air compressors, and distribution infrastructure to support continuous production, minimize downtime, and maintain operational efficiency.",
      bullets: [
        "Power & Distribution Systems",
        "Air Compressors & Equipment",
        "Electrical Panels & Switchgear",
        "Maintenance & Support"
      ]
    },
    {
      id: "marine",
      title: "Mining, Marine, Ports & Remote Sites",
      icon: <Ship size={24} />,
      image: "/images/Website Images/Marine.png",
      desc: "We provide reliable off-grid power, lighting, and electrical solutions for demanding marine, mining, port, and remote environments. Our generators, tower lights, fuel storage, and distribution systems are built to perform in isolated, high-humidity, and corrosive conditions, ensuring continuous operations with minimal downtime.",
      bullets: [
        "Off-grid Power Solutions",
        "Fuel Storage & Handling",
        "Tower Lights & Site Lighting",
        "Cables & Distribution"
      ]
    },
    {
      id: "emergency",
      title: "Emergency & Government Projects",
      icon: <ShieldAlert size={24} />,
      image: "/images/Website Images/emergancy.png",
      desc: "Our rapid-deployment solutions include generators, lighting, distribution systems, and technical support to ensure uninterrupted operations during critical situations.",
      bullets: [
        "Emergency Power Systems",
        "Lighting & Communication",
        "Distribution & Cabling",
        "24/7 Technical Support"
      ]
    },
    {
      id: "corporate",
      title: "Corporate & Large-Scale Exhibitions",
      icon: <Award size={24} />,
      image: "/images/Website Images/cooperate and large exibitions.png",
      desc: "We provide integrated event solutions, including silent generators, tower lights, distribution boards, and cabling systems, to ensure seamless power, lighting, and safe infrastructure for high-profile events.",
      bullets: [
        "Silent Generators",
        "Tower Lights & Event Lighting",
        "Distribution Boards",
        "Cabling & Accessories"
      ]
    }
  ];

  const whyPartnerList = [
    {
      title: "Safety First",
      icon: <Shield size={24} />,
      desc: "All equipment is regularly inspected and maintained."
    },
    {
      title: "On-Time Delivery",
      icon: <Clock size={24} />,
      desc: "We deliver, install, and support - right on schedule."
    },
    {
      title: "Expert Support",
      icon: <Headphones size={24} />,
      desc: "Our team is always ready to support you 24/7."
    },
    {
      title: "Quality Assured",
      icon: <Award size={24} />,
      desc: "Top-quality equipment from trusted brands."
    },
    {
      title: "Customer Focused",
      icon: <Users size={24} />,
      desc: "Your success is our top priority in every project."
    },
    {
      title: "Compliant & Certified",
      icon: <Shield size={24} />,
      desc: "All equipment meets industry safety and operational standards."
    }
  ];

  return (
    <div className={styles.industriesPage}>
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>

            {/* Left: text content */}
            <div className={styles.heroLeft}>
              <span className={styles.sectionTagline}>INDUSTRIES WE SERVE</span>
              <h1 className={styles.heroTitle}>
                POWERING EVERY<br />
                <span className={styles.redText}>INDUSTRY.</span><br />
                SUPPORTING EVERY<br />
                <span className={styles.redText}>MISSION.</span>
              </h1>
              <p className={styles.heroDesc}>
                From construction sites to large-scale events, we provide reliable equipment rental solutions tailored to the unique demands of every industry.
              </p>

              {/* Inline stats */}
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatIcon}>
                    <Shield size={20} />
                  </div>
                  <div className={styles.heroStatText}>
                    <strong>100%</strong>
                    <span>Reliability</span>
                    <p>Equipment you can trust, every time.</p>
                  </div>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <div className={styles.heroStatIcon}>
                    <Headphones size={20} />
                  </div>
                  <div className={styles.heroStatText}>
                    <strong>24/7</strong>
                    <span>Support</span>
                    <p>Always on. Always ready to help.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: blended image */}
            <div className={styles.heroRight}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/Website Images/6e81aa12-b980-4cc8-ba9f-36ae66496939.png"
                  alt="NEST Equipment — Powering Every Industry"
                  fill
                  priority
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className={styles.heroImg}
                />
                <div className={styles.heroImgBlend} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of 6 Industries */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.industriesGrid}>
            {industriesList.map((ind) => (
              <div key={ind.id} className={`${styles.industryCard} glass-card`}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill 
                    className={styles.industryImg} 
                  />
                </div>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconBadge}>{ind.icon}</div>
                  <h3>{ind.title}</h3>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>{ind.desc}</p>
                  
                  <ul className={styles.cardBullets}>
                    {ind.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <Check size={14} className={styles.checkIcon} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={styles.cardLink}>
                    Learn More <ArrowRight size={14} className={styles.cardLinkArrow} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Nest */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyHeader}>
            <span className={styles.sectionTagline}>WHY PARTNER WITH NEST?</span>
            <h2 className={styles.whyTitle}>Built on Trust. Driven by Performance.</h2>
          </div>

          <div className={styles.whyRow}>
            {whyPartnerList.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.whyItem}>
                  <div className={styles.whyItemIcon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.whyItemTitle}>{item.title}</h3>
                  <p className={styles.whyItemDesc}>{item.desc}</p>
                </div>
                {index < whyPartnerList.length - 1 && (
                  <div className={styles.whyDivider} />
                )}
              </React.Fragment>
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
              <h2>Need the Right Solution for Your Industry?</h2>
              <p className={styles.redText}>Let's power your next project with confidence.</p>
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
