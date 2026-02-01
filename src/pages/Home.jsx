import React from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Variants from "../components/Variants/Variants.jsx";
import Services from "../components/Services/Services.jsx";
import Areas from "../components/Areas/Areas.jsx";
import Packages from "../components/Packages/Packages.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Booking from "../components/Booking/Booking.jsx";
import Chatbot from "../components/Chatbot/Chatbot.jsx";
import WhyAgron from "../components/WhyAgron/WhyAgron.jsx";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui", direction: "rtl", background: "#fff" }}>
      <Header />
      <main>
        <Hero />
        <WhyAgron />
        <Variants />
        <Services />
        <Areas />
        <Packages />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <section id="booking">
        <Booking />
      </section>
      <Chatbot />
      <footer style={{ padding: 24, borderTop: "1px solid #eee", textAlign: "center" }}>
        <div>© Agron — پاکستان بھر کے کسانوں کے لیے</div>
      </footer>
    </div>
  );
}
