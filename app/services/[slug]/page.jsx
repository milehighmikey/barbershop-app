import Link from "next/link";
import { notFound } from "next/navigation";
import services from "../../../data/services";
import "../../globals.css";

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const svc = services.find(s => s.slug === params.slug);
  return { title: svc ? `${svc.title} • SharpFade` : "Service • SharpFade" };
}

export default function ServiceDetail({ params }) {
  const svc = services.find(s => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <main className="container" style={{paddingTop:24}}>
      <div className="section-head">
        <div className="section-kicker">Service</div>
        <div className="section-title">{svc.title}</div>
      </div>

      <div className="card" style={{maxWidth:720}}>
        <p className="small" style={{marginTop:0}}>{svc.description}</p>
        <p><b>Price:</b> ${svc.price.toFixed(2)}</p>
        <p><b>Duration:</b> {svc.duration} minutes</p>
        <div style={{display:"flex", gap:10, marginTop:12}}>
          <Link className="btn btn-primary" href="/#booking">Book this service</Link>
          <Link className="btn btn-ghost" href="/services">Back to services</Link>
          <Link className="btn btn-ghost" href="/">Home</Link>
        </div>
      </div>
    </main>
  );
}
