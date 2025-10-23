import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BarberCard from "../components/BarberCard";
import ServiceCard from "../components/ServiceCard";
import BookingForm from "../components/BookingForm";
import ImageGallery from "../components/ImageGallery";
import BlogGrid from "../components/BlogGrid";
import Newsletter from "../components/Newsletter";

import barbers from "../data/barbers";
import services from "../data/services";
import gallery from "../data/gallery";
import "./globals.css";

const blogPosts = [
  { title: "5 Standards: Why You Should Visit a Barbershop", meta: "Guides • 5 min read", image: gallery[0] },
  { title: "Popular Cuts for Hair in 2025", meta: "Trends • 4 min read", image: gallery[3] },
  { title: "Favorites of Beard and Mustache Care", meta: "Beard Care • 6 min read", image: gallery[5] },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container">

        {/* Services (WHAT WE PROVIDE) */}
        <section id="services">
          <div className="section-head">
            <div className="section-kicker">What we provide</div>
            <div className="section-title">Services</div>
          </div>
          <div className="grid cols-2">
            {services.map(s => (
              <div key={s.id} className="card service-card">
                <div className="row" style={{justifyContent:"space-between"}}>
                  <h4>{s.title}</h4>
                  <span className="service-price">${s.price.toFixed(2)}</span>
                </div>
                <div className="small" style={{marginTop:6}}>{s.description}</div>
                <div className="small" style={{marginTop:8, color:"var(--soft)"}}>Duration: {s.duration} min</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team of professionals */}
        <section id="barbers">
          <div className="section-head">
            <div className="section-kicker">Team of professionals</div>
            <div className="section-title">Our Barbers</div>
          </div>
          <div className="grid cols-3">
            {barbers.map(b => <BarberCard key={b.id} barber={b} />)}
          </div>
        </section>

        {/* Style Gallery */}
        <section>
          <div className="section-head">
            <div className="section-kicker">Recent work</div>
            <div className="section-title">Style Gallery</div>
          </div>
          <ImageGallery images={gallery} />
        </section>

        {/* Blog */}
        <section>
          <div className="section-head">
            <div className="section-kicker">Our blog</div>
            <div className="section-title">Tips & Trends</div>
          </div>
          <BlogGrid posts={blogPosts} />
        </section>

        {/* Booking + Newsletter row */}
        <section id="booking">
          <div className="section-head">
            <div className="section-kicker">Special opening hours • Book now</div>
            <div className="section-title">Book an appointment</div>
          </div>
          <div className="grid cols-2">
            <BookingForm barbers={barbers} services={services} />
            <Newsletter />
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} SharpFade Barbershop — All rights reserved.
        </footer>
      </main>
    </>
  );
}
