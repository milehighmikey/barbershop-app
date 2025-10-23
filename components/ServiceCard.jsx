"use client";

export default function ServiceCard({ service }) {
  return (
    <div className="card">
      <div className="row" style={{justifyContent:"space-between"}}>
        <strong>{service.title}</strong>
        <span>${service.price.toFixed(2)}</span>
      </div>
      <div className="small" style={{marginTop:6}}>
        {service.description}
      </div>
      <div className="small" style={{marginTop:8}}>
        Duration: {service.duration} min
      </div>
    </div>
  );
}
