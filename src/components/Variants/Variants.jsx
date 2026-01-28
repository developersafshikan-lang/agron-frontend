import "./Variants.css";
import React from "react";

export default function Variants() {
  const items = [
    { name: "Agron 10L", desc: "چھوٹے/درمیانے پلاٹس کے لیے" },
    { name: "Agron T30", desc: "تیز رفتار، زیادہ کوریج" },
    { name: "Agron T60", desc: "ہائی کیپیسٹی، بڑے فارم" },
  ];

  return (
    <section id="variants" className="section">
      <div className="container">
        <h2 className="h2">Agron ماڈلز</h2>

        <div className="variantsGrid">
          {items.map((x) => (
            <div key={x.name} className="card variantCard">
              <span className="badge">Model</span>
              <div style={{ fontWeight: 900, marginTop: 10 }}>{x.name}</div>
              <div className="p" style={{ marginTop: 6 }}>{x.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
