"use client";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div>
        <div className="section-kicker">Subscribe</div>
        <h3 style={{margin:0}}>Get grooming tips & special offers</h3>
      </div>
      <form onSubmit={(e)=>{e.preventDefault(); alert("Subscribed!");}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr auto", gap:"10px"}}>
          <input className="input" type="email" required placeholder="Your email address" />
          <button className="btn btn-primary" type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}
