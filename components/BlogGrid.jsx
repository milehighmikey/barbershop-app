"use client";

export default function BlogGrid({ posts }) {
  return (
    <div className="blog-grid">
      {posts.map((p, i) => (
        <article key={i} className="blog-card">
          <img className="blog-cover" src={p.image} alt={p.title} />
          <div className="blog-body">
            <h4 className="blog-title">{p.title}</h4>
            <div className="blog-meta">{p.meta}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
