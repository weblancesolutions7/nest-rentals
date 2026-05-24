"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the intro has already played in this browser session
    const hasPlayed = sessionStorage.getItem("nest_intro_played");
    if (!hasPlayed) {
      setVisible(true);

      // Force fade-out after 6 seconds as a fallback safety net
      const timer = setTimeout(() => {
        handleDismiss();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setFading(true);
    sessionStorage.setItem("nest_intro_played", "true");
    setTimeout(() => {
      setVisible(false);
    }, 850); // Match CSS fadeOut animation duration
  };

  if (!visible) return null;

  return (
    <div className={`${styles.loaderOverlay} ${fading ? styles.fadeOut : ""}`}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleDismiss}
          className={styles.loaderVideo}
        >
          <source src="/nest.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Skip Button for User Control */}
      <button onClick={handleDismiss} className={styles.skipBtn}>
        Skip Intro
      </button>
    </div>
  );
}
