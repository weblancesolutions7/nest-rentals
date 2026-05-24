import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy | NEST Equipment Rental",
  description: "Privacy policy for Nest Equipment Rental Sole Proprietorship L.L.C.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <span className={styles.tagline}>LEGAL</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.content}>
          <p>
            Nest Equipment Rental Sole Proprietorship L.L.C. (&quot;NEST&quot;, &quot;we&quot;,
            &quot;us&quot;) respects your privacy. This policy explains how we collect, use,
            and protect personal information when you visit our website or contact us
            about equipment rental services.
          </p>
          <h2>Information we collect</h2>
          <p>
            We may collect your name, company name, email address, phone number, project
            details, and any information you submit through our contact form or by phone
            or email.
          </p>
          <h2>How we use your information</h2>
          <p>
            We use your information to respond to inquiries, provide quotes, deliver
            services, improve our website, and communicate with you about your rental
            requirements.
          </p>
          <h2>Data sharing</h2>
          <p>
            We do not sell your personal information. We may share data with trusted
            service providers only when necessary to operate our business or comply with
            applicable law.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
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
