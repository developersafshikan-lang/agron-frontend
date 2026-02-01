import React from "react";
import "./Areas.css";
import pakistanMap from "/src/assets/map-pic.png";

export default function Areas() {
  const setActive = (e, area) => {
    const wrapper = e.currentTarget.closest(".mapWrapper");
    wrapper.dataset.active = area;
  };

  const clearActive = (e) => {
    const wrapper = e.currentTarget.closest(".mapWrapper");
    wrapper.dataset.active = "";
  };

  return (
    <section id="areas" className="section">
      <div className="container">

        <div className="sectionHeader">
          <h2 className="urduTitle">ہماری سروس کوریج</h2>
        </div>


        <div className="mapCard">
          <div className="mapWrapper" data-active="">

            <img
              src={pakistanMap}
              alt="Pakistan Service Coverage Map"
              className="pakistanMap"
            />

            {/* FARM SERVICES — ALL PAKISTAN */}
            <div
              className="serviceMarker farms"
              onMouseEnter={(e) => setActive(e, "farms")}
              onMouseLeave={clearActive}
            >
              <span className="markerIcon">🌾</span>
              <span className="markerLabel">
                فارم سروس<br />
                <small>پورا پاکستان</small>
              </span>
            </div>

            {/* CROP SERVICES — PUNJAB + KPK */}
            <div
              className="serviceMarker crops"
              onMouseEnter={(e) => setActive(e, "crops")}
              onMouseLeave={clearActive}
            >
              <span className="markerIcon">🌿</span>
              <span className="markerLabel">
                فصلیں<br />
                <small>صرف پنجاب اور KPK</small>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
