import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="bg-overlay" />

      <div className="content">
        <p className="mission-line">
          یہ وہ لوگ ہیں جن کے لیے ہم AGRON بنا رہے ہیں
        </p>

        <h2 className="title">کسانوں کی آواز</h2>

        <p className="subtitle">
          جدید ڈرون ٹیکنالوجی، حقیقی زمینی نتائج
        </p>

        <div className="cards">
          <article className="card">
            <img src="/src/assets/farmer-1.jpg" alt="محمد اسلم" />
            <blockquote>
              AGRON نے میری زمین کو ایک نئی طاقت دی ہے۔
              اسپرے اب نہ صرف تیز ہے بلکہ انتہائی درست بھی۔
              کم لاگت، بہتر فصل — یہی اصل فائدہ ہے۔
            </blockquote>
            <footer>
              <strong>محمد اسلم</strong>
              <span>گندم و چاول کے کاشتکار — پنجاب</span>
            </footer>
          </article>

          <article className="card highlight">
            <img src="/src/assets/farmer-2.jpg" alt="رمیش کمار" />
            <blockquote>
              میں نے پہلی بار ٹیکنالوجی کو فصل کے ساتھ
              اتنا ہم آہنگ دیکھا ہے۔
              AGRON نے وقت، پیسہ اور محنت — تینوں بچائے۔
            </blockquote>
            <footer>
              <strong>رمیش کمار</strong>
              <span>کپاس کے کاشتکار — سندھ</span>
            </footer>
          </article>

  
        </div>
      </div>
    </section>
  );
}
