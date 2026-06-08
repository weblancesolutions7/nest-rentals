"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Globe,
  Check,
  ArrowRight,
  Lock,
  Timer,
  Star,
  Users,
  Clock,
  ClipboardCheck,
  AlertCircle,
} from "lucide-react";
import CtaLogo from "@/components/CtaLogo";
import { sendContactEmail } from "@/lib/contactEmail";
import styles from "./page.module.css";

export default function ContactPage() {
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

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactEmail(formData);

      setSubmitted(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again or contact us directly.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      title: "Head Office",
      detail: "M-38, Mussafah Industrial Area",
      subDetail: "Abu Dhabi, United Arab Emirates",
      icon: <MapPin size={20} />,
      href: "https://www.google.com/maps/search/?api=1&query=M-38+Mussafah+Industrial+Area+Abu+Dhabi",
      external: true,
    },
    {
      title: "Phone",
      detail: "+971 56 507 0050",
      subDetail: "Melvern Ricky Moras (Managing Director)",
      icon: <Phone size={20} />,
      href: "tel:+971565070050",
    },
    {
      title: "Email",
      detail: "info@nest-rental.ae",
      subDetail: "We reply within 1 hour",
      icon: <Mail size={20} />,
      href: "mailto:info@nest-rental.ae",
    },
    {
      title: "Website",
      detail: "www.nest-rental.ae",
      subDetail: "Visit our website",
      icon: <Globe size={20} />,
      href: "https://www.nest-rental.ae",
      external: true,
    },
  ];

  const heroFeatures = [
    {
      title: "Expert Support",
      desc: "Our team is ready to assist you 24/7.",
      icon: Headphones,
    },
    {
      title: "Quick Response",
      desc: "We respond fast because your time matters.",
      icon: Timer,
    },
    {
      title: "Reliable Solutions",
      desc: "Safe, efficient, and tailored power solutions.",
      icon: ShieldCheck,
    },
  ];

  const whyChooseList = [
    {
      title: "Safety First",
      desc: "All equipment is regularly inspected and maintained.",
      icon: ShieldCheck,
    },
    {
      title: "On-Time Delivery",
      desc: "We deliver, install, and support right on schedule.",
      icon: Clock,
    },
    {
      title: "Expert Team",
      desc: "Skilled professionals ready to support 24/7.",
      icon: Headphones,
    },
    {
      title: "Quality Assured",
      desc: "Top-quality equipment from trusted brands.",
      icon: Star,
    },
    {
      title: "Customer Focused",
      desc: "Your success is our top priority.",
      icon: Users,
    },
    {
      title: "Compliant & Certified",
      desc: "All equipment meets industry standards.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={`${styles.heroGrid} hero-split hero-split--tall`}>
            <div className={`${styles.heroLeft} hero-split__content`}>
              <span className={styles.sectionTagline}>CONTACT US</span>
              <h1 className={styles.heroTitle}>
                LET&apos;S POWER<br />
                <span className={styles.redText}>YOUR NEXT PROJECT.</span>
              </h1>
              <p className={styles.heroDesc}>
                Have a question, need equipment, or ready to get started? Our team
                is here to provide the right power solutions and support you from
                start to finish.
              </p>

              <div className={styles.heroFeatures}>
                {heroFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <React.Fragment key={feature.title}>
                      <div className={styles.heroFeatureItem}>
                        <Icon
                          size={28}
                          strokeWidth={1.5}
                          className={styles.heroFeatureIcon}
                          aria-hidden
                        />
                        <h3 className={styles.heroFeatureTitle}>{feature.title}</h3>
                        <p className={styles.heroFeatureDesc}>{feature.desc}</p>
                      </div>
                      {idx < heroFeatures.length - 1 && (
                        <div className={styles.heroFeatureDivider} aria-hidden />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className={`${styles.heroRight} hero-split__media`}>
              <div className={`${styles.heroImageWrapper} hero-split__frame`}>
                <Image
                  src="/Home and contact.png"
                  alt="NEST Equipment Rental mobile office container"
                  fill
                  priority
                  sizes="(max-width: 1100px) 100vw, 50vw"
                  className={styles.heroImg}
                />
                <div className={`${styles.heroImgBlend} hero-split__blend`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section id="contact-form" className={`${styles.formSection} scroll-anchor`}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            {/* Left Column: Contact Cards */}
            <div className={styles.contactInfoCol}>
              <span className={styles.sectionTagline}>GET IN TOUCH</span>
              <h2 className={styles.columnTitle}>We're Here to Help</h2>
              <p className={styles.columnDesc}>
                Reach out to us for equipment rental, technical support, or any inquiries. We'll get back to you as soon as possible.
              </p>

              <div className={styles.cardsGrid}>
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    className={`${styles.contactInfoCard} glass-card`}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <div className={styles.cardHeaderFlex}>
                      <div className={styles.cardIconWrapper}>{card.icon}</div>
                      <div>
                        <h3>{card.title}</h3>
                        <p className={styles.cardPrimaryDetail}>{card.detail}</p>
                        <p className={styles.cardSecondaryDetail}>{card.subDetail}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Message Form */}
            <div className={`${styles.formCard} glass-card`}>
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and our team will get back to you.</p>

              <form onSubmit={handleSubmit} className={styles.messageForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +971 50 123 4567"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectType">Project Type / Industry</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select Project Type</option>
                    <option value="Events">Events & Exhibitions</option>
                    <option value="Construction">Construction & Contracting</option>
                    <option value="OilGas">Oil & Gas / Marine</option>
                    <option value="Industrial">Industrial & Manufacturing</option>
                    <option value="Emergency">Emergency Power</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your power or equipment requirements..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={16} />
                </button>

                <div className={styles.secureBadge}>
                  <Lock size={14} className={styles.lockIcon} />
                  <span>Your information is safe and secure and will not be shared.</span>
                </div>
              </form>

              {submitError && (
                <div className={styles.errorAlert} role="alert">
                  <AlertCircle size={18} />
                  <span>{submitError}</span>
                </div>
              )}

              {submitted && (
                <div className={styles.successAlert}>
                  <Check size={18} />
                  <span>Message sent successfully! We will get back to you shortly.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map & Business Hours */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapLayout}>
            {/* Left side: Google Map */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14543.834015638202!2d54.51098485!3d24.3130768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4125bcf8e0df%3A0x67ee1c5b0df14c5c!2sMusaffah%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NEST Equipment Rental Head Office - Musaffah Abu Dhabi"
              ></iframe>
            </div>

            {/* Right side: Hours & Emergency */}
            <div className={styles.hoursCol}>
              <div className={`${styles.hoursCard} glass-card`}>
                <h3>Business Hours</h3>
                <ul className={styles.hoursList}>
                  <li>
                    <span className={styles.day}>Monday - Friday</span>
                    <span className={styles.time}>8:00 AM - 6:00 PM</span>
                  </li>
                  <li>
                    <span className={styles.day}>Saturday</span>
                    <span className={styles.time}>8:00 AM - 2:00 PM</span>
                  </li>
                  <li>
                    <span className={styles.day}>Sunday</span>
                    <span className={styles.timeClosed}>Closed</span>
                  </li>
                  <li>
                    <span className={styles.day}>Public Holidays</span>
                    <span className={styles.timeClosed}>Closed</span>
                  </li>
                </ul>
              </div>

              <div className={styles.emergencyBox}>
                <div className={styles.emergencyGlow}></div>
                <h3>Emergency Support</h3>
                <p className={styles.emergencyHighlight}>Available 24/7</p>
                <p className={styles.emergencyText}>
                  For urgent power requirements, our team is always on standby to support your operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nest */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyPanel}>
            <div className={styles.whyHeader}>
              <span className={styles.sectionTagline}>WHY CHOOSE NEST?</span>
              <h2 className={styles.whyTitle}>POWERED BY RELIABILITY.</h2>
            </div>

            <div className={styles.whyGrid}>
              {whyChooseList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.title}>
                    <div className={styles.whyItem}>
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className={styles.whyIcon}
                        aria-hidden
                      />
                      <h3 className={styles.whyItemTitle}>{item.title}</h3>
                      <p className={styles.whyItemDesc}>{item.desc}</p>
                    </div>
                    {idx < whyChooseList.length - 1 && (
                      <div className={styles.whyDivider} aria-hidden />
                    )}
                  </React.Fragment>
                );
              })}
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
              <Link href="#contact-form" className={styles.ctaActionBtn}>
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
