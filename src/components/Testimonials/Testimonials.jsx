import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="bg-overlay" />

      <div className="content">
        <p className="mission-line">
          یہ وہ کسان ہیں جن کے لیے ہم AGRON تیار کر رہے ہیں
        </p>

        <h2 className="title">کسانوں کی آواز</h2>

        <p className="subtitle">
          حقیقی کھیت، حقیقی نتائج
        </p>

        <div className="cards">
          <article className="card">
            <img src="/assets/farmer-1.jpg" alt="محمد اسلم" />
            <blockquote>
              AGRON کی ڈرون اسپرے سروس نے ہمارا کام آسان بنا دیا ہے۔
              پہلے پورا دن لگ جاتا تھا، اب کم وقت میں بہتر اسپرے ہو جاتا ہے۔
              دوا بھی کم استعمال ہوتی ہے اور فصل محفوظ رہتی ہے۔
            </blockquote>
            <footer>
              <strong>محمد اسلم</strong>
              <span>گندم اور چاول کے کاشتکار، پنجاب</span>
            </footer>
          </article>

          <article className="card highlight">
            <img src="/assets/farmer-2.jpg" alt="عبدالرحمان" />
            <blockquote>
              ہم نے AGRON کی سروس آزمائی اور نتائج خود دیکھے۔
              اسپرے یکساں ہوتا ہے اور فصل کو کوئی نقصان نہیں پہنچتا۔
              محنت بھی کم ہوئی اور خرچ بھی قابو میں رہا۔
            </blockquote>
            <footer>
              <strong>عبدالرحمان</strong>
              <span>کپاس کے کاشتکار، جنوبی پنجاب</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
