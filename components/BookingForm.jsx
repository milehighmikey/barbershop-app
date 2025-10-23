"use client";

import { useState } from "react";

export default function BookingForm({ barbers, services }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    barberId: barbers[0]?.id ?? "",
    serviceId: services[0]?.id ?? "",
    notes: ""
  });

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function onSubmit(e) {
    e.preventDefault(); // plain JS, no types
    // Simulate sending to API
    const barber = barbers.find(b => b.id === form.barberId)?.name || "Any";
    const service = services.find(s => s.id === form.serviceId)?.title || "Service";
    alert(
      `Booking requested:\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `When: ${form.date} @ ${form.time}\n` +
      `Barber: ${barber}\n` +
      `Service: ${service}\n` +
      `Notes: ${form.notes || "-"}`
    );
    // reset a few fields
    setForm(f => ({ ...f, notes:"" }));
  }

  return (
    <form className="card" onSubmit={onSubmit} id="booking">
      <div className="grid cols-2">
        <div>
          <label className="small">Full Name</label>
          <input className="input" value={form.name} onChange={e=>update("name", e.target.value)} required />
        </div>
        <div>
          <label className="small">Phone</label>
          <input className="input" value={form.phone} onChange={e=>update("phone", e.target.value)} required />
        </div>
        <div>
          <label className="small">Date</label>
          <input className="input" type="date" value={form.date} onChange={e=>update("date", e.target.value)} required />
        </div>
        <div>
          <label className="small">Time</label>
          <input className="input" type="time" value={form.time} onChange={e=>update("time", e.target.value)} required />
        </div>
        <div>
          <label className="small">Barber</label>
          <select className="select" value={form.barberId} onChange={e=>update("barberId", e.target.value)}>
            {barbers.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        </div>
        <div>
          <label className="small">Service</label>
          <select className="select" value={form.serviceId} onChange={e=>update("serviceId", e.target.value)}>
            {services.map(s => <option key={s.id} value={s.id}>{s.title} (${s.price})</option>)}
          </select>
        </div>
        <div style={{gridColumn:"1 / -1"}}>
          <label className="small">Notes (optional)</label>
          <textarea className="textarea" rows={3} value={form.notes} onChange={e=>update("notes", e.target.value)} />
        </div>
      </div>
      <div style={{marginTop:12}}>
        <button className="button" type="submit">Request Booking</button>
      </div>
      <p className="small" style={{marginTop:10}}>
        * This demo shows a client-side alert. In production, POST to an API route.
      </p>
    </form>
  );
}
