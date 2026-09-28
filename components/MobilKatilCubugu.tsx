"use client";

import { useEffect, useState } from "react";
import { EXTERNAL, JOIN_URL } from "@/lib/links";

// Thin sticky "Kulübe Katıl" bar on mobile, shown once the visitor scrolls past the first screen.
export default function MobilKatilCubugu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`on-dark fixed inset-x-0 bottom-0 z-40 border-t border-paper/10 bg-navy-deep/95 px-4 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur transition-transform duration-300 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <a href={JOIN_URL} {...EXTERNAL} tabIndex={visible ? 0 : -1} className="btn btn-pulse w-full">
        Kulübe Katıl
      </a>
    </div>
  );
}
