import React, { useState } from "react";
import "./Packages.css";

export default function Packages() {
  const [open, setOpen] = useState(false);

  return (
    <section id="packages" className="packagesSection">
      <div className="packagesLayout">

        {/* LEFT IMAGE PANEL */}
        <div className="packagesImage">
          <img
            src="/assets/dronespray.png"
            alt="ڈرون کے ذریعے فصلوں کا اسپرے"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="packagesContent">
          <div className="packageCard">

            <h2 className="packagesTitle">ڈرون اسپرے سروس</h2>

            <p className="packagesTagline">
              کم وقت میں، یکساں اور محفوظ زرعی اسپرے
            </p>

            <div className="packagePrice">
              30,000 روپے
              <span>فی سیشن</span>
            </div>

            <div className="packageChips">
              <span>🌍 پاکستان بھر میں</span>
              <span>🌿 پنجاب + KPK</span>
              <span>📐 25 ایکڑ تک</span>
              <span>🔁 3–4 سیشن</span>
            </div>

            <button
              className="detailsToggle"
              onClick={() => setOpen(!open)}
            >
              {open ? "تفصیل چھپائیں ▲" : "مزید تفصیل ▼"}
            </button>

            {open && (
              <div className="packageDetails">
                <p>
                  <strong>یہ پیکج کن کے لیے ہے؟</strong><br />
                  اُن کسانوں کے لیے جو بڑے رقبے پر کم محنت میں مؤثر اور محفوظ اسپرے چاہتے ہیں۔
                </p>

                <ul>
                  <li>✔ بہتر اور یکساں اسپرے</li>
                  <li>✔ کم کیمیکل اور پانی کا ضیاع</li>
                  <li>✔ فصل کو نقصان نہیں</li>
                </ul>

                <div className="noSaleNote">
                  ⚠️ نوٹ: کوئی بھی ڈرون فروخت کے لیے دستیاب نہیں ہے — ہم صرف ڈرون اسپرے سروس فراہم کرتے ہیں۔
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
