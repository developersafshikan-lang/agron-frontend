import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero heroBg">
      <div className="heroOverlay">
        <div className="container heroGrid">

          {/* LEFT EMPTY COLUMN (VISUAL BALANCE) */}
          <div className="heroSpacer" />

          {/* RIGHT CONTENT */}
          <div className="heroContent">
            <h1 className="heroTitle">
              <span className="heroTitleMain">
                ڈرون کے ذریعے سپرے
              </span>
              <span className="heroTitleSub">
                تیز، محفوظ اور مؤثر
              </span>
            </h1>

            <p className="heroLead">
              پاکستان بھر میں فارم اسپرے سروس، تربیت یافتہ پائلٹس،
              ٹیک سپورٹ اور Agron ڈرون ماڈلز (10L، 30L) کی معلومات۔
            </p>

            <div className="fieldStrip">
              <div className="fieldRow">
                <span className="fieldTag">کسان دوست سروس</span>
                <span className="fieldTag">کم پانی / کم ضیاع</span>
                <span className="fieldTag">محفوظ اسپرے</span>
                <span className="fieldTag">تیز کوریج</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
