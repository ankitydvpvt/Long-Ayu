"use client";

import { useState } from "react";

import Menu from "@/Universal/Menu";
import HomeContent from "@/app/home/HomeContent";
import LeafScene from "@/Universal/LeafScene";
import SplashScreen from "@/Universal/SplashScreen";

export default function First() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {!showSplash && (
        <div className="relative min-h-screen">

          {/* Leaf animation (background layer) */}
          <div className="fixed inset-0 z-[5] bg-red-200/10">
            <LeafScene />
          </div>

          {/* Header */}
          <Menu />

          {/* Main content */}
          <HomeContent />
        </div>
      )}
    </>
  );
}
