"use client";

export default function ImageGallery({ images }) {
  return (
    <div className="gallery">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Style ${i+1}`} />
      ))}
    </div>
  );
}
