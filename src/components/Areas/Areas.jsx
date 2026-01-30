import React from "react";
import "./Areas.css";

export default function Areas() {
  return (
    <section id="areas" className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">📍 فعال علاقے</h2>
          <div className="meta">کوریج اور فصلوں کی حدود</div>
        </div>

        <div className="areasGrid">
          <div className="card cardPad cardHover">
            <div className="cardTitle">🌾 فارمز</div>
            <div className="cardSub">پاکستان بھر میں سروس دستیاب (placeholder coverage map بعد میں).</div>
            <div className="pillRow">
              <span className="pill">Punjab</span>
              <span className="pill">KPK</span>
              <span className="pill">Sindh</span>
              <span className="pill">Balochistan</span>
            </div>
          </div>

          <div className="card cardPad cardHover">
            <div className="cardTitle">🌿 فصلیں</div>
            <div className="cardSub">فصلوں کی سپورٹ: صرف پنجاب اور KPK (فی الحال).</div>
            <div className="pillRow">
              <span className="pill">گندم</span>
              <span className="pill">چاول</span>
              <span className="pill">مکئی</span>
              <span className="pill">کپاس</span>
            </div>
          </div>
        </div>

        <div className="mapPlaceholder">
          🗺️ Coverage Map Placeholder — بعد میں نقشہ/پن لگائیں
        </div>
      </div>
    </section>
  );
}
