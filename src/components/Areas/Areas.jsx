import React from "react";
import "./Areas.css";

export default function Areas() {
  return (
    <section id="areas" className="areasSection">
      <div className="areasContainer">

        {/* HEADER */}
        <div className="areasHeader">
          <h2 className="urduTitle">ہماری سروس کوریج</h2>
          <p className="areasIntro">
            ڈرون اسپرے اور فارم سروس درج ذیل علاقوں میں دستیاب ہے
          </p>
        </div>

        {/* MAP */}
        <div className="areasMapWrap">
          <div className="areasMapInner">

            <img
              src="/assets/map-pic.png"
              alt="Pakistan Service Coverage"
              className="areasMap"
            />

            {/* LABEL — FARM SERVICE */}
            <div className="mapLabel farms">
              <span className="labelIcon">🌾</span>
              <span className="labelText">
                فارم سروس
                <small>پورا پاکستان</small>
              </span>
            </div>

            {/* LABEL — CROP SPRAY */}
            <div className="mapLabel crops">
              <span className="labelIcon">🌿</span>
              <span className="labelText">
                فصل اسپرے
                <small>صرف پنجاب اور KPK</small>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
