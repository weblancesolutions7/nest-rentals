import Image from "next/image";
import styles from "./CtaLogo.module.css";

export const CTA_LOGO_PATH =
  "/images/logo/Nest Logo PNG Logo only for Both backgrounds.png";

type CtaLogoProps = {
  className?: string;
  size?: number;
};

export default function CtaLogo({ className, size = 72 }: CtaLogoProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <Image
        src={CTA_LOGO_PATH}
        alt="NEST Equipment Rental"
        width={size}
        height={size}
        className={styles.image}
      />
    </div>
  );
}
