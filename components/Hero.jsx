"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="kicker">Professional Barbershop</div>
        <h1 className="hero-title">We will fuck up your hair</h1>
        <p className="hero-sub">
          Classic cuts, modern fades, and hot-towel shaves. Walk-ins welcome or book online.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn btn-primary">Book an appointment</a>
          <a href="#services" className="btn btn-ghost">View services</a>
        </div>

        <div className="hero-inline">
          <div className="hero-phone">📞 +1 (234) 567-8900</div>
          <div className="small">Open daily 9am – 7pm</div>
        </div>

        <div className="stats">
          <div className="stat"><b>Since 2015</b><div className="small">9+ years of sharp fades</div></div>
          <div className="stat"><b>1000+ clients</b><div className="small">and counting</div></div>
          <div className="stat"><b>5 pros</b><div className="small">experienced barbers</div></div>
        </div>
      </div>
    </section>
  );
}
