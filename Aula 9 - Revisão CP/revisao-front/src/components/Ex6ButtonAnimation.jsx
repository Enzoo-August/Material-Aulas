import "./Ex6ButtonAnimation.css";

export default function Ex6ButtonAnimation() {
  return (
    <section className="py-10 px-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-8">Ex6 — Botão Animado</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* BOTÃO COM ANIMAÇÃO PULSE */}
        <button
          className="btn-animated pulse"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
          }}
        >
          Botão Pulse
        </button>

        {/* BOTÃO COM EFEITO DE HIGHLIGHT LATERAL */}
        <button
          className="btn-animated highlight"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
          }}
        >
          Botão Highlight
        </button>
      </div>
    </section>
  );
}
