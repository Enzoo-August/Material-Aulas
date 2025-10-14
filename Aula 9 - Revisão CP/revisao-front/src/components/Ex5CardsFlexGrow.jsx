import "./Ex5CardsFlexGrow.css";

export default function Ex5CardsFlexGrow() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Ex5 — Cards com Mesma Altura
      </h2>

      {/* CONTAINER FLEX COM ALTURA IGUAL ENTRE OS CARDS */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* CARD 1 */}
        <div className="card flex-1">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 1
          </h3>
          <p className="text-gray-600 mb-4">
            Este é o primeiro card, com conteúdo mais curto.
          </p>
          <button className="btn">Saiba mais</button>
        </div>

        {/* CARD 2 */}
        <div className="card flex-1">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 2
          </h3>
          <p className="text-gray-600 mb-4">
            Este card possui um texto um pouco maior para testar se todos os
            elementos realmente mantêm a mesma altura.
          </p>
          <button className="btn">Saiba mais</button>
        </div>

        {/* CARD 3 */}
        <div className="card flex-1">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 3
          </h3>
          <p className="text-gray-600 mb-4">
            Todos os cards devem crescer igualmente para manter a altura uniforme.
          </p>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
