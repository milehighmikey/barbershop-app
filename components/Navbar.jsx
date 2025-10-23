"use client";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="row">
          <span style={{fontWeight:700}}>SharpFade</span>
          <span className="badge">Open 9–7</span>
        </div>
        <div className="row small">
          <a href="#barbers">Barbers</a>
          <span>•</span>
          <a href="#services">Services</a>
          <span>•</span>
          <a href="#booking">Book</a>
        </div>
      </div>
    </nav>
  );
}
