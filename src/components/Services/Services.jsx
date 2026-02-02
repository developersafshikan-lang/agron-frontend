import React, { useState } from "react";
import "./Services.css";

export default function Services() {
  const [open, setOpen] = useState(null);

  const steps = [
    {
      id: 1,
      title: "فصل کا تحفظ",
      tagline: "جتنی ضرورت، اتنا اسپرے",
      image: "/assets/step-1.png",
      details: [
        "جڑی بوٹی مار، فنگس اور کیڑے مار اسپرے",
        "یکساں کوریج، کم کیمیکل ضیاع",
        "فصل اور زمین کے لیے محفوظ",
      ],
    },
    {
      id: 2,
      title: "بہتر افزائش",
      tagline: "ہر بیج صحیح جگہ",
      image: "/assets/step-2.png",
      details: [
        "کھاد اور بیج اسپرے سہولت",
        "گرینول سپریڈنگ (0.5–0.6 ملی میٹر)",
        "بڑے اور درمیانے کھیتوں کے لیے موزوں",
      ],
    },
    {
      id: 3,
      title: "نگرانی",
      tagline: "مسئلہ آنے سے پہلے خبردار",
      image: "/assets/step-3.png",
      details: [
        "فصل کی فضائی نگرانی",
        "ابتدائی بیماری اور کمزوری کی نشاندہی",
        "ڈیٹا پر مبنی مشاہدہ",
      ],
    },
    {
      id: 4,
      title: "درست فیصلہ",
      tagline: "اندازے نہیں، ڈیٹا پر فیصلے",
      image: "/assets/step-4.png",
      details: [
        "پیداوار کے بہتر اندازے",
        "کٹائی کی منصوبہ بندی",
        "نقصان میں نمایاں کمی",
      ],
    },
  ];

  return (
    <section id="services" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader center">
          <h2 className="h2 urdu">مٹی سے آسمان تک</h2>
          <p className="sectionSub urdu">
            فصل کی مکمل کہانی — تحفظ سے فیصلے تک
          </p>
        </div>

        <div className="stepsFlow">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`stepBox ${open === s.id ? "open" : ""}`}
              style={{ backgroundImage: `url(${s.image})` }}
              onMouseEnter={() => setOpen(s.id)}
              onMouseLeave={() => setOpen(null)}
              onClick={() => setOpen(open === s.id ? null : s.id)}
            >
              <div className="stepOverlay" />

              <div className="stepContent">
                <div className="stepHeader">
                  <div className="stepNo urdu">قدم {s.id}</div>
                  <div>
                    <h3 className="stepTitle urdu">{s.title}</h3>
                    <div className="stepTagline urdu">{s.tagline}</div>
                  </div>
                </div>

                <div className="stepBody">
                  <ul>
                    {s.details.map((d) => (
                      <li key={d} className="urdu">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {i !== steps.length - 1 && (
                <div className="arrowDown">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="serviceCTA urdu">
          AGRON کے ساتھ فصل کی کہانی بدلیں — آج ہی رابطہ کریں
        </div>
      </div>
    </section>
  );
}
