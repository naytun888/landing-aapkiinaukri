"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    __fbqInitialized?: boolean;
  }
}

export default function MetaPixel() {
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    if (!PIXEL_ID) return;

    if (typeof window !== "undefined" && window.__fbqInitialized) return;

    if (typeof window !== "undefined" && !window.fbq) {
      const n: any = function (...args: any[]) {
        if ((n as any).callMethod) {
          (n as any).callMethod.apply(n, args);
        } else {
          (n as any).queue.push(args);
        }
      };
      (n as any).queue = [];
      (n as any).loaded = true;
      (n as any).version = "2.0";
      window.fbq = n;
      window._fbq = n;

      const s = document.createElement("script");
      s.async = true;
      s.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(s);
    }

    window.fbq?.("init", PIXEL_ID);
    window.fbq?.("track", "PageView");
    window.__fbqInitialized = true;
  }, [PIXEL_ID]);

  return null;
}
