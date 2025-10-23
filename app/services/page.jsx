import Link from "next/link";
import services from "../../data/services";
import "../globals.css";

export const metadata = { title: "Services • SharpFade" };

export default function ServicesPage() {
  return (
    <main className="container" style={{paddingTop:24}}>
      <div className="section-head">
        <div className="section-kicker">What we provide</div>
        <div className="section-title">Services</div>
      </div>

      <div style={{ marginBottom: 20, display: "flex", gap: 10 }}>
        <Link className="btn btn-ghost" href="/">← Home</Link>
        <Link className="btn btn-ghost" href="/#booking">Book Now</Link>
      </div>


      <div className="grid cols-2">
        {services.map(s => (
          <article key={s.id} className="card service-card">
            <div className="row" style={{justifyContent:"space-between"}}>
              <h4 style={{margin:0}}>{s.title}</h4>
              <span className="service-price">${s.price.toFixed(2)}</span>
            </div>
            <p className="small" style={{marginTop:6}}>{s.description}</p>
            <p className="small" style={{color:"var(--soft)"}}>Duration: {s.duration} min</p>
            <div style={{marginTop:10}}>
              <Link className="btn btn-ghost" href={`/services/${s.slug}`}>View details</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
