import React from "react";
import "./Header.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">

        {/* BRAND */}
        <div className="brand">
          <div className="logo">
            <img src="/assets/imp-logo.jpeg" alt="Agron Logo" />
          </div>

          <div className="brandText">
            <div className="brandTitle">AGRŌN</div>
            <div className="brandSub">کسان دوست ڈرون اسپرے سروس</div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">
          <a href="#services">سروسز</a>
          <a href="#variants">ماڈلز</a>
          <a href="#areas">علاقے</a>
          <a href="#booking" className="navHighlight">اپائنٹمنٹ</a>
        </nav>

        {/* WHATSAPP CTA */}
        <a
          href="https://wa.me/92XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappBtn"
        >
          <FaWhatsapp />
          واٹس ایپ بُکنگ
        </a>

      </div>
    </header>
  );
}
