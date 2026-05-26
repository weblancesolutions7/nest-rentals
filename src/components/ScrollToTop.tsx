"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Prevent the browser from restoring scroll position on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Scroll to top on page load/reload immediately
    const htmlEl = document.documentElement;
    const originalScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      htmlEl.style.scrollBehavior = originalScrollBehavior;
    }, 50);

    return () => {
      clearTimeout(timer);
      htmlEl.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  useEffect(() => {
    // 3. Scroll to top on pathname changes (navigation/redirect)
    const htmlEl = document.documentElement;
    const originalScrollBehavior = htmlEl.style.scrollBehavior;
    
    // Temporarily disable smooth scrolling to scroll to top instantly
    htmlEl.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      htmlEl.style.scrollBehavior = originalScrollBehavior;
    }, 50);

    return () => {
      clearTimeout(timer);
      htmlEl.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
}
