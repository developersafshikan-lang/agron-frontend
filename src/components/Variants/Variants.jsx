import "./Variants.css";
import React from "react";  

export default function Variants() {
  return (
    <section id="variants" className="variantsHero">
      <div className="variantsOverlay">
        <div className="variantStrip">

          {/* AGRON 10L */}
          <div className="variantColumn">
            <div className="variantContent urdu">

              <span className="variantTag">
                چھوٹے اور درمیانے فارم
              </span>

              <h3 className="variantName">Agron 10L</h3>

              <p className="variantDesc">
                کم لاگت میں مؤثر اسپرے، روزمرہ فارمنگ کے لیے قابلِ اعتماد حل۔
              </p>

              {/* BENEFIT PILLS */}
              <div className="variantPills">
                <span className="variantPill">کسان دوست سروس</span>
                <span className="variantPill">کم پانی، کم ضیاع</span>
                <span className="variantPill">محفوظ اسپرے</span>
                <span className="variantPill">چھوٹے کھیتوں کے لیے موزوں</span>
              </div>

            </div>
          </div>

          {/* AGRON 30L */}
          <div className="variantColumn highlight">
            <div className="variantContent urdu">

              <span className="variantTag popular">
                سب سے زیادہ مقبول
              </span>

              <h3 className="variantName">Agron 30L</h3>

              <p className="variantDesc">
                بڑے زرعی رقبے، تیز رفتار اسپرے اور جدید فارمنگ کے لیے مکمل حل۔
              </p>

              {/* BENEFIT PILLS */}
              <div className="variantPills">
                <span className="variantPill">تیز کوریج</span>
                <span className="variantPill">بڑے فارم کے لیے طاقتور</span>
                <span className="variantPill">اسپرے + گرینول</span>
                <span className="variantPill">پروفیشنل فارمنگ حل</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
