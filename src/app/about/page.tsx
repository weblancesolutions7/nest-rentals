import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Clock,
  Users,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  UserRound,
  Star,
  Lightbulb,
} from "lucide-react";
import CtaLogo from "@/components/CtaLogo";
import styles from "./page.module.css";

export default function AboutPage() {
  const statsList = [
    { value: "2025", label: "Established" },
    { value: "Abu Dhabi, UAE", label: "Headquarters" },
    { value: "100+", label: "Projects Completed" },
    { value: "100%", label: "Commitment to Quality" }
  ];

  const valuesList = [
    {
      title: "Safety First",
      desc: "We prioritize safety in every step of our work.",
      icon: ShieldCheck,
    },
    {
      title: "Reliability",
      desc: "We deliver what we promise, every time.",
      icon: BadgeCheck,
    },
    {
      title: "On-Time Delivery",
      desc: "We respect time and ensure on schedule delivery.",
      icon: Clock,
    },
    {
      title: "Customer Focused",
      desc: "Your success is our top priority.",
      icon: UserRound,
    },
    {
      title: "Quality Assured",
      desc: "We maintain the highest standards in equipment and service.",
      icon: Star,
    },
    {
      title: "Innovation",
      desc: "We continuously improve to deliver better solutions.",
      icon: Lightbulb,
    },
  ];

  const choosePoints = [
    {
      title: "Wide Range of Equipment",
      desc: "From power to lighting and more all under one roof."
    },
    {
      title: "Expert Technical Team",
      desc: "Experienced professionals ready to support you 24/7."
    },
    {
      title: "Flexible Rental Solutions",
      desc: "Customized packages to fit projects of any size."
    },
    {
      title: "Well Maintained Fleet",
      desc: "Regularly inspected equipment for maximum performance."
    },
    {
      title: "End-to-End Support",
      desc: "From planning to execution, we're with you every step."
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section — two-column + bottom stats */}
      <section className={styles.heroSection}>
        <div className={styles.container}>

          {/* Top two-column grid */}
          <div className={`${styles.heroGrid} hero-split`}>
            {/* Left: text */}
            <div className={`${styles.heroLeft} hero-split__content`}>
              <span className={styles.sectionTagline}>ABOUT NEST</span>
              <h1 className={styles.heroTitle}>
                POWERING EVENTS.<br />
                <span className={styles.redText}>SUPPORTING SUCCESS.</span><br />
                BUILT ON RELIABILITY.
              </h1>
              <div className={styles.heroDescBlock}>
                <p className={styles.heroDesc}>
                  Nest Equipment Rental Sole Proprietorship L.L.C., established in 2025 in Abu Dhabi, provides dependable equipment rental solutions to the events, construction, oil &amp; gas, and industrial sectors across the United Arab Emirates.
                </p>
                <p className={styles.heroDesc}>
                  We focus on delivering efficient, well-managed services that keep operations running without disruption.
                </p>
              </div>
              <Link href="#story" className={styles.heroBtn}>
                Get to Know Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: blended image */}
            <div className={`${styles.heroRight} hero-split__media`}>
              <div className={`${styles.heroImageWrapper} hero-split__frame`}>
                <Image
                  src="/images/Website Images/6e81aa12-b980-4cc8-ba9f-36ae66496939.png"
                  alt="NEST Equipment Rental — About Us"
                  fill
                  priority
                  sizes="(max-width: 1100px) 100vw, 50vw"
                  className={styles.heroImg}
                />
                <div className={`${styles.heroImgBlend} hero-split__blend`} />
              </div>
            </div>
          </div>

          {/* Bottom stats row */}
          <div className={styles.statsRow}>
            {statsList.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    {idx === 0 && <Award size={20} />}
                    {idx === 1 && <Shield size={20} />}
                    {idx === 2 && <Users size={20} />}
                    {idx === 3 && <CheckCircle2 size={20} />}
                  </div>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
                {idx < statsList.length - 1 && <div className={styles.statDivider} />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* Our Story */}
      <section id="story" className={`${styles.storySection} scroll-anchor`}>
        <div className={styles.container}>
          <div className={styles.storyLayout}>
            {/* Left Column Content */}
            <div className={styles.storyLeft}>
              <span className={styles.sectionTagline}>OUR STORY</span>
              <h2 className={styles.storyTitle}>
                BUILT TO SUPPORT.<br />
                <span className={styles.redText}>FOCUSED ON YOU.</span>
              </h2>
              <div className={styles.storyText}>
                <p>
                  Our core offering includes diesel generators ranging from 20 KVA to 1500 KVA, equipped with advanced synchronization capabilities for high demand projects. We also provide changeover and ATS (Automatic Transfer Switch) systems, enabling seamless load switching, load sharing, and uninterrupted power transfer for critical operations.
                </p>
                <p>
                  In addition, our fleet includes air compressors, tower lights, welding machines, cables, distribution systems, diesel tanks, and load banks, all maintained to the highest standards of performance, safety, and reliability.
                </p>
                <p>
                  Driven by reliability and service excellence, we are committed to supporting every project with precision and professionalism while building our position as a leading equipment rental provider in the UAE.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className={styles.storyRight}>
              <div className={styles.storyImageWrapper}>
                <Image
                  src="/about us(OUR STORY).png"
                  alt="NEST equipment rental at a night event site"
                  fill
                  className={styles.storyImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesPanel}>
            <div className={styles.valuesHeader}>
              <span className={styles.sectionTagline}>OUR VALUES</span>
              <h2 className={styles.valuesTitle}>
                THE PRINCIPLES THAT POWER EVERYTHING WE DO
              </h2>
            </div>

            <div className={styles.valuesGrid}>
              {valuesList.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <React.Fragment key={val.title}>
                    <div className={styles.valueItem}>
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className={styles.valueIcon}
                        aria-hidden
                      />
                      <h3 className={styles.valueItemTitle}>{val.title}</h3>
                      <p className={styles.valueItemDesc}>{val.desc}</p>
                    </div>
                    {idx < valuesList.length - 1 && (
                      <div className={styles.valueDivider} aria-hidden />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Team Section */}
      <section className={styles.chooseSection}>
        <div className={styles.container}>
          <div className={styles.chooseLayout}>
            {/* Left Image */}
            <div className={styles.chooseLeft}>
              <div className={styles.chooseImageWrapper}>
                <Image
                  src="/about us - WHY CHOOSE NEST.png"
                  alt="NEST equipment rental generator in a branded workshop"
                  fill
                  className={styles.chooseImage}
                />
              </div>
            </div>

            {/* Right List */}
            <div className={styles.chooseRight}>
              <span className={styles.sectionTagline}>WHY CHOOSE NEST?</span>
              <h2 className={styles.chooseTitle}>
                EXPERTISE. EQUIPMENT.<br />
                <span className={styles.redText}>EXCELLENCE.</span>
              </h2>
              <p className={styles.chooseIntro}>
                We bring the right equipment, skilled team, and proven processes to keep operations running without interruption.
              </p>

              <div className={styles.pointsList}>
                {choosePoints.map((point, idx) => (
                  <div key={idx} className={styles.pointItem}>
                    <CheckCircle2 size={20} className={styles.pointIcon} />
                    <div className={styles.pointDetails}>
                      <h3>{point.title}</h3>
                      <p>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <CtaLogo className={styles.ctaLogoWrapper} size={80} />

            <div className={styles.ctaTextWrapper}>
              <h2>Ready to Power Your Next Project?</h2>
              <p className={styles.redText}>Let's build something amazing together.</p>
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
