import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import styles from "../legal.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for equipment rental services provided by Nest Equipment Rental Sole Proprietorship L.L.C. across the United Arab Emirates.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <span className={styles.tagline}>LEGAL</span>
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <div className={styles.content}>
          <p>
            These terms govern your use of the NEST Equipment Rental website and our
            equipment rental services in the United Arab Emirates. By using this website
            or engaging our services, you agree to these terms.
          </p>
          <h2>Services</h2>
          <p>
            Equipment availability, specifications, and rental terms are confirmed in
            writing per project. Quotes are subject to site assessment and applicable
            regulations.
          </p>
          <h2>Rental agreements</h2>
          <p>
            Formal rental terms—including delivery, operation, maintenance, insurance,
            and liability—are set out in project-specific agreements signed before
            equipment mobilization.
          </p>
          <h2>Website use</h2>
          <p>
            Content on this website is provided for general information. We strive to
            keep information accurate but do not guarantee completeness at all times.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms may be directed to{" "}
            <a href="mailto:info@nest-rental.ae">info@nest-rental.ae</a> or{" "}
            <a href="tel:+971565070050">+971 56 507 0050</a>.
          </p>
        </div>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
