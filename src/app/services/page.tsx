"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Zap, SlidersHorizontal, Cpu, Layers, Settings, ShieldAlert, Wrench, 
  TrendingUp, Maximize2, Shield, Clock, Headphones, Users, Check, 
  ArrowRight, Phone, Lightbulb, ChevronRight, Activity, Award, Cable,
  Fuel, FlaskConical, Package
} from "lucide-react";
import styles from "./page.module.css";

interface SubSection {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  tabLabel: string;
  tagline: string;
  title: string;
  desc: string;
  image: string;
  subsections: SubSection[];
}

export default function ServicesPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const servicesData: ServiceCategory[] = [
    {
      id: "generator",
      tabLabel: "Generator Rental",
      tagline: "Event Equipment Rental in UAE",
      title: "High-Performance Silent Generator Rental",
      desc: "We provide high-performance, silent generator solutions designed to ensure uninterrupted power for industrial and commercial operations. Our equipment is built for rugged reliability, operational efficiency, and seamless project execution.",
      image: "/images/Website Images/Power Genrator.png",
      subsections: [
        {
          title: "Diesel Generators For Diverse Projects",
          desc: "We provide a versatile range of soundproof diesel generators ranging from 20 kVA to 1500 kVA, engineered for stable, efficient, and uninterrupted power supply. These generators are housed in acoustically treated enclosures to ensure minimal noise output while maintaining high performance in demanding environments.",
          icon: <Zap size={20} />
        },
        {
          title: "Super Silent Canopies for Urban & Event Sites",
          desc: "Our generators are housed in acoustically engineered canopies with high-quality insulation, reducing noise levels typically to 65–75 dB at 7 meters. Anti-vibration mountings, precision-balanced engines, and advanced muffler systems further minimize operational noise, making them ideal for urban construction zones, residential-adjacent sites, and industrial areas where strict sound control is mandatory.",
          icon: <Shield size={20} />
        },
        {
          title: "Reliable Backup & Continuous Power Supply",
          desc: "Equipped with automatic voltage regulators (AVR), our generators ensure consistent voltage output, protecting sensitive site machinery, automated control systems, and communication infrastructure. AMF (Auto Mains Failure) panels enable automatic start/stop during power outages, ensuring zero or minimal downtime. High fuel efficiency engines, large-capacity fuel tanks, and optimized load management support extended run times for continuous heavy-duty operation.",
          icon: <Activity size={20} />
        },
        {
          title: "Advanced Synchronization Systems",
          desc: "For high-capacity operational requirements, our generators can be synchronized using auto-synchronizing panels and load-sharing controllers, allowing multiple units to operate in parallel. This setup ensures balanced load distribution, system redundancy, and scalability. In case of a unit failure, the system automatically redistributes the load, ensuring operational continuity. Synchronization also improves fuel efficiency by matching total generator output with real-time site demand.",
          icon: <Layers size={20} />
        },
        {
          title: "Enhanced Safety & Real-Time Monitoring",
          desc: "Our systems include digital control panels with real-time monitoring of voltage, frequency, load, fuel levels, and engine parameters. Built-in safety mechanisms such as overload protection, short-circuit protection, low oil shutdown, and high-temperature cut-off ensure safe, reliable, and compliant operation throughout the project lifecycle.",
          icon: <Cpu size={20} />
        }
      ]
    },
    {
      id: "control",
      tabLabel: "Power Management & Control",
      tagline: "Power Management & Control Solutions",
      title: "Sophisticated Power Management & Infrastructure Control",
      desc: "At Nest Equipment Rental, we understand that reliable power generation is only half of the equation; true operational excellence requires precise management and distribution. We provide sophisticated control infrastructure designed to optimize performance, enhance safety, and eliminate the risks associated with power instability in the most demanding industrial, construction, and oil & gas environments.",
      image: "/images/Website Images/power distrubutions.png",
      subsections: [
        {
          title: "Synchronization Panels",
          desc: "Our synchronization panels are engineered for large-scale operations where power demand is variable and mission-critical. By enabling the parallel operation of multiple generators, our load-sharing controllers intelligently distribute power across your site, allowing the system to scale capacity dynamically based on real-time requirements. This modular approach optimizes fuel efficiency and reduces engine wear by engaging only the necessary capacity. Furthermore, this configuration provides vital N+1 redundancy, guaranteeing that your operations continue without interruption even if a single unit requires maintenance or unexpected servicing.",
          icon: <Cpu size={20} />
        },
        {
          title: "Automatic Transfer Switches (ATS)",
          desc: "The automatic transfer switch is the intelligent gateway to uninterruptible power. Designed for mission-critical industrial applications, our ATS units provide 24/7 monitoring of your primary grid. In the event of a voltage fluctuation or total outage, the system initiates an instantaneous switch to standby power. By automating this transition, our ATS technology ensures seamless power transfer and backup continuity, effectively shielding your sensitive industrial machinery, communication infrastructure, and control systems from the risks of sudden voltage drops or operational downtime.",
          icon: <SlidersHorizontal size={20} />
        },
        {
          title: "Manual & Automatic Changeover Systems",
          desc: "We prioritize the integrity of your site infrastructure through our comprehensive range of manual and automatic changeover systems. In high-voltage environments, safety is non-negotiable, which is why our switchgear is engineered to the highest industrial standards using heavy-duty mechanical and electrical interlocks. These systems prevent the simultaneous connection of utility and generator power, eliminating the risk of back-feeding while protecting both personnel and critical equipment. Whether your project requires a manual changeover switch for a temporary construction setup or a fully automated changeover panel for a permanent facility, our solutions deliver the safety, compliance, and operational reliability needed to maintain a secure and efficient power distribution network.",
          icon: <Settings size={20} />
        }
      ]
    },
    {
      id: "distribution",
      tabLabel: "Distribution & Cables",
      tagline: "Electrical Distribution & Cables",
      title: "Safe & Robust Electrical Distribution Solutions",
      desc: "We provide safe, efficient, and robust electrical distribution solutions to ensure reliable power flow across industrial sites and construction projects. Our systems are engineered to manage complex, heavy-duty load requirements while maintaining safety, stability, and seamless connectivity throughout the most challenging operational environments.",
      image: "/images/Website Images/power distrubutions.png",
      subsections: [
        {
          title: "High-Quality Distribution Boards",
          desc: "We provide custom-designed, IP-rated distribution boards and changeover switchboards equipped with MCBs, MCCBs, and RCCBs/ELCBs for robust protection against overloads, short circuits, and ground faults. These systems ensure safe switching, controlled power flow, and efficient load management across all connected equipment.",
          icon: <Layers size={20} />
        },
        {
          title: "Durable Cables & Secure Connectivity Systems",
          desc: "We utilize industrial-grade, flame-retardant, and weather-resistant cables, supporting extended cable deployments up to 5000 meters. This ensures efficient long-distance power transmission with minimal loss, even across large industrial zones, construction sites, and infrastructure projects.",
          icon: <Activity size={20} />
        },
        {
          title: "Safe Installation, Load Distribution & Ongoing Support",
          desc: "Our team executes structured cabling layouts with organized routing, clear identification labeling, and balanced load distribution across phases to prevent overheating and voltage drop. We adhere to rigorous safety protocols, including comprehensive earthing verification, insulation resistance testing, and pre-commissioning circuit audits. Through continuous on-site monitoring, proactive inspections, and rapid technical support, we ensure consistent performance and uninterrupted power flow for your mission-critical operations.",
          icon: <Shield size={20} />
        }
      ]
    },
    {
      id: "temporary-power",
      tabLabel: "Temporary Power UAE",
      tagline: "Temporary Power Solutions UAE",
      title: "Scalable, High-Performance Temporary Power Architecture",
      desc: "We deliver reliable, high-performance power solutions across the UAE, engineered to meet the demanding requirements of industrial sites, construction projects, and large-scale infrastructure developments. Our systems are designed to provide scalable, safe, and robust energy architecture that ensures operational continuity in any environment.",
      image: "/images/Website Images/power distrubutions.png",
      subsections: [
        {
          title: "Advanced Power Distribution Systems",
          desc: "Our power distribution setup includes custom-designed distribution boards (DBs), feeder pillars, and cable networks engineered to safely distribute power across multiple points. We supply heavy-duty electrical cables extending up to 5000 meters, ensuring reliable long-distance power transmission across large-scale project sites. Our infrastructure also includes integrated changeover switchboards and modular distribution panels, enabling safe, flexible, and efficient power routing for complex operational environments.",
          icon: <Layers size={20} />
        },
        {
          title: "Efficient Load Management For Optimized Performance",
          desc: "We implement intelligent load planning and management to ensure optimal generator utilization and fuel efficiency. Through load balancing techniques, we distribute electrical demand evenly across phases and generators, preventing overloads and voltage drops. Our systems also support real-time load monitoring, enabling adjustments based on actual consumption and ensuring stable performance throughout the operation.",
          icon: <SlidersHorizontal size={20} />
        },
        {
          title: "Reliable Backup Systems for Continuous Power Supply",
          desc: "To eliminate the risk of downtime, we provide integrated backup solutions, including standby generators, AMF panels, and synchronized systems. In the event of a primary power failure, backup units are automatically activated with minimal interruption. For critical operations, we design redundant power setups (N+1 configuration) to ensure continuous supply even during maintenance or unexpected faults.",
          icon: <Shield size={20} />
        },
        {
          title: "Technical Integration & On-Site Support",
          desc: "Our solutions are supported by experienced technicians and on-site engineers who manage installation, testing, and real-time supervision. We conduct load assessments, cable routing plans, and safety inspections prior to deployment, ensuring compliance with operational and safety standards across the UAE.",
          icon: <Headphones size={20} />
        }
      ]
    },
    {
      id: "lighting",
      tabLabel: "Event Lighting Solutions",
      tagline: "Event Lighting Equipment Rental UAE",
      title: "Professional Lighting Solutions & Site Illumination",
      desc: "We provide professional lighting solutions engineered to maximize visibility for critical site operations and create the perfect ambiance for high-profile events. Our equipment is designed for high performance, versatility, and uncompromising reliability across all environments.",
      image: "/images/Website Images/Lighting Soloutions.png",
      subsections: [
        {
          title: "High-Performance Tower Lights",
          desc: "Our tower lights are engineered for powerful, wide-area illumination, making them ideal for construction sites, industrial facilities, and large-scale outdoor events. Built for durability and fuel efficiency, these units support continuous operation and provide consistent lighting performance in demanding environments.",
          icon: <Lightbulb size={20} />
        },
        {
          title: "Versatile Industrial & Event Lighting Solutions",
          desc: "We offer a comprehensive portfolio of lighting equipment, ranging from high-intensity industrial floodlights and security spotlights to decorative lighting, trusses, and dimming control systems for specialized event requirements. Our setups support modular configurations, allowing for easy installation, precise positioning, and full customization based on your specific layout or site needs. With secure cabling, integrated control systems, and robust connectivity, we ensure seamless operation and efficient energy usage for both functional site safety and aesthetic project illumination.",
          icon: <Maximize2 size={20} />
        }
      ]
    },
    {
      id: "infrastructure",
      tabLabel: "Site Infrastructure & Safety",
      tagline: "Site Infrastructure & Safety Systems",
      title: "Comprehensive Site Infrastructure & Traffic Zoning",
      desc: "We provide complete infrastructure solutions to ensure safe, organized, and efficient operations across industrial, construction, and energy sectors. Our equipment is engineered to enhance site safety, streamline logistics, and maintain full compliance with strict occupational health and safety (OHS) regulations.",
      image: "/images/Website Images/Support Equipment.png",
      subsections: [
        {
          title: "Cable Management & Site Access Control",
          desc: "We offer heavy-duty cable ramps designed to protect power and data lines in high-traffic industrial zones, effectively preventing equipment damage and eliminating trip hazards. Furthermore, our industrial-grade fencing and modular barricades facilitate effective site zoning, helping to manage traffic flow, restrict access to hazardous areas, and create clearly defined operational boundaries for secure and controlled facility management.",
          icon: <ShieldAlert size={20} />
        },
        {
          title: "Safety Signage & Regulatory Compliance",
          desc: "Our range of industrial-grade safety signage ensures clear, immediate communication of hazard warnings, operational directions, and site-wide safety protocols. Built for high visibility and long-term durability in demanding outdoor conditions, these signs help maintain rigorous compliance with occupational health and safety regulations, improve hazard awareness, and foster a secure, compliant environment for all site personnel and contractors.",
          icon: <Shield size={20} />
        }
      ]
    },
    {
      id: "support",
      tabLabel: "Technical Support",
      tagline: "Operational & Technical Support",
      title: "End-to-End Operational Lifecycle Support",
      desc: "We deliver comprehensive technical support to ensure seamless, efficient operational execution from project inception to completion. Our commitment is anchored in mission-critical reliability, rigorous safety standards, and precise, timely delivery for every site deployment.",
      image: "/images/engineers_team.png",
      subsections: [
        {
          title: "Professional Installation, Commissioning & Demobilization",
          desc: "Our experienced engineering team handles the complete project lifecycle, including equipment installation, system integration, and final commissioning to ensure peak performance. We conduct thorough pre-commissioning testing, load assessments, and safety inspections, followed by efficient site decommissioning and demobilization upon project completion to ensure a clean, compliant, and ready-to-use site.",
          icon: <Wrench size={20} />
        },
        {
          title: "Dedicated On-Site Technical Support & Supervision",
          desc: "We provide skilled technicians and engineers on-site to monitor facility operations, manage dynamic load requirements, and resolve technical challenges in real-time. With continuous oversight, proactive troubleshooting, and coordinated support, we ensure uninterrupted performance and total operational reliability throughout the lifecycle of your industrial or infrastructure project.",
          icon: <Headphones size={20} />
        }
      ]
    },
    {
      id: "trading",
      tabLabel: "Equipment Trading",
      tagline: "Equipment Trading UAE",
      title: "High-Quality Equipment Sales & Procurement",
      desc: "We supply high-quality equipment and tailored solutions to meet diverse project and operational requirements across the UAE, ensuring reliability, performance, and compliance with industry standards.",
      image: "/images/Website Images/Power Genrator.png",
      subsections: [
        {
          title: "Generators, Power Equipment & Electrical Systems",
          desc: "We provide a wide range of diesel generators, electrical panels, cable systems, and power solutions designed for efficient and safe operation. Our portfolio also includes diesel storage tanks and load banks, supporting comprehensive power system deployment, testing, and fuel management requirements.",
          icon: <Zap size={20} />
        },
        {
          title: "Specialized Industrial & Utility Equipment",
          desc: "In addition to power systems, we supply air compressors ranging from 150 CFM to 1200 CFM, designed for heavy-duty industrial applications such as construction, drilling, and pneumatic operations. We also offer load banks for generator testing and performance validation, ensuring systems operate at optimal capacity before deployment. Our diesel tanks are built for safe fuel storage and efficient fuel management, supporting uninterrupted operations across remote and large-scale project sites.",
          icon: <TrendingUp size={20} />
        },
        {
          title: "Specialized Procurement & Customized Solutions",
          desc: "We offer flexible procurement services based on specific client requirements, sourcing specialized equipment and components as needed. With a focus on quality, compatibility, and timely delivery, we ensure each solution is tailored to meet unique operational demands.",
          icon: <Wrench size={20} />
        }
      ]
    },
    {
      id: "integrated",
      tabLabel: "Integrated Solutions",
      tagline: "Integrated Equipment Rental Solutions",
      title: "Seamlessly Integrated Turnkey Equipment Packages",
      desc: "We offer a complete range of equipment designed to work together seamlessly across industries, ensuring efficient and reliable operations.",
      image: "/images/Website Images/Support Equipment.png",
      subsections: [
        {
          title: "Power Generation & Fuel Systems",
          desc: "We provide soundproof diesel generators (20kVA–1500kVA), supported by diesel storage tanks and synchronization systems to ensure continuous and scalable power supply.",
          icon: <Zap size={20} />
        },
        {
          title: "Electrical Distribution & Cabling",
          desc: "Our solutions include distribution boards, changeover panels, and heavy-duty cables up to 5000 meters, ensuring safe and efficient power transmission across large sites.",
          icon: <Layers size={20} />
        },
        {
          title: "Lighting Solutions",
          desc: "Our tower lights deliver high-performance illumination for construction sites, industrial operations, and events, ensuring safety, visibility, and productivity.",
          icon: <Lightbulb size={20} />
        },
        {
          title: "Air & Industrial Equipment",
          desc: "We supply air compressors ranging from 150 CFM to 1200 CFM, designed for demanding industrial and construction applications requiring reliable compressed air.",
          icon: <Wrench size={20} />
        },
        {
          title: "Testing & Performance Equipment",
          desc: "Our load banks enable accurate testing and validation of generator performance, ensuring systems operate efficiently under real load conditions.",
          icon: <Activity size={20} />
        }
      ]
    }
  ];

  const whyPartnerList = [
    {
      title: "Safety First",
      desc: "All equipment is regularly inspected and maintained.",
      icon: <Shield size={22} />,
    },
    {
      title: "On-Time Delivery",
      desc: "We deliver, install, and support — right on schedule.",
      icon: <Clock size={22} />,
    },
    {
      title: "Expert Support",
      desc: "Our team is always ready to support you 24/7.",
      icon: <Headphones size={22} />,
    },
    {
      title: "Quality Assured",
      desc: "Top-quality equipment from trusted brands.",
      icon: <Award size={22} />,
    },
    {
      title: "Customer Focused",
      desc: "Your success is our top priority.",
      icon: <Users size={22} />,
    },
    {
      title: "Compliant & Certified",
      desc: "All equipment meets industry standards.",
      icon: <ShieldAlert size={22} />,
    },
  ];


  const overviewCards = [
    {
      anchorId: "power",
      title: "Power Generation",
      desc: "Reliable generators from 20 KVA to 1500 KVA for any event or project size.",
      image: "/images/Website Images/Power Genrator.png",
      icon: <Zap size={22} />,
      href: "/contact",
      bullets: [
        "20 KVA to 1500 KVA",
        "Silent & Super Silent Options",
        "Fuel Efficient & Reliable",
        "24/7 Technical Support",
      ],
    },
    {
      anchorId: "lighting",
      title: "Lighting Solutions",
      desc: "High-performance lighting solutions for maximum visibility and safety.",
      image: "/images/Website Images/Lighting Soloutions.png",
      icon: <Lightbulb size={22} />,
      href: "/contact",
      bullets: [
        "LED Tower Lights",
        "High Mast Lighting",
        "Area & Flood Lighting",
        "Energy Efficient",
      ],
    },
    {
      anchorId: "distribution",
      title: "Power Distribution",
      desc: "Safe and efficient power distribution systems and cabling solutions.",
      image: "/images/Website Images/power distrubutions.png",
      icon: <SlidersHorizontal size={22} />,
      href: "/contact",
      bullets: [
        "Distribution Boards",
        "Power Cables & Connectors",
        "Load Management",
        "Safe & Compliant Setup",
      ],
    },
    {
      anchorId: "support",
      title: "Support Equipment",
      desc: "A wide range of support equipment to keep your operations running.",
      image: "/images/Website Images/Support Equipment.png",
      icon: <Wrench size={22} />,
      href: "/contact",
      bullets: [
        "Air Compressors",
        "Welding Machines",
        "Fuel Tanks",
        "Load Banks & More",
      ],
    },
    {
      anchorId: "control",
      title: "Control & Switchgear",
      desc: "Advanced control solutions for seamless power management.",
      image: "/images/Website Images/6e81aa12-b980-4cc8-ba9f-36ae66496939.png",
      icon: <Cpu size={22} />,
      href: "/contact",
      bullets: [
        "Automatic Transfer Switches",
        "Changeover Panels",
        "Synchronization Panels",
        "Custom Control Solutions",
      ],
    },
    {
      anchorId: "cabling",
      title: "Cabling Solutions",
      desc: "High-quality cables and accessories for safe and reliable connections.",
      image: "/images/Website Images/a2f26f8d-7b20-441a-9496-c6f21002a3d3.png",
      icon: <Cable size={22} />,
      href: "/contact",
      bullets: [
        "Power Cables",
        "Cable Ramps",
        "Connectors & Accessories",
        "Installation Support",
      ],
    },
    {
      anchorId: "fuel",
      title: "Fuel Solutions",
      desc: "Secure fuel storage and delivery solutions for uninterrupted power.",
      image: "/images/Website Images/c1e08311-5d29-40c3-96f4-7b72a148d927.png",
      icon: <Fuel size={22} />,
      href: "/contact",
      bullets: [
        "Diesel Tanks",
        "Fuel Delivery",
        "Fuel Management",
        "Safe & Compliant",
      ],
    },
    {
      anchorId: "load",
      title: "Load Banks",
      desc: "Load bank solutions for testing and ensuring generator performance.",
      image: "/images/Website Images/689dea75-dd2b-4d83-ae78-7b031b4affe9.png",
      icon: <Activity size={22} />,
      href: "/contact",
      bullets: [
        "Resistive Load Banks",
        "Reactive Load Banks",
        "Testing & Commissioning",
        "Multiple Capacity Options",
      ],
    },
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={`${styles.heroGrid} hero-split hero-split--tall`}>
            <div className={`${styles.heroLeft} hero-split__content`}>
              <span className={styles.sectionTagline}>OUR SERVICES</span>
              <h1 className={styles.heroTitle}>
                COMPLETE EQUIPMENT<br />
                <span className={styles.redText}>RENTAL SOLUTIONS.</span>
              </h1>
              <p className={styles.heroDesc}>
                From power generation to lighting and beyond, we provide everything you need to make your event or project a success.
              </p>
              
              <div className={styles.heroHighlights}>
                <div className={styles.heroHighlightItem}>
                  <div className={styles.heroHighlightIcon}><Shield size={24} /></div>
                  <div className={styles.heroHighlightText}>
                    <h4>Reliable</h4>
                    <p>High-quality equipment you can trust.</p>
                  </div>
                </div>
                
                <div className={styles.heroHighlightItem}>
                  <div className={styles.heroHighlightIcon}><Clock size={24} /></div>
                  <div className={styles.heroHighlightText}>
                    <h4>On-Time</h4>
                    <p>Always on schedule, every time.</p>
                  </div>
                </div>
                
                <div className={styles.heroHighlightItem}>
                  <div className={styles.heroHighlightIcon}><Users size={24} /></div>
                  <div className={styles.heroHighlightText}>
                    <h4>Expert Team</h4>
                    <p>Skilled professionals ready to support.</p>
                  </div>
                </div>
                
                <div className={styles.heroHighlightItem}>
                  <div className={styles.heroHighlightIcon}><Award size={24} /></div>
                  <div className={styles.heroHighlightText}>
                    <h4>End-to-End Support</h4>
                    <p>From planning to completion.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${styles.heroRight} hero-split__media`}>
              <div className={`${styles.heroImageWrapper} hero-split__frame`}>
                <Image
                  src="/images/Website Images/6e81aa12-b980-4cc8-ba9f-36ae66496939.png"
                  alt="Complete Equipment Rental Solutions"
                  fill
                  sizes="(max-width: 1100px) 100vw, 50vw"
                  priority
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewHeader}>
            <span className={styles.sectionTagline}>WHAT WE OFFER</span>
            <h2 className={styles.overviewTitle}>Our Full Range of <span className={styles.redText}>Services</span></h2>
            <p className={styles.overviewDesc}>From power generation to cabling and everything in between — we provide comprehensive equipment rental solutions built for demanding environments.</p>
          </div>

          <div className={styles.overviewGrid}>
            {overviewCards.map((card, index) => (
              <div
                key={card.anchorId}
                id={card.anchorId}
                className={`${styles.overviewCard} scroll-anchor`}
              >
                {/* Background image */}
                <div className={styles.overviewCardBg}>
                  <Image src={card.image} alt={card.title} fill className={styles.overviewCardImg} />
                  <div className={styles.overviewCardGradient} />
                </div>

                {/* Content */}
                <div className={styles.overviewCardContent}>
                  <div className={styles.overviewCardIcon}>
                    {card.icon}
                  </div>
                  <h3 className={styles.overviewCardTitle}>{card.title}</h3>
                  <p className={styles.overviewCardDesc}>{card.desc}</p>
                  <ul className={styles.overviewCardBullets}>
                    {card.bullets.map((b, i) => (
                      <li key={i}>
                        <span className={styles.bulletDot} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.href} className={styles.overviewCardLink}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        {/* Left: image background panel */}
        <div className={styles.whyLeft}>
          <div className={styles.whyBgImage}>
            <Image
              src="/images/Website Images/0d8ee286-ff5e-46d6-8583-60fb73a9ffed.png"
              alt="Why Choose NEST"
              fill
              className={styles.whyBgImg}
            />
            <div className={styles.whyBgOverlay} />
          </div>
          <div className={styles.whyLeftContent}>
            <span className={styles.whySectionTagline}>WHY CHOOSE NEST</span>
            <h2 className={styles.whyTitle}>
              Built for Performance.<br />
              <span className={styles.redText}>Driven by Reliability.</span>
            </h2>
            <p className={styles.whyDesc}>
              We go beyond equipment rental. We deliver expertise, precision, and support to ensure your project runs smoothly from start to finish.
            </p>
            <Link href="/about" className={styles.whyBtn}>
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: feature cards grid */}
        <div className={styles.whyRight}>
          {whyPartnerList.map((item, index) => (
            <div key={index} className={styles.whyCard}>
              <div className={styles.whyCardIconWrap}>
                {item.icon}
              </div>
              <div className={styles.whyCardBody}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
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
              <h2>Need a Custom Integrated Configuration?</h2>
              <p className={styles.redText}>Let's design and size your project power systems.</p>
              <p className={styles.ctaSubText}>Our experts are ready to understand your needs and provide the right solution for you.</p>
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
