import "./Ex2GridCards.css";

export default function Ex2GridCards() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Ex2 — Grid de Cards
      </h2>

      {/* GRID RESPONSIVO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* CARD 1 */}
        <div className="card">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 1
          </h3>
          <p className="text-gray-600 mb-4">
            Este é o texto descritivo do card. Responsivo e moderno!
          </p>
          <button className="btn">Saiba mais</button>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 2
          </h3>
          <p className="text-gray-600 mb-4">
            Cards com grid responsivo usando Tailwind CSS.
          </p>
          <button className="btn">Saiba mais</button>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 3
          </h3>
          <p className="text-gray-600 mb-4">
            Experimente redimensionar a tela para ver o grid mudar!
          </p>
          <button className="btn">Saiba mais</button>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 4
          </h3>
          <p className="text-gray-600 mb-4">
            Título com clamp para responsividade automática.
          </p>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
