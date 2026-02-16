"use client";
import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
   <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67]">
  <div className="relative w-64 h-64 rounded-full overflow-hidden ring-8 ring-white shadow-[0_0_40px_rgba(255,255,255,0.7)] animate-splash-in highlight-sweep">
    <img
      src="/long-ayu.jpeg"
      alt="Splash"
      className="w-full h-full object-cover"
    />
  </div>
</div>




  );
}
