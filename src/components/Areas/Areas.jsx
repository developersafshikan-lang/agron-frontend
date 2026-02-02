import React, { useState } from "react";
import "./Areas.css";

export default function Areas() {
  const [activeService, setActiveService] = useState(null);

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

        <div className="areasLayout">

          {/* SIDE SERVICES */}
          <div className="areasSide urdu">

            <div
              className={`serviceItem ${
                activeService === "spray" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService("spray")}
              onMouseLeave={() => setActiveService(null)}
            >
              🌿 فصل اسپرے
              <small>صرف پنجاب اور KPK</small>
            </div>

            <div
              className={`serviceItem ${
                activeService === "farm" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService("farm")}
              onMouseLeave={() => setActiveService(null)}
            >
              🌾 فارم سروس
              <small>پورا پاکستان</small>
            </div>

          </div>

          {/* MAP */}
          <div className="areasMapWrap">
            <div className="areasMapInner">

              <img
                src="/assets/map-pic.png"
                alt="Pakistan Service Coverage"
                className="areasMap"
              />

              {/* ALL PAKISTAN */}
              <div
                className={`mapOverlay all ${
                  activeService === "farm" ? "show" : ""
                }`}
              />

              {/* PUNJAB + KPK ONLY */}
              <div
                className={`mapOverlay pk ${
                  activeService === "spray" ? "show" : ""
                }`}
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
