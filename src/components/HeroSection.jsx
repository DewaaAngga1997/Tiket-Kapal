import React from "react";
import gambarhero from "../assets/images/gambar-hero.png";

export default function HeroSection() {
  return (
    <div>
      <img src={gambarhero} alt="hero" className="absolute" />
    </div>
  );
}
