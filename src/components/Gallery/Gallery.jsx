import React, { useEffect, useState } from "react";
import "./Gallery.css";

const items = [
  { title: "ڈرون اسپرے", image: "/assets/drone-spray.png" },
  { title: "چارجنگ اسٹیشن", image: "/assets/charging-station.png" },
  { title: "کھیتوں کی تصاویر", image: "/assets/fields.png" },
  { title: "ٹیم سیشنز", image: "/assets/team-session.png" },
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
            width: `${items.length * 100}%`,
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
