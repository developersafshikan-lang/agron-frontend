import React from "react";
import "./Services.css";

export default function Services() {
  const cards = [
    {
      title: "🚁 ڈرون اسپرے سروس",
      desc: "فصلوں کے لیے تیز، یکساں اور محفوظ اسپرے۔ کم ضیاع، بہتر کوریج۔",
      points: ["فی ایکڑ سروس", "فیلڈ کے مطابق پلان", "محفوظ آپریشن"],
    },
    {
      title: "🛒 Ino Drone (Sale)",
      desc: "Ino Drone خریدنے کے لیے بنیادی معلومات اور دستیابی (placeholder).",
      points: ["ڈیمو/تربیت", "پارٹس سپورٹ", "وارنٹی/سروس"],
    },
    {
      title: "🧑‍✈️ پائلٹس + ٹیک سپورٹ",
      desc: "تربیت یافتہ پائلٹس، سیفٹی SOPs، اور آپریشنل ٹیک سپورٹ۔",
      points: ["ٹرینڈ ٹیم", "سیفٹی چیک لسٹ", "فیلڈ سپورٹ"],
    },
  ];

  return (
    <section id="services" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">🚁 اسپرے سروسز</h2>
          <div className="meta">کسانوں کے لیے فوری، آسان سروس</div>
        </div>

        <div className="servicesGrid">
          {cards.map((c) => (
            <div key={c.title} className="card cardPad cardHover">
              <div className="cardTitle">{c.title}</div>
              <div className="cardSub">{c.desc}</div>
              <ul className="bullets">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="noteBox">
          💬 <b>WhatsApp confirmation</b> کے لیے اوپر والا بٹن استعمال کریں — یا بکنگ فارم جمع کرائیں۔
        </div>
      </div>
    </section>
  );
}
