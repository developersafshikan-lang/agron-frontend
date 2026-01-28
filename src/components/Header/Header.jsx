import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <div className="brandTitle">Agron</div>
            <div className="brandSub">کسان دوست ڈرون سروس</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#variants">ماڈلز</a>
          <a href="#services">سروس</a>
          <a href="#areas">ایریاز</a>
          <a href="#packages">پیکجز</a>
          <a href="#booking">اپائنٹمنٹ</a>
        </nav>
      </div>
    </header>
  );
}
