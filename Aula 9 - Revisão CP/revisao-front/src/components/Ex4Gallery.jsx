import "./Ex4Gallery.css";

export default function Ex4Gallery() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-center">Ex4 — Galeria</h2>

      {/* GRID RESPONSIVO */}
      <div className="gallery grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="gallery-item">
            <img
              src={`https://picsum.photos/seed/${i + 1}/400/300`}
              alt={`Imagem ${i + 1}`}
              className="gallery-img"
            />
            <div className="caption">Imagem {i + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
