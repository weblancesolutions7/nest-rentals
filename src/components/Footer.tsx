"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import styles from "./Footer.module.css";

// Custom SVG implementations for brand icons removed in lucide-react v1.0+
const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Column 1: Company Profile */}
            <div className={styles.companyInfo}>
              <div className={styles.logoContainer}>
                <Image 
                  src="/images/logo/Nest Logo PNG for Black background.png" 
                  alt="NEST Equipment Rental" 
                  width={180} 
                  height={50} 
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.description}>
                Powering reliable operations across the UAE with premium equipment and expert support.
              </p>
              <div className={styles.socials}>
                <a href="#" aria-label="Facebook" className={styles.socialLink}><Facebook size={18} /></a>
                <a href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={18} /></a>
                <a href="#" aria-label="Instagram" className={styles.socialLink}><Instagram size={18} /></a>
                <a href="#" aria-label="YouTube" className={styles.socialLink}><Youtube size={18} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.linksCol}>
              <h3 className={styles.colTitle}>QUICK LINKS</h3>
              <ul className={styles.linksList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/equipment">Equipment</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className={styles.linksCol}>
              <h3 className={styles.colTitle}>SERVICES</h3>
              <ul className={styles.linksList}>
                <li><Link href="/services#power">Power Generation</Link></li>
                <li><Link href="/services#lighting">Lighting Solutions</Link></li>
                <li><Link href="/services#distribution">Power Distribution</Link></li>
                <li><Link href="/services#support">Support Equipment</Link></li>
                <li><Link href="/services#control">Control & Switchgear</Link></li>
                <li><Link href="/services#cabling">Cabling Solutions</Link></li>
                <li><Link href="/services#fuel">Fuel Solutions</Link></li>
                <li><Link href="/services#load">Load Banks</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className={styles.linksCol}>
              <h3 className={styles.colTitle}>CONTACT US</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <span>M-38, Mussafah Industrial Area<br />Abu Dhabi, United Arab Emirates.</span>
                </li>
                <li className={styles.contactItem}>
                  <Phone size={18} className={styles.contactIcon} />
                  <a href="tel:+971565070050">+971 56 507 0050</a>
                </li>
                <li className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <a href="mailto:info@nest-rental.ae">info@nest-rental.ae</a>
                </li>
                <li className={styles.contactItem}>
                  <Globe size={18} className={styles.contactIcon} />
                  <a href="https://www.nest-rental.ae" target="_blank" rel="noopener noreferrer">www.nest-rental.ae</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomFlex}>
            <p className={styles.copyright}>
              © 2025 Nest Equipment Rental Sole Proprietorship L.L.C. All Rights Reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <span className={styles.separator}>|</span>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
