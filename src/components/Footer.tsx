"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import styles from "./Footer.module.css";

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
                <a
                  href="mailto:info@nest-rental.ae"
                  aria-label="Email NEST Equipment Rental"
                  className={styles.socialLink}
                >
                  <Mail size={18} />
                </a>
                <a
                  href="tel:+971565070050"
                  aria-label="Call NEST Equipment Rental"
                  className={styles.socialLink}
                >
                  <Phone size={18} />
                </a>
                <a
                  href="https://www.nest-rental.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit NEST website"
                  className={styles.socialLink}
                >
                  <Globe size={18} />
                </a>
                <Link href="/contact" aria-label="Contact NEST" className={styles.socialLink}>
                  <MapPin size={18} />
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.linksCol}>
              <h3 className={styles.colTitle}>QUICK LINKS</h3>
              <ul className={styles.linksList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="/about">About Us</Link></li>
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
