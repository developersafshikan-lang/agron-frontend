import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    crop: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("آپ کی اپائنٹمنٹ کی درخواست موصول ہو گئی ہے");
    setOpen(false);
    setForm({
      name: "",
      phone: "",
      city: "",
      crop: "",
      date: ""
    });
  };

  return (
    <>
      {/* Floating Button (LEFT) */}
      <div className="booking-fab" onClick={() => setOpen(true)}>
         <span>اپائنٹمنٹ</span>
      </div>

      {/* Booking Widget */}
      {open && (
        <div className="booking-panel">
          <div className="booking-header">
            <span>اپائنٹمنٹ بک کریں</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              کسان کا نام
              <input
                type="text"
                name="name"
                placeholder="اپنا نام لکھیں"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              موبائل نمبر
              <input
                type="tel"
                name="phone"
                placeholder="03XXXXXXXXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              شہر / علاقہ
              <input
                type="text"
                name="city"
                placeholder="مثلاً فیصل آباد"
                value={form.city}
                onChange={handleChange}
              />
            </label>

            <label>
              فصل
              <select
                name="crop"
                value={form.crop}
                onChange={handleChange}
                required
              >
                <option value="">فصل منتخب کریں</option>
                <option value="گندم">گندم</option>
                <option value="چاول">چاول</option>
                <option value="مکئی">مکئی</option>
                <option value="کپاس">کپاس</option>
                <option value="سبزیاں">سبزیاں</option>
              </select>
            </label>

            <label>
              ملاقات کی تاریخ
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">اپائنٹمنٹ بک کریں</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Booking;
