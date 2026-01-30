import "./Variants.css";
import agron10L from "/src/assets/argon10L.png";
import agron30L from "/src/assets/argon30L.png";
import React from "react";

export default function Variants() {
  return (
    <section id="variants" className="variantsHero">
      <div className="variantsOverlay">

        <div className="variantStrip">

          {/* AGRON 10L */}
          <div className="variantColumn">
            <div className="variantContent urdu">
              <span className="variantTag">چھوٹے اور درمیانے فارم</span>

              <h3 className="variantName">Agron 10L</h3>

              <p className="variantDesc">
                کم لاگت میں مؤثر اسپرے، چھوٹے اور درمیانے کھیتوں کے لیے بہترین انتخاب۔
              </p>

              <ul className="variantSpecs">
                <li>4 ایکڑ فی گھنٹہ</li>
                <li>32 ایکڑ فی دن</li>
                <li>10 لیٹر اسپرے کی گنجائش</li>
                <li>مکمل خودکار فلائٹ سسٹم</li>
              </ul>

              <button className="variantBtn urdu">
                مزید تفصیل دیکھیں
              </button>
            </div>
          </div>

          {/* AGRON 30L */}
          <div className="variantColumn highlight">
            <div className="variantContent urdu">
              <span className="variantTag popular">سب سے زیادہ مقبول</span>

              <h3 className="variantName">Agron 30L</h3>

              <p className="variantDesc">
                بڑے زرعی رقبے، تیز رفتار اسپرے اور جدید فارمنگ کے لیے مکمل حل۔
              </p>

              <ul className="variantSpecs">
                <li>8 ایکڑ فی گھنٹہ</li>
                <li>64 ایکڑ فی دن</li>
                <li>30 لیٹر اسپرے + 50 لیٹر گرینول</li>
                <li>بیج، کھاد اور اسپرے</li>
              </ul>

              <button className="variantBtn urdu">
                مزید تفصیل دیکھیں
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}