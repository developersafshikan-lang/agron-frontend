import React from "react";
import "./Hero.css";

export default function Hero() {
  const whatsapp =
    "https://wa.me/92XXXXXXXXXX?text=%D8%A7%DA%AF%D8%B1%D9%88%D9%86%20%D8%B3%D9%BE%D8%B1%DB%92%20%D8%B3%D8%B1%D9%88%D8%B3%20%DA%A9%DB%92%20%D8%A8%D8%A7%D8%B1%DB%92%20%D9%85%DB%8C%DA%BA%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%DA%86%D8%A7%DB%81%DB%8C%DB%92";

  return (
    <section className="hero">
      <div className="container heroInner">
        <h1 className="heroTitle">ڈرون کے ذریعے سپرے — تیز، محفوظ، مؤثر</h1>
        <p className="heroLead">
          پاکستان بھر میں فارم اسپرے سروس، تربیت یافتہ پائلٹس، ٹیک سپورٹ، اور Agron ڈرون ماڈلز (10L, T30, T60) کی معلومات۔
        </p>

        <div className="heroActions">
          <a className="btn btnPrimary" href="#booking">🌾 اپائنٹمنٹ بک کریں</a>
          <a className="btn btnGhost" href={whatsapp} target="_blank" rel="noreferrer">💬 واٹس ایپ کنفرمیشن</a>
        </div>

        <div className="fieldStrip">
          <div className="fieldRow">
            <span className="fieldTag">🚜 کسان دوست سروس</span>
            <span className="fieldTag">💧 کم پانی/کم ضیاع</span>
            <span className="fieldTag">🛡️ محفوظ اسپرے</span>
            <span className="fieldTag">⏱️ تیز کوریج</span>
          </div>
        </div>

        <div className="kpiGrid">
          {[
            ["🎥 اسپرے ویڈیوز", "جلد شامل ہوں گی"],
            ["📊 رزلٹس ڈیٹا", "نمونہ"],
            ["🧑‍🌾 فارمر ٹیسٹیمنیلز", "ویڈیوز"],
            ["🛒 Ino Drone", "برائے فروخت"],
          ].map(([t, d]) => (
            <div key={t} className="kpiCard">
              <div className="kpiTitle">{t}</div>
              <div className="kpiSub">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
