"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Headphones, Zap, Shield, Mail, Phone, MapPin, Globe, Check, ArrowRight, Lock, Clock, Award, Users
} from "lucide-react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      title: "Head Office",
      detail: "M-38, Mussafah Industrial Area",
      subDetail: "Abu Dhabi, United Arab Emirates",
      icon: <MapPin size={20} />,
      bgImage: "linear-gradient(rgba(207, 0, 34, 0.05), rgba(6, 7, 10, 0.95))"
    },
    {
      title: "Phone",
      detail: "+971 56 507 0050",
      subDetail: "Melvern Ricky Moras (Managing Director)",
      icon: <Phone size={20} />,
      bgImage: "linear-gradient(rgba(207, 0, 34, 0.05), rgba(6, 7, 10, 0.95))"
    },
    {
      title: "Email",
      detail: "info@nest-rental.ae",
      subDetail: "We reply within 1 hour",
      icon: <Mail size={20} />,
      bgImage: "linear-gradient(rgba(207, 0, 34, 0.05), rgba(6, 7, 10, 0.95))"
    },
    {
      title: "Website",
      detail: "www.nest-rental.ae",
      subDetail: "Visit our website",
      icon: <Globe size={20} />,
      bgImage: "linear-gradient(rgba(207, 0, 34, 0.05), rgba(6, 7, 10, 0.95))"
    }
  ];

  const whyChooseList = [
    {
      title: "Safety First",
      desc: "All equipment is regularly inspected and maintained.",
      icon: <Shield size={24} />
    },
    {
      title: "On-Time Delivery",
      desc: "We deliver, install, and support - right on schedule.",
      icon: <Clock size={24} />
    },
    {
      title: "Expert Team",
      desc: "Skilled professionals ready to support 24/7.",
      icon: <Headphones size={24} />
    },
    {
      title: "Quality Assured",
      desc: "Top-quality equipment from trusted brands.",
      icon: <Award size={24} />
    },
    {
      title: "Customer Focused",
      desc: "Your success is our top priority.",
      icon: <Users size={24} />
    },
    {
      title: "Compliant & Certified",
      desc: "All equipment meets industry standards.",
      icon: <Shield size={24} />
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroHeader}>
            <span className={styles.sectionTagline}>CONTACT US</span>
            <h1 className={styles.heroTitle}>
              LET'S POWER<br />
              <span className={styles.redText}>YOUR NEXT PROJECT.</span>
            </h1>
            <p className={styles.heroDesc}>
              Have a question, need equipment, or ready to get started? Our team is here to provide the right power solutions and support from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Info Stats Bar */}
      <section className={styles.infoBarSection}>
        <div className={styles.container}>
          <div className={styles.infoBarGrid}>
            <div className={`${styles.infoBarCard} glass-card`}>
              <Headphones size={24} className={styles.infoBarIcon} />
              <div>
                <h3>Expert Support</h3>
                <p>Our team is ready to assist you 24/7.</p>
              </div>
            </div>
            <div className={`${styles.infoBarCard} glass-card`}>
              <Zap size={24} className={styles.infoBarIcon} />
              <div>
                <h3>Quick Response</h3>
                <p>We respond fast because your time matters.</p>
              </div>
            </div>
            <div className={`${styles.infoBarCard} glass-card`}>
              <Shield size={24} className={styles.infoBarIcon} />
              <div>
                <h3>Reliable Solutions</h3>
                <p>Safe, efficient, and tailored power solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className={styles.formSection}>
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
                {contactCards.map((card, idx) => (
                  <div key={idx} className={`${styles.contactInfoCard} glass-card`}>
                    <div className={styles.cardHeaderFlex}>
                      <div className={styles.cardIconWrapper}>{card.icon}</div>
                      <div>
                        <h3>{card.title}</h3>
                        <p className={styles.cardPrimaryDetail}>{card.detail}</p>
                        <p className={styles.cardSecondaryDetail}>{card.subDetail}</p>
                      </div>
                    </div>
                  </div>
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

                <button type="submit" className={styles.submitBtn}>
                  Send Message <ArrowRight size={16} />
                </button>

                <div className={styles.secureBadge}>
                  <Lock size={14} className={styles.lockIcon} />
                  <span>Your information is safe and secure and will not be shared.</span>
                </div>
              </form>

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
          <div className={styles.whyHeader}>
            <span className={styles.sectionTagline}>WHY CHOOSE NEST?</span>
            <h2 className={styles.whyTitle}>POWERED BY RELIABILITY.</h2>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseList.map((item, index) => (
              <div key={index} className={`${styles.whyCard} glass-card`}>
                <div className={styles.whyCardIconWrapper}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
