"use client";

export default function BarberCard({ barber }) {
  return (
    <div className="card">
      <div className="row">
        <img className="avatar" src={barber.avatar} alt={barber.name} />
        <div>
          <strong>{barber.name}</strong>
          <div className="small">{barber.bio}</div>
        </div>
      </div>
      <div style={{marginTop:10}} className="small">
        Specialties: {barber.specialties.join(", ")}
      </div>
    </div>
  );
}
