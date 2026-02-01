import React, { useEffect, useState } from "react";
import "./Gallery.css";

import droneSpray from "/src/assets/drone-spray.png";
import chargingStation from "/src/assets/charging-station.png";
import fields from "/src/assets/fields.png";
import teamSession from "/src/assets/team-session.png";

const items = [
  { title: "ڈرون اسپرے", image: droneSpray },
  { title: "چارجنگ اسٹیشن", image: chargingStation },
  { title: "کھیتوں کی تصاویر", image: fields },
  { title: "ٹیم سیشنز", image: teamSession },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="gallery">
      <div className="galleryHeader">
        <h2 className="galleryTitle">ہماری گیلری</h2>
        <p className="galleryIntro">
          جدید ڈرون ٹیکنالوجی، تربیت یافتہ ٹیم اور حقیقی فیلڈ آپریشنز
        </p>
      </div>

      <div className="gallerySlider">
        <div
          className="galleryTrack"
          style={{
            width: `${items.length * 100}%`,     // 🔥 THIS FIXES IT
            transform: `translateX(-${index * (100 / items.length)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="gallerySlide"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="galleryOverlay">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="galleryDots">
          {items.map((_, i) => (
            <span
              key={i}
              className={`galleryDot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
