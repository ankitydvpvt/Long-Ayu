"use client";

import { useEffect, useRef } from "react";
import "./leaf.css";

export default function LeafScene() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const world = document.createElement("div");
    world.className = "leaf-scene";
    container.appendChild(world);

    const leaves = [];
    const COUNT = 20;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resetLeaf = (leaf) => {
      leaf.x = Math.random() * width;
      leaf.y = -20;
      leaf.speedY = Math.random() * 1.5 + 0.5;
      leaf.speedX = Math.random() * 0.6 - 0.3;
      leaf.rotate = Math.random() * 360;
    };

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement("div");
      el.className = "leaf";
      world.appendChild(el);

      const leaf = { el };
      resetLeaf(leaf);
      leaves.push(leaf);
    }

    let raf;
    const animate = () => {
      leaves.forEach((leaf) => {
        leaf.y += leaf.speedY;
        leaf.x += leaf.speedX;
        leaf.rotate += 0.5;

        leaf.el.style.transform = `translate(${leaf.x}px, ${leaf.y}px) rotate(${leaf.rotate}deg)`;

        if (leaf.y > height + 20) resetLeaf(leaf);
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return <div ref={ref} className="falling-leaves" />;
}
