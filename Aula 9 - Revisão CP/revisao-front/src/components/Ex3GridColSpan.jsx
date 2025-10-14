import "./Ex3GridColSpan.css";

export default function Ex3GridColSpan() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Ex3 — Card Especial com col-span
      </h2>

      {/* GRID RESPONSIVO IGUAL AO EX2 */}
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
            Card padrão com hover normal.
          </p>
          <button className="btn">Saiba mais</button>
        </div>

        {/* CARD 2 — ESPECIAL (OCUPA DUAS COLUNAS EM DESKTOP + ANIMAÇÃO PULSE) */}
        <div className="card special-card lg:col-span-2">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card Especial
          </h3>
          <p className="text-gray-600 mb-4">
            Este card ocupa duas colunas em telas grandes e possui uma animação
            pulse para chamar atenção.
          </p>
          <button className="btn">Explorar</button>
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
            Mesmo efeito de hover, sem animação.
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
            Responsivo e limpo com Tailwind + CSS externo.
          </p>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
