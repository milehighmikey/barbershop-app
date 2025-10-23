"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="row" style={{ justifyContent: "space-between", width: "100%" }}>
          {/* Left: brand */}
          <div className="row">
            <Link href="/" className="brand">SharpFade</Link>
            <span className="badge">Open 9–7</span>
          </div>

          {/* Right: desktop links + mobile toggle */}
          <div className="row" style={{ gap: 12 }}>
            <div className="row small nav-links">
              <a href="/#barbers">Barbers</a>
              <span>•</span>
              <Link href="/services">Services</Link>
              <span>•</span>
              <a href="/#booking">Book</a>
            </div>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={open ? "true" : "false"}
              onClick={() => setOpen(v => !v)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mobile-nav">
            <a href="/#barbers" onClick={() => setOpen(false)}>Barbers</a>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <a href="/#booking" onClick={() => setOpen(false)}>Book</a>
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
